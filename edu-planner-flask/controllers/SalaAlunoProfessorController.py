from flask import jsonify
from models.Sala import *
from models.User import *

class SalaAlunoProfessorController:
    def retornarInfos(self):
        print('dentro')
        salas = Sala().getList()
        professores = User().getProfessores()
        alunos = User().getAlunos()

        print(salas)
        print(professores)
        print(alunos)

        if salas == False and professores == False and alunos == False:
            return jsonify({'status': 'error', 'info': 'erro na busca no banco'})
        return jsonify({'status': 'success', 'infos': {'professores': professores, 'salas': salas, 'alunos': alunos}})