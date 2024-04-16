from fastapi import APIRouter, HTTPException
from controllers.products_controllers import ProductsControllers
from models.detailSale_models import DetailSale


class DetailSaleControllers:
    
    def get_detailsale_saleId(self, detailSaleId):
        try:
            conect = get_connection()
            cursor = conect.cursor()
            cursor.execute("SELECT * FROM detalles_ventas WHERE venta_id = %s", (detailSaleId,))
            result = cursor.fetchone()
            if result:
                detailSale = {
                    'detalle_venta_id': result[0],
                    'venta_id': result[1],
                    'producto_id': result[2],
                    'cantidad_vendida': result[3],
                    'precio_unitario': result[4],
                }
                return {"Resultado API: ": detailSale}
            else:
                return {"Resultado API: ": "No se ha encontrado el detalle de la venta"}
        except Exception as error:
            return {"Resultado API: ": str(error)}
        
    def get_detailsale_productId(self, productId):
        try:
            conect = get_connection()
            cursor = conect.cursor()
            cursor.execute("SELECT * FROM detalles_ventas WHERE producto_id = %s", (productId,))
            result = cursor.fetchone()
            if result:
                detailProduct = {
                    'detalle_venta_id': result[0],
                    'venta_id': result[1],
                    'producto_id': result[2],
                    'cantidad_vendida': result[3],
                    'precio_unitario': result[4],
                }
                return {"Resultado API: ": detailProduct}
            else:
                return {"Resultado API: ": "No se ha encontrado el producto en detalles de la venta"}
        except Exception as error:
            return {"Resultado API: ": str(error)}    

detailsale_controllers = DetailSaleControllers()