from flask import jsonify, request
from models.Turma import *

class TurmaController:
    def Cadastro(self, nome, inicio, lista_dias, horario, horas_dia, id_curso, id_sala, fim):
        fim = '2024-06-30'

        obj = Turma()
        if obj.get(nome) == False:
            response = obj.create(nome, inicio, fim, lista_dias, horas_dia, id_curso, id_sala, horario)
            id = obj.get(nome)
            return {'status': 'success', 'id': id}
        return {'status': 'error', 'info':'curso de mesmo nome ja cadastrado'}

    def editar(self):
        nome = request.json.get('nome')
        inicio = request.json.get('inicio')
        fim = request.json.get('fim')
        lista_dias = request.json.get('lista_dias')
        horas_dia = request.json.get('horas_dia')
        id_curso = request.json.get('id_curso')
        id_sala = request.json.get('id_sala')
        status = request.json.get('status')

        nome = nome.lower()
        obj = Turma()
        if obj.get(nome):
            response = obj.edita(nome, inicio, fim, lista_dias, horas_dia, id_curso, id_sala, status)
            return jsonify({'status': response})
        return jsonify({'status': 'error', 'info': 'curso não encontrado'})

    def excluir(self):
        nome = request.json.get('nome')

        obj = Turma()
        if obj.get(nome):
            response = obj.excluir(nome)
            return jsonify({'status': response})
        return jsonify({'status': 'error', 'info': 'curso não encontrado'})

    def getList(self):
        obj = Turma()
        response = obj.getList()
        if response:
            return jsonify({'status': 'success', 'lista_turma': response})
        return jsonify({'status': 'error', 'info': response})