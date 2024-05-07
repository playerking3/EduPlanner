from Conection import *
class User:
    def __init__(self, cpf, password):
        self.cpf = cpf
        self.password = password

    def login (self):
        query = f'SELECT id, password, salt FROM `user` WHERE cpf = "{self.cpf}";'
        conexao = Conection()
        exis = conexao.get_query(query)
        password = self.password + str(exis[0])
        #password = hash_string(password)
        print(exis)
        return exis

    def cadastro (self, nome, email, senha, cargo, data_nascimento):
        query = f"INSERT INTO usuario (nome, cpf, email, senha, cargo, data_nascimento) VALUES ('{nome}', '{self.cpf}', '{self.password}', '{self.email}', '{self.autentic}');"
        conexao = Conection()
        response = conexao.add_query(query)
        return response