from configs.Conection import *

class Sala:
    def create(self, nome, capacidade):
        query = f'INSERT INTO sala (nome, capacidade) VALUES ("{nome}", {capacidade});'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def edita(self, nome, capacidade):
        query = f'UPDATE sala SET capacidade = {capacidade} WHERE nome = "{nome}";'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def get(self, nome):
        query = f"SELECT id_sala FROM `sala` WHERE nome = '{nome}';"
        conexao = Conection()
        exis = conexao.get_query(query)
        return exis

    def excluir(self, nome):
        query = f'DELETE FROM sala WHERE nome = "{nome}";'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def getList(self):
        query = f"SELECT * FROM `sala`;"
        conexao = Conection()
        exis = conexao.get_list(query)
        return exis