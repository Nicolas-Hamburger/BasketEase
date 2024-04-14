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
                    'venta_id': data[0],
                    'fecha_venta': data[1],
                    'usuario_id': data[2],
                    'total_venta': data[3],
                    'fecha_registro': data[4],
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
                    'usuario_id': result[2],
                    'total_venta': result[3],
                    'fecha_registro': result[4],
                }
                return {"Resultado API: ": sale}
            else:
                return {"Resultado API: ": "No hay ventas en la fecha consultada"}
        except Exception as error:
            return {"Resultado API:": str(error)}
            
            