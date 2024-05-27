from flask import jsonify
from controllers.TurmaController import *

class TurmaParticipantesSalaController:
    def cadastrarTurma(self):
        turma = TurmaController()
        turma.Cadastro()
        return jsonify({'status': 'success'})