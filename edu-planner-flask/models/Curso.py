from configs.Conection import *

class Curso:
    def createCurso(self, nome, carga_horaria, faixa_etaria, categorias, descricao):
        query = f"INSERT INTO curso (nome, carga_horaria, faixa_etaria, categorias, descricao) VALUES ('{nome}', '{carga_horaria}', '{faixa_etaria}', '{categorias}', '{descricao}');"
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def editaCurso(self, nome, carga_horaria, faixa_etaria, categorias, descricao):
        query = f"UPDATE curso SET nome = '{nome}', carga_horaria = {carga_horaria}, faixa_etaria = {faixa_etaria}, categorias = '{categorias}, descricao = '{descricao}';"
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def getCurso(self, nome):
        query = f"SELECT id_curso FROM `curso` WHERE nome = '{nome}';"
        conexao = Conection()
        exis = conexao.get_query(query)
        return exis