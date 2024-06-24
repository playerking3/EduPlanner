from flask import jsonify, request
from models.Feriados import *

class FeriadosController:
    def addFeriado(self):
        nome = request.json.get('nome')
        data = request.json.get('data')

        print("AAAAAA", nome, data)

        obj = Feriados()
        print(obj.getFeriado(nome))
        if not obj.getFeriado(nome):
            print(nome, data, 'feriado dados')
            response = obj.addFeriado(nome, data)
            return jsonify({'status': response})
        return jsonify({'status': 'error', 'info': 'feriado já existente'})