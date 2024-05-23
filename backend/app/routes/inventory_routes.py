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
async def get_inventory_id(inventoryId: int):
    resul = n_inventory.get_inventory_id(inventoryId)
    return resul

@router.post("/create/inventory")
async def create_inventory(inventory: Inventory):
    resul = n_inventory.create_inventory(inventory)
    return resul

@router.put("/update/inventory/{inventoryId}")
async def update_inventory(inventoryId: int, inventory: Inventory):
    resul = n_inventory.update_inventory(inventoryId, inventory)
    return resul

@router.delete("/delete/inventory/{inventoryId}")
async def delete_inventory(inventoryId: int):
    resul = n_inventory.delete_inventory(inventoryId)
    return resul
    resul = n_inventory.get_inventory_id(invetoryId)
    return resul