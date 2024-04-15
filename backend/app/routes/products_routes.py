from fastapi import APIRouter, HTTPException
from controllers.products_controllers import ProductsControllers
from models.products_models import Products

router = APIRouter()
n_products = SalesControllers()

@router.get("/get/products")
async def get_products():
    resul = n_products.get_products()
    return resul

@router.get("/get/products/{productId}")
async def get_products_productId(productId: int):
    resul = n_products.get_products_productId(productId)
    return resul

@router.get("/get/products/{supplier}")
async def get_products_supplier(supplier: str):
    resul = n_products.get_products_supplier(supplier)
    return resul

@router.post("/post/products")
async def post_products(nproducts: Products):
    resul = n_products.post_products(n_products)
    return resul

@router.put("/update/products/{productId}")
async def update_product(productId: int, nproducts: Products):
    resul = n_products.update_products(productId, nproducts)
    return resul

@router.delete("/delete/products/{productId}")
async def delete_products(productId: int):
    result = n_products.delete_products(productId)
    return result