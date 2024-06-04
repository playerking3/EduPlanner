from configs.Conection import *

class Curso:
    def createCurso(self, nome, carga_horaria, faixa_etaria, categorias, descricao):
        query = f'INSERT INTO curso (nome, carga_horaria, faixa_etaria, categorias, descricao, status) VALUES ("{nome}", {carga_horaria}, "{faixa_etaria}", "{categorias}", "{descricao}", "ativo");'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def editaCurso(self, nome, carga_horaria, faixa_etaria, categorias, descricao, imagem):
        query = f'UPDATE curso SET carga_horaria = {carga_horaria}, faixa_etaria = "{faixa_etaria}", categorias = "{categorias}", descricao = "{descricao}", image = "{imagem}" WHERE nome = "{nome}";'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def getCurso(self, nome):
        query = f"SELECT id_curso FROM `curso` WHERE nome = '{nome}';"
        conexao = Conection()
        exis = conexao.get_query(query)
        return exis

    def getCursos(self):
        query = f"SELECT nome, id_curso, descricao FROM `curso` WHERE status = 'ativo';"
        conexao = Conection()
        exis = conexao.get_list_image(query, 'curso')
        return exis

    def excluiCurso(self, nome):
        query = f'UPDATE curso SET status = "inativo" WHERE nome = "{nome}";'
        conexao = Conection()
        response = conexao.add_query(query)
        return response