from pydantic import BaseModel
from datetime import datetime

class Sale (BaseModel):
    venta_id: int
    fecha_venta: datetime
    producto_id: int
    usuario_id: int
    total_venta: float
    fecha_registro: datetime