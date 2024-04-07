from pydantic import BaseModel
from datetime import datetime

class User(BaseModel):
    nombre: str
    apellido: str
    tipo_usuario: int
    numero_cedula: int
    telefono: int
    email: str
    username: str
    password: str
    fecha_registro: datetime
    ultima_sesion: datetime