from configs.Conection import *

class Feriados:

    def listFeriados(self):
        query = f"SELECT * FROM feriados"
        conexao = Conection()
        exis = conexao.get_list(query)
        return exis

    def getFeriado(self, nome):
        query = f"SELECT id_feriado FROM feriados WHERE nome = '{nome}'"
        conexao = Conection()
        exis = conexao.get_list(query)
        return exis

    def addFeriado(self, nome, data):
        query = f"INSERT INTO feriados (nome, data_feriado) VALUES ('{nome}', '{data}')"
        conexao = Conection()
        response = conexao.add_query(query)
        return response