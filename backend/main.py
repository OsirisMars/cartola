from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from rotas import rotas
from models.Userlogin import UsuarioLogin
from database import db
from passlib.context import CryptContext
from fastapi import HTTPException

app = FastAPI()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(rotas.router)

@app.get("/")
def home():
    return {"mensagem": "Bem-vindo à API do FutClub"}

@app.post("/cadastro")
async def cadastro(usuario: UsuarioLogin):
    usuarios = db.usuarios
    existente = await usuarios.find_one({"email": usuario.email})
    if existente:
        raise HTTPException(status_code=400, detail="E-mail já cadastrado")
    
    senha_hash = pwd_context.hash(usuario.senha)
    await usuarios.insert_one({"email": usuario.email, "senha": senha_hash})
    return {"msg": "Usuário criado com sucesso"}

@app.post("/login")
async def login(usuario: UsuarioLogin):
    usuarios = db.usuarios
    user = await usuarios.find_one({"email": usuario.email})
    if not user or not pwd_context.verify(usuario.senha, user["senha"]):
        raise HTTPException(status_code=401, detail="Credenciais inválidas")
    return {"msg": "Login bem-sucedido", "email": usuario.email}
