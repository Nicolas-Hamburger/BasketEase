from pydantic import BaseModel
from datetime import datetime

class inventory (BaseModel):
    inventario_id: int
    producto_id: int
    cantidad_actual: int
    cantidad_minima: int
    fecha_ultima_actualizacion: datetime