# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Permitir acesso do React (ex: localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # ajuste para seu frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rota de teste
@app.get("/")
def home():
    return {"mensagem": "Bem-vindo à API do FutClub || Hello World"}


# Rota para listar times
@app.get("/times")
def listar_times():
    return [
        {"id": 1, "nome": "Futebol Clube SP"},
        {"id": 2, "nome": "Atlético do Norte"},
        {"id": 3, "nome": "Flamengo"},
    ]

# Rota para criar um time
@app.post("/times")
def criar_time(dados: dict):
    return {"msg": "Time criado", "time": dados}


# teste 1 2 3