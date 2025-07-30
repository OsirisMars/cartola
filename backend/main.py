from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from rotas import times

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(times.router)

@app.get("/")
def home():
    return {"mensagem": "Bem-vindo à API do FutClub"}


@app.post("/login")
def login(usuario: UsuarioLogin):
    # Simulação de verificação
    if usuario.email == "teste@email.com" and usuario.senha == "123456":
        return {"msg": "Login bem-sucedido", "token": "abc123"}
    return {"msg": "Credenciais inválidas"}, 401