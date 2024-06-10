from configs.Conection import *
class User:
    def __init__(self, cpf = '', password = ''):
        self.cpf = cpf
        self.password = password

    def login (self):
        query = f'SELECT id_usuario, senha, salt, cargo FROM `usuario` WHERE cpf = "{self.cpf}";'
        conexao = Conection()
        exis = conexao.get_query(query)
        return exis

    def checkUser(self):
        query = f"SELECT id_usuario FROM `usuario` WHERE cpf = '{self.cpf}';"
        conexao = Conection()
        exis = conexao.get_query(query)
        return exis

    def cadastro (self, nome, email, cargo, data_nascimento, salt):
        query = f"INSERT INTO usuario (nome, cpf, email, senha, cargo, data_nascimento, salt, status) VALUES ('{nome}', '{self.cpf}', '{email}', '{self.password}', '{cargo}', '{data_nascimento}', '{salt}', 'ativo');"
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def esqueciSenha(self):
        query = f"SELECT id_usuario, email FROM `usuario` WHERE cpf = '{self.cpf}';"
        conexao = Conection()
        exis = conexao.get_query(query)
        print(exis)
        return exis

    def getAlunos(self):
        query = f"SELECT nome, id_usuario FROM `usuario` WHERE cargo = 'aluno' and status = 'ativo';"
        conexao = Conection()
        exis = conexao.get_list_image(query, 'usuario')
        print(exis)
        return exis

    def getProfessores(self):
        query = f"SELECT nome, id_usuario FROM `usuario` WHERE cargo = 'professor' and status = 'ativo';"
        conexao = Conection()
        exis = conexao.get_list_image(query, 'usuario')
        return exis

    def getCoordenadores(self):
        query = f"SELECT nome, id_usuario FROM `usuario` WHERE cargo = 'coordenador' and status = 'ativo';"
        conexao = Conection()
        exis = conexao.get_list_image(query, 'usuario')
        return exis

    def getId(self, id):
        query = f"SELECT nome, id_usuario, cpf, data_nascimento, cargo, email, senha FROM `usuario` WHERE id_usuario = {id} and status = 'ativo';"
        conexao = Conection()
        exis = conexao.get_list_image(query, 'usuario')
        return exis

    def excluiUser(self, id):
        query = f'UPDATE usuario SET status = "inativo" WHERE id_usuario = {id};'
        conexao = Conection()
        response = conexao.add_query(query)
        return response