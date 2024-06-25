from flask import jsonify, request
from models.Participante import *

class ParticipanteController:
    def Cadastro(self, id_turma):
        professores = request.json.get('professores')
        alunos = request.json.get('alunos')
        listaCompleta = professores + alunos
        print( 'alunos e prof', professores, 'alunos e prof')

        obj = Participante()

        for i in listaCompleta:
            list = i.split(",")
            print(list, 'lista depois do split')
            id = int(list[1])
            print(id_turma, id)
            if obj.get(id_turma[0], id) == False:
                response = obj.create(id_turma[0], id)
                if response == False:
                    return {'status': 'error', 'info': 'erro no cadastro dos usuários'}
        return {'status': 'success'}

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