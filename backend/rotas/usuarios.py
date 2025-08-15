from fastapi import APIRouter, HTTPException
from passlib.context import CryptContext
from models.user import UsuarioLogin
from motor.motor_asyncio import AsyncIOMotorClient

router = APIRouter(prefix="/usuarios", tags=["Usuários"])

# ===============================
# Conexão com MongoDB
# ===============================
MONGO_URI = "mongodb://localhost:27017"
DB_NAME = "cartola"  # Verifique se o nome do seu banco de dados está correto

client = AsyncIOMotorClient(MONGO_URI)
db = client[DB_NAME]
usuarios_collection = db["usuarios"]

# ===============================
# O restante do código foi ajustado para usar a nova variável
# ===============================
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@router.post("/cadastro")
async def cadastro(usuario: UsuarioLogin):
    # Usando a variável de coleção
    existente = await usuarios_collection.find_one({"email": usuario.email})
    if existente:
        raise HTTPException(status_code=400, detail="E-mail já cadastrado")
    
    senha_hash = pwd_context.hash(usuario.senha)
    await usuarios_collection.insert_one({"email": usuario.email, "senha": senha_hash})
    return {"msg": "Usuário criado com sucesso"}

@router.post("/login")
async def login(usuario: UsuarioLogin):
    # Usando a variável de coleção
    user = await usuarios_collection.find_one({"email": usuario.email})
    if not user or not pwd_context.verify(usuario.senha, user["senha"]):
        raise HTTPException(status_code=401, detail="Credenciais inválidas")
    return {"msg": "Login bem-sucedido", "email": usuario.email}