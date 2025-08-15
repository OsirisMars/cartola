from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import Optional, List
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId

router = APIRouter(prefix="/times", tags=["Times"])

# ===============================
# Conexão com MongoDB
# ===============================
MONGO_URI = "mongodb://localhost:27017"
DB_NAME = "cartola"

client = AsyncIOMotorClient(MONGO_URI)
db = client[DB_NAME]
times_collection = db["times"]

# ===============================
# Modelos
# ===============================
class TimeCreate(BaseModel):
    nome: str
    volante: Optional[str] = None
    zagueiro: Optional[str] = None
    tecnico: Optional[str] = None

class TimeResponse(TimeCreate):
    id: str

# ===============================
# Funções auxiliares
# ===============================
def time_helper(time) -> dict:
    return {
        "id": str(time["_id"]),
        "nome": time["nome"],
        "volante": time.get("volante"),
        "zagueiro": time.get("zagueiro"),
        "tecnico": time.get("tecnico"),
}

# ===============================
# Rotas
# ===============================
@router.get("/", response_model=List[TimeResponse])
async def listar_times():
    times = []
    async for time in times_collection.find():
        times.append(time_helper(time))
    return times

@router.post("/", response_model=TimeResponse)
async def criar_time(dados: TimeCreate):
    # Checa se já existe
    existente = await times_collection.find_one({"nome": dados.nome})
    if existente:
        raise HTTPException(status_code=400, detail="Time já existe.")

    novo_time = dados.dict()
    resultado = await times_collection.insert_one(novo_time)

    criado = await times_collection.find_one({"_id": resultado.inserted_id})
    return time_helper(criado)