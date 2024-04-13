from pydantic import BaseModel
from datetime import datetime

class sale (BaseModel):
    venta_id: int
    fecha_venta: datetime
    usuario_id: int
    total_venta: float
    fecha_registro: datetime