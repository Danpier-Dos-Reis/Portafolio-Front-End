from flask import Flask
from flask_cors import CORS
import business_logic_lawyer as bll


app = Flask(__name__)

#CORS(app)  # Permite todas las solicitudes de cualquier origen

# Si quieres permitir solo desde un origen específico
CORS(app, origins="http://localhost:5173")

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


if __name__ == '__main__':
    app.run(debug = True)