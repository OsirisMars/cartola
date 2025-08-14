from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/times", tags=["Times"])

class Time(BaseModel):
    nome: str

@router.get("/")
async def listar_times():
    return [
        {"id": 1, "nome": "Futebol Clube SP", "volante": "Juninho"},
        {"id": 2, "nome": "Atlético do Norte", "volante": "Juninho"},
        {"id": 3, "nome": "Flamengo", "volante": "Juninho", "zagueiro":"Ronaldo"},
    ]

@router.post("/")
async def criar_time(dados: Time):
    return {"msg": "Time criado", "time": dados}
