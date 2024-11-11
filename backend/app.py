from flask import Flask, request
import business_logic_lawyer as bll


app = Flask(__name__)

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