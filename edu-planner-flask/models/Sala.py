from configs.Conection import *

class Sala:
    def create(self, nome, capacidade, numero_sala, descricao):
        query = f'INSERT INTO sala (nome, capacidade, numero_sala, descricao) VALUES ("{nome}", {capacidade}, {numero_sala}, "{descricao}");'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def edita(self, nome, capacidade):
        query = f'UPDATE sala SET capacidade = {capacidade} WHERE nome = "{nome}";'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def get(self, nome, numero = 0):
        query = f'SELECT id_sala FROM `sala` WHERE nome = "{nome}" OR numero_sala = {numero};'
        conexao = Conection()
        exis = conexao.get_query(query)
        return exis

    def excluir(self, nome):
        query = f'DELETE FROM sala WHERE nome = "{nome}";'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def getList(self):
        query = f"SELECT nome, id_sala FROM `sala`;"
        conexao = Conection()
        exis = conexao.get_list_image(query, 'sala')
        return exis

    def getNomes(self):
        query = f"SELECT nome FROM `sala`;"
        conexao = Conection()
        exis = conexao.get_list(query)
        return exis