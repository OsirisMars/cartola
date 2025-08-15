from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, List

router = APIRouter(prefix="/times", tags=["Times"])

# Modelo para criar time
class TimeCreate(BaseModel):
    nome: str
    volante: Optional[str] = None
    zagueiro: Optional[str] = None
    tecnico: Optional[str] = None

# Modelo para listar/retornar time
class Time(TimeCreate):
    id: int

# Lista temporária para simular um banco
times_db: List[Time] = [
    Time(id=1, nome="Futebol Clube SP", volante="Juninho"),
    Time(id=2, nome="Atlético do Norte", volante="Juninho"),
    Time(id=3, nome="Flamengo", volante="Juninho", zagueiro="Ronaldo"),
]

@router.get("/", response_model=List[Time])
async def listar_times():
    return times_db

@router.post("/", response_model=Time)
async def criar_time(dados: TimeCreate):
    # Checa se já existe time com mesmo nome
    for t in times_db:
        if t.nome.lower() == dados.nome.lower():
            raise HTTPException(status_code=400, detail="Time já existe.")

    novo_time = Time(
        id=len(times_db) + 1,
        **dados.dict()
    )
    times_db.append(novo_time)
    return novo_time
