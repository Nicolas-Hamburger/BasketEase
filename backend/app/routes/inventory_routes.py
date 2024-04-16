from fastapi import APIRouter, HTTPException
from controllers.inventory_controllers import InventoryControllers
from models.inventory_models import Inventory

router = APIRouter()
n_inventory = InventoryControllers()

@router.get("/get/inventory")
async def get_inventory():
    resul = n_inventory.get_inventory()
    return resul

@router.get("/get/inventory/{inventoryId}")
async def get_inventoryId(invetoryId: int):
    resul = n_inventory.get_inventory_id(invetoryId)
    return resul