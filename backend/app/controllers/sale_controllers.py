import mysql.connector
from fastapi import HTTPException
from config.connection import get_connection
from models.sale_models import Sale
from fastapi.encoders import jsonable_encoder
from datetime import datetime

class SalesControllers:
    
    def get_sales(self):
        try:
            conect = get_connection()
            cursor = conect.cursor()
            cursor.execute("SELECT * FROM ventas")
            result = cursor.fetchall()
            payload = []
            content = {}
            for data in result:
                content = {
                    'venta_id': result[0],
                    'fecha_venta': result[1],
                    'producto_id': result[2],
                    'usuario_id': result[3],
                    'total_venta': result[4],
                    'fecha_registro': result[5],
                }
                payload.append(content)
                content = {}
            json_data = jsonable_encoder(payload)
            return {"Resultado API: ": json_data}
        except Exception as error:
            return {"Resultado API: ":str(error)}
        
    def get_sales_date(self, date_sale: str):
        try:
            date_formatted = datetime.strptime(date_sale, "%d-%m-%Y")
            conect = get_connection()
            cursor = conect.cursor()
            formatted_date = date_formatted.strftime("%Y-%m-%d")
            cursor.execute("SELECT * FROM ventas WHERE fecha_venta = %s", (formatted_date,))
            result = cursor.fetchone()
            if result:
                sale = {
                    'venta_id': result[0],
                    'fecha_venta': result[1],
                    'producto_id': result[2],
                    'usuario_id': result[3],
                    'total_venta': result[4],
                    'fecha_registro': result[5],
                }
                return {"Resultado API: ": sale}
            else:
                return {"Resultado API: ": "No hay ventas en la fecha consultada"}
        except Exception as error:
            return {"Resultado API:": str(error)}
            
    def get_sale_idUser(self, userId):
        try:
            conect = get_connection()
            cursor = conect.cursor()
            cursor.execute("SELECT * FROM usuarios WHERE usuario_id = %s", (userId,))
            result = cursor.fetchone()
            if result:
                sale = {
                    'venta_id': result[0],
                    'fecha_venta': result[1],
                    'producto_id': result[2],
                    'usuario_id': result[3],
                    'total_venta': result[4],
                    'fecha_registro': result[5],
                }
                return {"Resultado API: ": sale}
            else:
                return {"Resultado API: ": "El usuario no ha realizado ninguna venta"}
        except Exception as error:
            return {"Resultado API: ": str(error)}
    
    def post_sale(self, nsale: Sale):
        try:
            conect = get_connection()
            cursor = conect.cursor()
            Product = nsale.producto_id
            TotalSale = nsale.total_venta
            cursor.execute("INSERT INTO ventas(producto_id, total_venta) VALUES (%s, %s)", 
                           (Product,TotalSale))
            conect.commit()
            conect.close()
            return {"Información:" "Venta registrada correctamente"}
        except Exception as error:
            return {"Resultado API:": str(error)}
        
    # Put
	# Actualizar venta

	# Delete
	# Eliminar venta
