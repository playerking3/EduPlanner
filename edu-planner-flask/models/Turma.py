from configs.Conection import *

class Turma:
    def create(self, nome, inicio, fim, lista_dias, horas_dia, id_curso, id_sala):
        query = f'INSERT INTO turma (nome, inicio, fim, lista_dias, horas_dia, id_curso, id_sala, status) VALUES ("{nome}", "{inicio}", "{fim}", "{lista_dias}", {horas_dia}, {id_sala}, {id_curso}, "ativo");'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def edita(self, nome, inicio, fim, lista_dias, horas_dia, id_curso, id_sala, status):
        query = f'UPDATE turma SET inicio = {inicio}, fim = "{fim}", lista_dias = "{lista_dias}", horas_dia = {horas_dia}, id_curso = {id_curso}, id_sala={id_sala}, status={status} WHERE nome = "{nome}";'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def get(self, nome):
        query = f"SELECT id_turma FROM `turma` WHERE nome = '{nome}';"
        conexao = Conection()
        exis = conexao.get_query(query)
        return exis

    def excluir(self, nome):
        query = f'UPDATE curso SET status = "inativo" WHERE nome = "{nome}";'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def getList(self):
        query = f"SELECT * FROM `turma`;"
        conexao = Conection()
        exis = conexao.get_list(query)
        return exis

    def getId(self, id):
        query = f"SELECT id_turma FROM `turma` WHERE id_sala = {id};"
        conexao = Conection()
        exis = conexao.get_list(query)
        return exis