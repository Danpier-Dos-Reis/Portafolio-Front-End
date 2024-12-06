from flask import Flask, request
from flask_cors import CORS
import business_logic_lawyer as bll


app = Flask(__name__)

#CORS(app)  # Permite todas las solicitudes de cualquier origen

# Si quieres permitir solo desde un origen específico
CORS(app, origins="http://localhost:5173")

#=====Get data=====
@app.route("/")
def root():
    return "You're Welcome"

@app.route("/gettestdata")
def gtd():
    return bll.getTestData(), 201

@app.route("/getallarticles")
def getAllArticles():
    return bll.getAllArticles()

@app.route("/getallarticles/<art_id>")
def getArticle(art_id):
    return bll.getArticle(art_id)

@app.route("/getallprojects")
def getAllProjects():
    return bll.getAllProjects()

@app.route("/getallworks")
def getAllWorks():
    return bll.getAllWorks()
#=====Get data=====

@app.route("/mkarticle", methods=["POST"])
def mkArticle():
    data = request.get_json()  # Obtiene el JSON del body de la request
    bll.saveArticle(data)
    return "Artículo Creado", 201  # Devuelve el mensaje con el código de estado 201 (creado)

@app.route("/addgithubproject", methods=["POST"])
def addgithubProject():
    data = request.get_json()  # Obtiene el JSON del body de la request
    bll.addGithubProject(data)
    return "Proyecto Creado", 201  # Devuelve el mensaje con el código de estado 201 (creado)

@app.route("/addwork", methods=["POST"])
def addWork():
    data = request.get_json()  # Obtiene el JSON del body de la request
    bll.addWork(data)
    return "Trabajo Creado", 201  # Devuelve el mensaje con el código de estado 201 (creado)


if __name__ == '__main__':
    app.run(debug = True)