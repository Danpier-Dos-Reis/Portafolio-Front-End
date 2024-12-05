import json
from flask import jsonify
import data_access_lawyer as dal
from models import Article, GithubProject,Work

#=====Get data=====
def getTestData():
    return jsonify(dal.getTestData())

def getAllArticles():
    return jsonify(dal.getAllArticles())

def getArticle(art_id):
    return jsonify(dal.getArticle(art_id))

def getAllProjects():
    return jsonify(dal.getAllProjects())

#=====Get data=====

#=====Save data=====
def saveArticle(jsonArticle):
    article = Article(**jsonArticle) # Crear una instancia de Articulo
    dal.saveArticle(article)

def addGithubProject(jsonGihubProject):
    gitproj = GithubProject(**jsonGihubProject) # Crear una instancia de Articulo
    dal.addGihubProject(gitproj)

def addWork(jsonWork):
    w = Work(**jsonWork) # Crear una instancia de Articulo
    dal.addWork(w)
#=====Save data=====