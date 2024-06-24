from configs.Conection import *

class Curso:
    def createCurso(self, nome, carga_horaria, faixa_etaria, categorias, descricao):
        query = f'INSERT INTO curso (nome, carga_horaria, faixa_etaria, categorias, descricao, status) VALUES ("{nome}", {carga_horaria}, "{faixa_etaria}", "{categorias}", "{descricao}", "ativo");'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def editaCurso(self, nome, carga_horaria, faixa_etaria, categorias, descricao, id):
        query = f'UPDATE curso SET nome = "{nome}", carga_horaria = {carga_horaria}, faixa_etaria = "{faixa_etaria}", categorias = "{categorias}", descricao = "{descricao}" WHERE id_curso = {id};'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def getCurso(self, nome, id = 0):
        query = f"SELECT id_curso FROM `curso` WHERE nome = '{nome}' OR id_curso = {id};"
        conexao = Conection()
        exis = conexao.get_query(query)
        return exis

    def getCursos(self):
        query = f"SELECT nome, id_curso, descricao, carga_horaria, faixa_etaria FROM `curso` WHERE status = 'ativo';"
        conexao = Conection()
        exis = conexao.get_list_image(query, 'curso')
        return exis

    def excluiCurso(self, id):
        query = f'UPDATE curso SET status = "inativo" WHERE id_curso = {id};'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def getDuracao(self, id):
        query = f"SELECT carga_horaria FROM `curso` WHERE status = 'ativo' and id_curso = {id};"
        conexao = Conection()
        exis = conexao.get_query(query)
        return exis

    def getId(self, id):
        query = f"SELECT nome, id_curso, carga_horaria, faixa_etaria, categorias, descricao FROM `curso` WHERE id_curso = {id} and status = 'ativo';"
        conexao = Conection()
        exis = conexao.get_list_image(query, 'curso')
        return exis