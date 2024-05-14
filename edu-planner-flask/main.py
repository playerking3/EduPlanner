from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from controllers.UserController import *
from controllers.CursoController import *

app = Flask(__name__)
app.config.from_pyfile('configs/config.py')
db = SQLAlchemy(app)

#-------rotas de usuário-----------------
@app.route('/login')
def login():
    return UserController().login()

@app.route('/cadastro')
def cadastro():
    return UserController().cadastro()

@app.route('/esqueciSenha')
def esqueci():
    return UserController().esqueciSenha()

@app.route('/sair')
def sair():
    return UserController().sair()

#------rotas de curso-------------------
@app.route('/cadastrarCurso')
def cadastraCurso():
    return CursoController().CadastroCurso()
@app.route('/editaCurso')
def editaCurso():
    return CursoController().editarCurso()

@app.route('/excluiCurso')
def excluiCurso():
    return CursoController().excluiCurso()


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
