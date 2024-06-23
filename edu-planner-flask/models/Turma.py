from configs.Conection import *

class Turma:
    def create(self, nome, inicio, fim, lista_dias, horas_dia, id_curso, id_sala, horario):
        query = f'INSERT INTO turma (nome, inicio, fim, lista_dias, horas_dia, id_curso, id_sala, status, hora_inicio) VALUES ("{nome}", "{inicio}", "{fim}", "{lista_dias}", {horas_dia}, {id_curso}, {id_sala}, "ativo", "{horario}");'
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
        query = f'UPDATE turma SET status = "inativo" WHERE nome = "{nome}";'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def getList(self):
        query = "SELECT turma.id_turma, turma.id_curso, turma.id_sala, turma.nome, DATE_FORMAT(turma.inicio, '%Y-%m-%d') as inicio, DATE_FORMAT(turma.fim, '%Y-%m-%d') as fim, turma.lista_dias, TIME_FORMAT(turma.horas_dia, '%s') as horas_dia, turma.status, TIME_FORMAT(turma.hora_inicio, '%H:%i') as hora_inicio FROM `turma` WHERE status = 'ativo';"
        conexao = Conection()
        exis = conexao.get_list(query)
        return exis

    def getId(self, id):
        query = f"SELECT id_turma FROM `turma` WHERE id_sala = {id};"
        conexao = Conection()
        exis = conexao.get_list(query)
        return exis