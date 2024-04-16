from fastapi import APIRouter, HTTPException
from controllers.detailSale_controllers import DetailSaleControllers
from models.detailSale_models import DetailSale

router = APIRouter()
n_detailsale = DetailSaleControllers()

@router.get("/get/detailsale/{detailSaleId}")
async def get_detailsale_saleId(detailSale: int):
    resul = n_detailsale.get_detailsale_saleId(detailSale)
    return resul

@router.get("/get/detailsale/{productId}")
async def get_detailsale_productId(productId: int):
    resul = n_detailsale.get_detailsale_productId(productId)
    return resul