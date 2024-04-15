from fastapi import APIRouter, HTTPException
from controllers.sale_controllers import SalesControllers
from models.sale_models import Sale

router = APIRouter()
n_sale = SalesControllers()

@router.get("/get/sales")
async def get_sales():
    resul = n_sale.get_sales()
    return resul

@router.get("/get/sales/{date_sale}")
async def get_sales_date(date_sale: str):
    resul = n_sale.get_sales_date(date_sale)
    return resul

@router.get("/get/sales/{userId}")
async def get_sales_idUser(userId: int):
    resul = n_sale.get_sale_idUser(userId)
    return resul

@router.post("/post/sales")
async def post_sale(nsale: Sale):
    resul = n_sale.post_sale(nsale)
    return resul    

@router.put("/update/sales/{saleId}")
async def update_sales(saleId: int, nsale: Sale):
    resul = n_sale.update_sale(saleId, nsale)
    return resul    

@router.delete("/delete/sales/{SaleId}")
async def delete_sale(SaleId: int):
    resul = n_sale.delete_sale(saleId)
    return resul