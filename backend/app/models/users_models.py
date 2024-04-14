from pydantic import BaseModel, EmailStr
from datetime import datetime

class Users(BaseModel):
    nombre: str
    apellido: str
    tipo_usuario: int
    numero_cedula: int
    telefono: int
    email: EmailStr
    password: str