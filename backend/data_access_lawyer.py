import sqlite3
from pathlib import Path
from models import Article, GithubProject, Work

#=====Get data=====
def getAllArticles():
    try:
        conn = sqlite3.connect('./db_sqlite/mydatabase.db')
        cursor = conn.cursor()

        # Crear tablas
        cursor.execute('''SELECT * FROM dan_articulos;''')
        
        # Obtener todos los resultados de la consulta
        rows = cursor.fetchall()

        # Crear una lista de diccionarios para almacenar los datos
        articles = []
        for row in rows:
            article = {
                "id": row[0],
                "titulo": row[1],
                "descripcion": row[2],
                "categoria": row[3],
                "contenido": row[4],
                "fecha": row[5]
            }
            articles.append(article)
        
        return articles
    
    except sqlite3.OperationalError as e:
        print("Error operacional:", e)
    
    except sqlite3.IntegrityError as e:
        print("Error de integridad (por ejemplo, clave duplicada):", e)

    except sqlite3.DatabaseError as e:
        print("Error general de la base de datos:", e)

    except sqlite3.Error as e:
        print("Error desconocido en sqlite3:", e)

    finally:
        # Guardar los cambios y cerrar la conexión
        conn.commit()
        conn.close()

def getArticle(art_id):
    try:
        # Conectar a la base de datos (la crea si no existe)
        conn = sqlite3.connect('./db_sqlite/mydatabase.db')
        cursor = conn.cursor()


        # Crear tablas
        cursor.execute('''SELECT * FROM dan_articulos WHERE id = {};'''.format(art_id))
        
        # Obtener todos los resultados de la consulta
        rows = cursor.fetchall()

        # Crear una lista de diccionarios para almacenar los datos
        articles = []
        for row in rows:
            article = {
                "id": row[0],
                "titulo": row[1],
                "descripcion": row[2],
                "categoria": row[3],
                "contenido": row[4]
            }
            articles.append(article)
        
        return articles
    
    except sqlite3.OperationalError as e:
        print("Error operacional:", e)
    
    except sqlite3.IntegrityError as e:
        print("Error de integridad (por ejemplo, clave duplicada):", e)

    except sqlite3.DatabaseError as e:
        print("Error general de la base de datos:", e)

    except sqlite3.Error as e:
        print("Error desconocido en sqlite3:", e)

    finally:
        # Guardar los cambios y cerrar la conexión
        conn.commit()
        conn.close()

def getTestData():
    try:
        conn = sqlite3.connect('./db_sqlite/mydatabase.db')
        cursor = conn.cursor()

        # Insertar datos de prueba
        cursor.execute('''SELECT * FROM dan_articulos WHERE categoria = "Test";''')
        
        # Obtener todos los resultados de la consulta
        rows = cursor.fetchall()

        # Crear una lista de diccionarios para almacenar los datos
        testarticles = []
        for row in rows:
            article = {
                "id": row[0],
                "titulo": row[1],
                "descripcion": row[2],
                "categoria": row[3],
                "contenido": row[4]
            }
            testarticles.append(article)
        
        return testarticles

    except sqlite3.OperationalError as e:
        print("Error operacional:", e)
    
    except sqlite3.IntegrityError as e:
        print("Error de integridad (por ejemplo, clave duplicada):", e)

    except sqlite3.DatabaseError as e:
        print("Error general de la base de datos:", e)

    except sqlite3.Error as e:
        print("Error desconocido en sqlite3:", e)

    finally:
        # Guardar los cambios y cerrar la conexión
        conn.commit()
        conn.close()


def getAllProjects():
    try:
        conn = sqlite3.connect('./db_sqlite/mydatabase.db')
        cursor = conn.cursor()

        # Crear tablas
        cursor.execute('''SELECT * FROM dan_projects;''')
        
        # Obtener todos los resultados de la consulta
        rows = cursor.fetchall()

        # Crear una lista de diccionarios para almacenar los datos
        projects = []
        for row in rows:
            project = {
                "id": row[0],
                "titulo": row[1],
                "descripcion": row[2],
                "tecnologias": row[3],
                "github_link": row[4],
                "image_link": row[5]
            }
            projects.append(project)
        
        return projects
    
    except sqlite3.OperationalError as e:
        print("Error operacional:", e)
    
    except sqlite3.IntegrityError as e:
        print("Error de integridad (por ejemplo, clave duplicada):", e)

    except sqlite3.DatabaseError as e:
        print("Error general de la base de datos:", e)

    except sqlite3.Error as e:
        print("Error desconocido en sqlite3:", e)

    finally:
        # Guardar los cambios y cerrar la conexión
        conn.commit()
        conn.close()

#=====Get data=====


def saveArticle(art: Article) -> None:
    try:
        # Conectar a la base de datos (la crea si no existe)
        conn = sqlite3.connect('./db_sqlite/mydatabase.db')
        cursor = conn.cursor()

        # Insertar los datos del objeto Article
        cursor.execute('''
            INSERT INTO dan_articulos (titulo, descripcion, categoria, contenido)
            VALUES (?, ?, ?, ?)
        ''', (art.titulo, art.descripcion, art.categoria, art.contenido))

        print("Artículo guardado correctamente.")

    except sqlite3.OperationalError as e:
        print("Error operacional:", e)
    
    except sqlite3.IntegrityError as e:
        print("Error de integridad (por ejemplo, clave duplicada):", e)

    except sqlite3.DatabaseError as e:
        print("Error general de la base de datos:", e)

    except sqlite3.Error as e:
        print("Error desconocido en sqlite3:", e)

    finally:
        # Guardar los cambios y cerrar la conexión
        conn.commit()
        conn.close()

def addGihubProject(g_proj: GithubProject) -> None:
    try:
        # Conectar a la base de datos (la crea si no existe)
        conn = sqlite3.connect('./db_sqlite/mydatabase.db')
        cursor = conn.cursor()

        # Insertar los datos del objeto GithubProject
        cursor.execute('''
            INSERT INTO dan_projects (github_link, titulo, descripcion, tecnologias)
            VALUES (?, ?, ?, ?)
        ''', (g_proj.link, g_proj.titulo, g_proj.descripcion, g_proj.tecnologias))

        print("Proyecto guardado correctamente.")

    except sqlite3.OperationalError as e:
        print("Error operacional:", e)
    
    except sqlite3.IntegrityError as e:
        print("Error de integridad (por ejemplo, clave duplicada):", e)

    except sqlite3.DatabaseError as e:
        print("Error general de la base de datos:", e)

    except sqlite3.Error as e:
        print("Error desconocido en sqlite3:", e)

    finally:
        # Guardar los cambios y cerrar la conexión
        conn.commit()
        conn.close()

def addWork(w_proj: Work) -> None:
    try:
        # Conectar a la base de datos (la crea si no existe)
        conn = sqlite3.connect('./db_sqlite/mydatabase.db')
        cursor = conn.cursor()

        # Insertar los datos del objeto GithubProject
        cursor.execute('''
            INSERT INTO dan_works (image_link, titulo, descripcion, tecnologias)
            VALUES (?, ?, ?, ?)
        ''', (w_proj.image_link, w_proj.titulo, w_proj.descripcion, w_proj.tecnologias))

        print("Trabajo guardado correctamente.")

    except sqlite3.OperationalError as e:
        print("Error operacional:", e)
    
    except sqlite3.IntegrityError as e:
        print("Error de integridad (por ejemplo, clave duplicada):", e)

    except sqlite3.DatabaseError as e:
        print("Error general de la base de datos:", e)

    except sqlite3.Error as e:
        print("Error desconocido en sqlite3:", e)

    finally:
        # Guardar los cambios y cerrar la conexión
        conn.commit()
        conn.close()
    

# def insertTestData():
#     try:
#         # Conectar a la base de datos (la crea si no existe)
#         conn = sqlite3.connect('./db_sqlite/mydatabase.db')
#         cursor = conn.cursor()

#         # Insertar datos de prueba
#         cursor.execute('''
#             INSERT INTO dan_articulos (titulo, descripcion, categoria, contenido)
#             VALUES ('TituloOneTest', 'DescriptionOneTest', 'CategoryOneTest', 'Lorem Ipsum dolor sit amet. Bla Bla Bla... 1234');
#         ''')
#         print("Datos insertados correctamente.")  # Confirmación de inserción

#     except sqlite3.OperationalError as e:
#         print("Error operacional:", e)
    
#     except sqlite3.IntegrityError as e:
#         print("Error de integridad (por ejemplo, clave duplicada):", e)

#     except sqlite3.DatabaseError as e:
#         print("Error general de la base de datos:", e)

#     except sqlite3.Error as e:
#         print("Error desconocido en sqlite3:", e)

#     finally:
#         # Guardar los cambios y cerrar la conexión
#         conn.commit()
#         conn.close()