from pydantic import BaseModel
from datetime import datetime

class Products (BaseModel):
    producto_id: int
    nombre: str
    descripcion: str
    proveedor: str
    cantidad_disponible: int
    cantidad_minima: int
    precio_unitario: float
    fecha_ultima_actualizacion: datetime