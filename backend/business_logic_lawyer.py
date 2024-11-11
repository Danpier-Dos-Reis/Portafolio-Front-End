from flask import jsonify
import data_access_lawyer as dal

def getTestData():
    return jsonify(dal.getTestData())

def getAllArticles():
    return jsonify(dal.getAllArticles())

def getArticle(art_id):
    return jsonify(dal.getArticle(art_id))