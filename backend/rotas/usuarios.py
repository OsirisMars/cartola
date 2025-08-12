from fastapi import APIRouter, HTTPException
from passlib.context import CryptContext
from models.user import UsuarioLogin
from database import db

router = APIRouter(prefix="/usuarios", tags=["Usuários"])

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@router.post("/cadastro")
async def cadastro(usuario: UsuarioLogin):
    usuarios = db.usuarios
    existente = await usuarios.find_one({"email": usuario.email})
    if existente:
        raise HTTPException(status_code=400, detail="E-mail já cadastrado")
    
    senha_hash = pwd_context.hash(usuario.senha)
    await usuarios.insert_one({"email": usuario.email, "senha": senha_hash})
    return {"msg": "Usuário criado com sucesso"}

@router.post("/login")
async def login(usuario: UsuarioLogin):
    usuarios = db.usuarios
    user = await usuarios.find_one({"email": usuario.email})
    if not user or not pwd_context.verify(usuario.senha, user["senha"]):
        raise HTTPException(status_code=401, detail="Credenciais inválidas")
    return {"msg": "Login bem-sucedido", "email": usuario.email}
