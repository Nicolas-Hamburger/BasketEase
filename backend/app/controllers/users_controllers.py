import mysql.connector
from fastapi import HTTPException
from config.connection import get_connection
from models.users_models import Users
from fastapi.encoders import jsonable_encoder

class UserControllers:
    
    def get_users(self):
        try:
            conect = get_connection()
            cursor = conect.cursor()
            cursor.execute("SELECT * FROM usuarios")
            result = cursor.fetchall()
            payload = []
            content = {}
            for data in result:
                content = {
                    'user_id': data[0],
                    'nombre': data[1],
                    'apellido': data[2],
                    'tipo_usuario': data[3],
                    'telefono': data[4],
                    'email': data[5],
                    'password': data[6],
                    'fecha_registro': data[7],
                    'ultima_sesion': data[8],
                }
                payload.append(content)
                content = {}
            json_data = jsonable_encoder(payload)
            return {"Resultado API: ": json_data}
        except Exception as error:
            return {"Resultado API: ": str(error)}
        
    def get_users_id(self, userId):
        try:
            conect = get_connection()
            cursor = conect.cursor()
            cursor.execute("SELECT * FROM usuarios WHERE user_id = %s", (userId,))
            result = cursor.fetchone()
            if result:
                user = {
                    'user_id': result[0],
                    'nombre': result[1],
                    'apellido': result[2],
                    'tipo_usuario': result[3],
                    'numero_cedula': result[4],
                    'telefono': result[5],
                    'email': result[6],
                    'password': result[7],
                    'fecha_registro': result[8],
                }
                return {"Resultado API: ": user}
            else:
                return {"Resultado API: ": "Usuario no encontrado"}
        except Exception as error:
            return {"Resultado API: ": str(error)}
        
    def post_users(self, nuser: Users):
        try:
            conect = get_connection()
            cursor = conect.cursor()
            Name = nuser.nombre
            LastName = nuser.apellido
            TypeUser = nuser.tipo_usuario
            NumberIdentification = nuser.numero_cedula
            Phone = nuser.telefono
            Email = nuser.email
            Password = nuser.password
            cursor.execute("INSERT INTO usuarios(nombre, apellido, tipo_usuario, numero_cedula, telefono, email, password) VALUES (%s, %s, %s, %s, %s, %s, %s)",
                           (Name, LastName, TypeUser, NumberIdentification, Phone, Email, Password))
            conect.commit()
            conect.close()
            return {"Información:": "Usuario registrado exitosamente"}
        except Exception as error:
            return {"Resultadoa API": str(error)}
        
    def update_users(self, userId: int, nuser: Users):
        try:   
            conect = get_connection()
            cursor = conect.cursor()
            cursor.execute(
                "SELECT user_id FROM usuarios WHERE user_id = %s", (userId,))
            result = cursor.fetchone()
            if not result:
                raise HTTPException(
                    status_code=400, detail="Usuario no encontrado en la base de datos"
                ) 
            Name = nuser.nombre
            LastName = nuser.apellido
            TypeUser = nuser.tipo_usuario
            NumberIdentification = nuser.numero_cedula
            Phone = nuser.telefono
            Email = nuser.email
            Password = nuser.password
            cursor.execute( "UPDATE usuarios SET nombre = %s, apellido = %s, tipo_usuario = %s, numero_cedula = %s, telefono = %s, email = %s, password = %s WHERE user_id = %s",
            (Name, LastName, TypeUser, NumberIdentification, Phone, Email, Password, userId))
            conect.commit()
            conect.close()
            return {"Información:": "Usuario actualizado exitosamente"}
        except Exception as error:
            return {"Resultadoa API": str(error)}
        
    def delete_users(self, userId: int):
        try:   
            conect = get_connection()
            cursor = conect.cursor()
            cursor.execute(
                "SELECT user_id FROM usuarios WHERE user_id = %s", (userId,))
            result = cursor.fetchone()
            if not result:
                raise HTTPException(
                    status_code=400, detail="Usuario no encontrado en la base de datos"
                ) 
            cursor.execute(
                "DELETE FROM usuarios WHERE user_id= %s", (userId,))
            conect.commit()
            cursor.close()
            cursor = conect.cursor()
            cursor.execute("ALTER TABLE usuarios AUTO_INCREMENT = 1")
            conect.commit()
            return {"Información: ": "Usuario eliminado exitosamente"}
        except Exception as error:
            return {"Resultado API: ": str(error)}
        
users_controllers = UserControllers()