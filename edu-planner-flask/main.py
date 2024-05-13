from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from controllers.UserController import *

app = Flask(__name__)
app.config.from_pyfile('configs/config.py')
db = SQLAlchemy(app)

@app.route('/login')
def login():
    return UserController().login()

@app.route('/cadastro')
def cadastro():
    return UserController().cadastro()

@app.route('/esqueciSenha')
def esqueci():
    return UserController().esqueciSenha()


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
