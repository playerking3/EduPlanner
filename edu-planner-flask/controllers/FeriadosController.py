from flask import jsonify, request
from models.Feriados import *

class FeriadosController:
    def addFeriado(self):
        nome = request.json.get('nome')
        data = request.json.get('data')

        obj = Feriados()
        if obj.getFeriado(nome):
            response = obj.addFeriado(nome, data)
            return jsonify({'status': response})
        return jsonify({'status': 'error', 'info': 'curso não encontrado'})