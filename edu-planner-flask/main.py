from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from controllers.UserController import *
from controllers.CursoController import *
from utils.VerificaToken import *

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

#------rotas de curso-------------------
@app.route('/cadastrarCurso')
def cadastraCurso():
    if VerificaToken().validaToken():
        return CursoController().CadastroCurso()
    return jsonify({'status': 'error', 'info': 'invalid token'})
@app.route('/editaCurso')
def editaCurso():
    return CursoController().editarCurso()

@app.route('/excluiCurso')
def excluiCurso():
    return CursoController().excluiCurso()


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
