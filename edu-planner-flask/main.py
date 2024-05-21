from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from controllers.UserController import *
from controllers.CursoController import *
from controllers.SalaController import *
from controllers.TurmaController import *
from controllers.ParticipanteController import *
from utils.VerificaToken import *

from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

app.config.from_pyfile('configs/config.py')
db = SQLAlchemy(app)

#-------rotas de usuário-----------------
@app.route('/login', methods=['POST'])
def login():
    return UserController().login()

@app.route('/cadastro', methods=['POST'])
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

#------rotas de turma-------------------
@app.route('/cadastrarTurma')
def cadastrarTurma():
    if VerificaToken().validaToken():
        return TurmaController().Cadastro()
    return jsonify({'status': 'error', 'info': 'invalid token'})
@app.route('/editarCurso')
def editarTurma():
    if VerificaToken().validaToken():
        return TurmaController().editar()
    return jsonify({'status': 'error', 'info': 'invalid token'})

@app.route('/excluirTurma')
def excluirTurma():
    if VerificaToken().validaToken():
        return TurmaController().excluir()
    return jsonify({'status': 'error', 'info': 'invalid token'})
@app.route('/getTurma')
def getTurma():
    if VerificaToken().validaToken():
        return TurmaController().getList()
    return jsonify({'status': 'error', 'info': 'invalid token'})

#------rotas de Participantes-------------------
@app.route('/cadastrarPartipantes')
def cadastrarParticipantes():
    if VerificaToken().validaToken():
        return ParticipanteController().Cadastro()
    return jsonify({'status': 'error', 'info': 'invalid token'})
@app.route('/editarParticipantes')
def editarParticipantes():
    if VerificaToken().validaToken():
        return ParticipanteController().editar()
    return jsonify({'status': 'error', 'info': 'invalid token'})

@app.route('/excluirParticipantes')
def excluirParticipantes():
    if VerificaToken().validaToken():
        return ParticipanteController().excluir()
    return jsonify({'status': 'error', 'info': 'invalid token'})
@app.route('/getParticipante')
def getParticipantes():
    if VerificaToken().validaToken():
        return ParticipanteController().getList()
    return jsonify({'status': 'error', 'info': 'invalid token'})

#------rotas de sala-------------------
@app.route('/cadastrarSala')
def cadastrarSala():
    if VerificaToken().validaToken():
        return SalaController().Cadastro()
    return jsonify({'status': 'error', 'info': 'invalid token'})
@app.route('/editarSala')
def editarSala():
    if VerificaToken().validaToken():
        return SalaController().editar()
    return jsonify({'status': 'error', 'info': 'invalid token'})

@app.route('/excluirSala')
def excluirSala():
    if VerificaToken().validaToken():
        return SalaController().excluir()
    return jsonify({'status': 'error', 'info': 'invalid token'})
@app.route('/getSala')
def getSala():
    if VerificaToken().validaToken():
        return SalaController().getList()
    return jsonify({'status': 'error', 'info': 'invalid token'})

#----------proteção de rota---------------
@app.route('/protegeRota', methods=['POST'])
def protegeRota():
    if VerificaToken().validaToken():
        return jsonify({'status': 'success'})
    return jsonify({'status': 'invalid'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)