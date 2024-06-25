from configs.Conection import *

class Participante:
    def create(self, id_turma, id_usuario):
        query = f'INSERT INTO participantes (id_turma, id_usuario) VALUES ({id_turma}, {id_usuario});'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def edita(self, id_turma, id_usuario):
        query = f'UPDATE participantes SET id_turma = {id_turma}, id_usuario = {id_usuario};'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def get(self, id_turma, id_usuario):
        query = f"SELECT id_participante FROM `participantes` WHERE id_turma = {id_turma} AND nome = {id_usuario};"
        conexao = Conection()
        exis = conexao.get_query(query)
        return exis

    def getOne(self, id_participante):
        query = f"SELECT id_participante FROM `participantes` WHERE id_turma = {id_participante};"
        conexao = Conection()
        exis = conexao.get_query(query)
        return exis

    def excluir(self, id_participante):
        query = f'DELETE FROM participantes WHERE id_participante = {id_participante};'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def getList(self):
        query = f"SELECT * FROM `participantes`;"
        conexao = Conection()
        exis = conexao.get_list(query)
        return exis