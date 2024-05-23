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
            return {"Resultado API: ": str(error)}

    def get_inventory_id(self, inventoryId):
        try:
            conect = get_connection()
            cursor = conect.cursor()
            cursor.execute("SELECT * FROM inventario WHERE inventario_id = %s", (inventoryId,))
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

    def create_inventory(self, inventory: Inventory):
        try:
            conect = get_connection()
            cursor = conect.cursor()
            insert_query = """
            INSERT INTO inventario (producto_id, cantidad_actual, cantidad_minima, fecha_ultima_actualizacion)
            VALUES (%s, %s, %s, NOW())
            """
            cursor.execute(insert_query, (inventory.producto_id, inventory.cantidad_actual, inventory.cantidad_minima))
            conect.commit()
            cursor.close()
            conect.close()
            return {"message": "Inventario creado exitosamente"}
        except Exception as e:
            raise HTTPException(status_code=400, detail=str(e))

    def update_inventory(self, inventoryId: int, inventory: Inventory):
        try:
            conect = get_connection()
            cursor = conect.cursor()
            update_query = """
            UPDATE inventario
            SET producto_id = %s, cantidad_actual = %s, cantidad_minima = %s, fecha_ultima_actualizacion = NOW()
            WHERE inventario_id = %s
            """
            cursor.execute(update_query, (inventory.producto_id, inventory.cantidad_actual, inventory.cantidad_minima, inventoryId))
            conect.commit()
            cursor.close()
            conect.close()
            return {"message": "Inventario actualizado exitosamente"}
        except Exception as e:
            raise HTTPException(status_code=400, detail=str(e))

    def delete_inventory(self, inventoryId: int):
        try:
            conect = get_connection()
            cursor = conect.cursor()
            delete_query = "DELETE FROM inventario WHERE inventario_id = %s"
            cursor.execute(delete_query, (inventoryId,))
            conect.commit()
            cursor.close()
            conect.close()
            return {"message": "Inventario eliminado exitosamente"}
        except Exception as e:
            raise HTTPException(status_code=400, detail=str(e))

invertory_controllers = InventoryControllers()