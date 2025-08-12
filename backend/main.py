from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from rotas import usuarios, times

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rotas
app.include_router(usuarios.router)
app.include_router(times.router)

@app.get("/")
def home():
    return {"mensagem": "Bem-vindo à API do FutClub"}
