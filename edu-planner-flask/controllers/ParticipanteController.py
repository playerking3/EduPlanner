from flask import jsonify, request
from models.Participante import *

class ParticipanteController:
    def Cadastro(self):
        id_turma = request.json.get('id_turma')
        id_usuario = request.json.get('id_usuario')

        obj = Participante()
        if obj.get(id_turma, id_usuario) == False:
            response = obj.create(id_turma, id_usuario)
            return jsonify({'status': response})
        return jsonify({'status': 'curso de mesmo nome ja cadastrado'})

    def editar(self):
        id_turma = request.json.get('id_turma')
        id_usuario = request.json.get('id_usuario')
        id_participante = request.json.get('id_participante')

        obj = Participante()
        if obj.getOne(id_participante):
            response = obj.edita(id_turma, id_usuario)
            return jsonify({'status': response})
        return jsonify({'status': 'error', 'info': 'curso não encontrado'})

    def excluir(self):
        id_participante = request.json.get('id_participante')

        obj = Participante()
        if obj.getOne(id_participante):
            response = obj.excluir(id_participante)
            return jsonify({'status': response})
        return jsonify({'status': 'error', 'info': 'curso não encontrado'})

    def getList(self):
        obj = Participante()
        response = obj.getList()
        if response:
            return jsonify({'status': 'success', 'lista_turma': response})
        return jsonify({'status': 'error', 'info': response})