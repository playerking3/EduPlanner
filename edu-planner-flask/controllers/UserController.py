from models.User import *
from utils.Criptografia import *
from flask import jsonify
import random

class UserController:
    def login(self):
        # cpf = request.json.get('cpf')
        # password = request.json.get('password')
        cpf = 40404044052
        password = 'Teste123-'


        user = User(cpf, password)
        infos = user.login()
        print(infos[1], password + infos[2])
        print(type(infos[2]))
        if infos:
            if infos[1] == Criptografia().hashSenha(password + infos[2]):
                token = Criptografia().gerarToken(infos[0])
                return token
            return jsonify({'status': 'usuario ou senha invalido'})
        return jsonify({'status': 'usuario nao encontrado'})

    def cadastro(self):
        cpf = 40404044052
        password = 'Teste123-'
        # cpf = request.json.get('cpf')
        # password = request.json.get('password')
        # nome = request.json.get('nome')
        # email = request.json.get('email')
        # cargo = request.json.get('cargo')
        # nascimento = request.json.get('data_nascimento')

        salt = random.randint(1000000000, 9999999999999)
        print(password + str(salt))
        password = Criptografia().hashSenha(password + str(salt))
        user = User(cpf, password)
        check = user.checkUser()
        print(check, 'check user ')
        if check == False:
            response = user.cadastro('bia', 'bia@gmail.com', 'professor', '07/06/2005', salt)
            if response:
                id = user.checkUser()
                print(id, 'id aqui')
                token = Criptografia().gerarToken(id)
                print(token)
                if token:
                    return token
                response = token
            return jsonify({'status': response})
        return jsonify({'status': 'usuario ja cadastrado'})