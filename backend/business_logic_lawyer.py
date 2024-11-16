import json
from flask import jsonify
import data_access_lawyer as dal
from models import Article

def getTestData():
    return jsonify(dal.getTestData())

def getAllArticles():
    return jsonify(dal.getAllArticles())

def getArticle(art_id):
    return jsonify(dal.getArticle(art_id))

def saveArticle(jsonArticle):
    stringData = json.dumps(jsonArticle)
    data = json.loads(stringData)
    article = Article(**data) # Crear una instancia de Articulo
    dal.saveArticle(article)