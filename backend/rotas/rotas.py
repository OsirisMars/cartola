from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class Time(BaseModel):
    nome: str

@router.get("/times")
def listar_times():
    return [
        {"id": 1, "nome": "Futebol Clube SP"},
        {"id": 2, "nome": "Atlético do Norte"},
        {"id": 3, "nome": "Flamengo"},
    ]

@router.post("/times")
def criar_time(dados: Time):
    return {"msg": "Time criado", "time": dados}
