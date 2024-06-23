from flask import jsonify, request
from models.Aulas import *
from utils.FeriadosAPI import *

class AulaController():
    def listarAulas(self):
        IDs = request.json.get('lista_turmas')
        print(IDs)

        response = Aulas().listarAulasPorCurso(IDs)

        if response:
            return jsonify({'status': 'success', 'aulas': response})
        return jsonify({'status': 'error', 'infos': 'falha em recuperar informações'})

    def feriados(self):
        response = Feriados().getFeriadosObject()

        if response:
            return jsonify({'status': 'success', 'feriados': response})
        return jsonify({'status': 'error', 'infos': 'falha em recuperar informações'})