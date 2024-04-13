from pydantic import BaseModel

class detailSale (BaseModel):
    detalle_venta_id: int
    venta_id: int
    product_id: int
    cantidad_vendida: int
    precio_unitario: float
    