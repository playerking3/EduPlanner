from flask import jsonify, request
from models.Sala import *
from TurmaSalaController import *

class SalaController:
    def Cadastro(self):
        nome = request.json.get('nome')
        capacidade = request.json.get('capacidade')

        obj = Sala()
        if obj.get(nome) == False:
            response = obj.create(nome, capacidade)
            return jsonify({'status': response})
        return jsonify({'status': 'curso de mesmo nome ja cadastrado'})

    def editar(self):
        nome = request.json.get('nome')
        capacidade = request.json.get('capacidade')

        obj = Sala()
        if obj.get(nome):
            response = obj.edita(nome, capacidade)
            return jsonify({'status': response})
        return jsonify({'status': 'error', 'info': 'curso não encontrado'})

    def excluir(self):
        nome = request.json.get('nome')

        obj = Sala()
        if obj.get(nome):
            if TurmaSalaController().verificaSaida(obj.get(nome)):
                response = obj.excluir(nome)
                return jsonify({'status': response})
            return jsonify({'status': 'error', 'info': 'a sala ainda tem alunos cadastrados'})
        return jsonify({'status': 'error', 'info': 'curso não encontrado'})

    def getList(self):
        obj = Sala()
        response = obj.getList()
        if response:
            return jsonify({'status': 'success', 'lista_turma': response})
        return jsonify({'status': 'error', 'info': response})