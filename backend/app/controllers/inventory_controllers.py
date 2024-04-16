import mysql.connector
from fastapi import HTTPException
from config.connection import get_connection
from models.inventory_models import Inventory
from fastapi.encoders import jsonable_encoder

class InventoryControllers:
    
    def get_inventory(self):
        try:
            conect = get_connection()
            cursor = conect.cursor()
            cursor.execute("SELECT * FROM inventario")
            result = cursor.fetchall()
            payload = []
            content = {}
            for data in result:
                content = {
                    'inventario_id': data[0],
                    'producto_id': data[1],
                    'cantidad_actual': data[2],
                    'cantidad_minima': data[3],
                    'fecha_ultima_actualizacion': data[4],
                }
                payload.append(content)
                content = {}
            json_data = jsonable_encoder(payload)
            return {"Resultado API: ": json_data}
        except Exception as error:
            return {"Resultado API: ":str(error)}
    
    def get_inventory_id(self, invetoryId):
        try:
            conect = get_connection()
            cursor = conect.cursor()
            cursor.execute("SELECT * FROM inventario WHERE inventario_id = %s", (invetoryId,))
            result = cursor.fetchone()
            if result:
                inventory = {
                    'inventario_id': result[0],
                    'producto_id': result[1],
                    'cantidad_actual': result[2],
                    'cantidad_minima': result[3],
                    'fecha_ultima_actualizacion': result[4],
                }
                return {"Resultado API: ": inventory}
            else:
                return {"Resultado API: ": "No se ha encontrado el inventario"}
        except Exception as error:
            return {"Resultado API: ": str(error)}
    
invertory_controllers = InventoryControllers()