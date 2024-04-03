from flask import Flask, request, jsonify
import pymysql
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

db = pymysql.connect(
    host='localhost',
    user='root',
    password='junior1924',
    database='basketease',
    cursorclass=pymysql.cursors.DictCursor
)

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        app.logger.debug("Data received: %s", data)

        username = data.get('username')
        password = data.get('password')

        with db.cursor() as cursor:
            query = "SELECT * FROM usuarios WHERE username = %s AND password = %s"
            cursor.execute(query, (username, password))
            usuario = cursor.fetchone()

            if usuario:
                tipo_usuario = usuario.get("tipo_usuario")
                return jsonify({'message': 'Inicio de sesión exitoso', 'tipo_usuario': tipo_usuario}), 200
            else:
                return jsonify({'error': 'Credenciales incorrectas'}), 401
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
