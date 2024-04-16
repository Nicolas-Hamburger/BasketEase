import mysql.connector
from fastapi import HTTPException
from config.connection import get_connection
from models.products_models import Products
from fastapi.encoders import jsonable_encoder

class ProductsControllers:

    def get_products(self):
        try:
            conect = get_connection()
            cursor = conect.cursor()
            cursor.execute("SELECT * FROM productos")
            result = cursor.fetchall()
            payload = []
            content = {}
            for data in result:
                content = {
                    'producto_id': data[0],
                    'nombre': data[1],
                    'descripcion': data[2],
                    'proveedor': result[3],
                    'cantidad_disponible': data[4],
                    'cantidad_minima': data[5],
                    'precio_unitario': data[6],
                    'fecha_ultima_actualizacion': data[7],
                }
                payload.append(content)
                content = {}
            json_data = jsonable_encoder(payload)
            return {"Resultado API: ": json_data}
        except Exception as error:
            return {"Resultado API: ":str(error)}

    def get_products_productId(self, productId):
        try:
            conect = get_connection()
            cursor = conect()
            cursor.execute("SELECT * FROM productos WHERE producto_id = %s", (productId,))
            result = cursor.fetchone()
            if result:
                product = {
                    'producto_id': result[0],
                    'nombre': result[1],
                    'descripcion': result[2],
                    'proveedor': result[3],
                    'cantidad_disponible': result[4],
                    'cantidad_minima': result[5],
                    'precio_unitario': result[6],
                    'fecha_ultima_actualizacion': result[7],
                }
                return {"Resultado API: ": product}
            else:
                return {"Resultado API: ": "No existe el producto buscado"}
        except Exception as error:
            return {"Resultado API: ": str(error)}

    def get_products_supplier(self, supplier: str):
        try:
            conect = get_connection()
            cursor = conect.cursor()
            cursor.execute("SELECT * FROM productos WHERE proveedor = %s", (supplier,))
            result = cursor.fetchone()
            if result:
                product = {
                    'producto_id': result[0],
                    'nombre': result[1],
                    'descripcion': result[2],
                    'proveedor': result[3],
                    'cantidad_disponible': result[4],
                    'cantidad_minima': result[5],
                    'precio_unitario': result[6],
                    'fecha_ultima_actualizacion': result[7],
                }
                return {"Resultado API: ": product}
            else:
                return {"Resultado API: ": "No existe el proveedor mencionado"}
        except Exception as error:
            return {"Resultado API:": str(error)}

    def post_products(self, nproducts: Products):
        try:
            conect = get_connection()
            cursor = conect.cursor()
            Name = nproducts.nombre
            Description = nproducts.descripcion
            Supplier = nproducts.proveedor
            AmountAvailable = nproducts.cantidad_disponible
            AmountMinimal = nproducts.cantidad_minima
            UnitPrice = nproducts.precio_unitario

            cursor.execute("INSERT INTO productos(nombre, descripcion, proveedor, cantidad_disponible, cantidad_minima, precio_unitario) VALUES (%s, %s, %s, %s, %s, %s)", 
                           (Name, Description, Supplier, AmountAvailable, AmountMinimal, UnitPrice))
            conect.commit()
            conect.close()
            return {"Información:" "Venta registrada correctamente"}
        except Exception as error:
            return {"Resultado API:": str(error)}

    def update_products(self, productId: int, nproducts: Products):
        try:
            conect = get_connection()
            cursor = conect.cursor()
            cursor.execute(
                "SELECT producto_id FROM productos WHERE productos_id = %s", (productId,))
            result = cursor.fetchone()
            if not result:
                raise HTTPException(
                    status_code=400, detail="Producto no encontrado en la base de datos"
                )
            Name = nproducts.nombre
            Description = nproducts.descripcion
            Supplier = nproducts.proveedor
            AmountAvailable = nproducts.cantidad_disponible
            AmountMinimal = nproducts.cantidad_minima
            UnitPrice = nproducts.precio_unitario
            cursor.execute("UPDATE productos SET nombre = %s, descripcion = %s, proveedor = %s, cantidad_disponible = %s, cantidad_minima = %s, precio_unitario = %s", (Name, Description, Supplier, AmountAvailable. AmountMinimal, UnitPrice))
            conect.commit()
            conect.close()
            return {"Información:": "Producto actualizado exitosamente"}
        except Exception as error:
            return {"Resultadoa API": str(error)}

    def delete_products(self, productId: int):
        try:
            conect = get_connection()
            cursor = conect()
            cursor.execute(
                "SELECT * FROM productos WHERE producto_id = %s", (productId,))
            result = cursor.fetchone()
            if not result:
                raise HTTPException(
                    status_code=400, detail="Producto no encontrado en la base de datos"
                )
            cursor.execute(
                "DELETE FROM productos WHERE producto_id = %s", (productId,))
            cursor.commit()
            cursor.close()
            cursor = conect.cursor()
            cursor.execute("ALTER TABLE productos AUTO_INCREMENT = 1")
            cursor.commit()
            return {"Información: ": "Producto eliminado exitosamente"}
        except Exception as error:
            return {"Resultado API: ": str(error)}

products_controllers = ProductsControllers()