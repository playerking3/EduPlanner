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
        query = f"INSERT INTO usuario (nome, cpf, email, senha, cargo, data_nascimento, salt) VALUES ('{nome}', '{self.cpf}', '{email}', '{self.password}', '{cargo}', '{data_nascimento}', '{salt}');"
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
        query = f"SELECT nome, id_usuario FROM `usuario` WHERE cargo = 'aluno';"
        conexao = Conection()
        exis = conexao.get_list(query)
        print(exis)
        return exis

    def getProfessores(self):
        query = f"SELECT nome, id_usuario FROM `usuario` WHERE cargo = 'professor';"
        conexao = Conection()
        exis = conexao.get_list(query)
        print(exis)
        return exis