from pydantic import BaseModel, SecretStr, EmailStr
from datetime import datetime

class Users(BaseModel):
    user_id: int
    nombre: str
    apellido: str
    tipo_usuario: int
    telefono: int
    email: EmailStr
    password: SecretStr
    fecha_registro: datetime
    ultima_sesion: datetime