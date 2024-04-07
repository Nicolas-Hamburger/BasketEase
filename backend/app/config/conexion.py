import mysql.connector

my_sql_config = {
    'user': 'root',
    'password': 'junior1924',
    'host':'localhost',
    'database': 'basketease',
    'auth_plugin': 'mysql_native_password'    
}

connection = mysql.connector.connect(**my_sql_config)

def get_connection():
    return connection
