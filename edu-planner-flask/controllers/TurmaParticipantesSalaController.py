from flask import jsonify
from controllers.TurmaController import *
from controllers.ParticipanteController import *

class TurmaParticipantesSalaController:
    def cadastrarTurma(self):
        turma = TurmaController()
        responseCad = turma.Cadastro()

        if responseCad['status'] == 'success':
            participante = ParticipanteController()
            participante.Cadastro(responseCad['id'])

        return jsonify(responseCad)