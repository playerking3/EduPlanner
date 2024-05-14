from models.User import *
from utils.Criptografia import *
from flask import jsonify, request
from utils.Email import *
import random

class UserController:
    def login(self):
        # cpf = request.json.get('cpf')
        # password = request.json.get('password')
        cpf = 40404044052
        password = 'Teste123-'


        user = User(cpf, password)
        infos = user.login()
        if infos:
            if infos[1] == Criptografia().hashSenha(password + infos[2]):
                token = Criptografia().gerarToken(infos[0], infos[3])
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
        password = Criptografia().hashSenha(password + str(salt))
        user = User(cpf, password)
        check = user.checkUser()
        cargo = 'professor'
        if check == False:
            response = user.cadastro('bia', 'bia@gmail.com', 'professor', '07/06/2005', salt)
            if response:
                id = user.checkUser()
                print(id, 'id aqui')
                if id:
                    token = Criptografia().gerarToken(id, cargo)
                    if token:
                        return token
                    response = token
                return jsonify({'status': 'error', 'infos': 'usuario nao cadastrado'})
            return jsonify({'status': response})
        return jsonify({'status': 'usuario ja cadastrado'})

    def sair(self):
        #token = request.json.get('token')
        token = {
            "down": "Tue, 21 May 2024 00:00:00 GMT",
            "key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo3fQ.iN4T9GbKu0YPcLVIamzKzcXKzTmsERLNx6-id6lAyIE",
            "status": True
        }

        fk_user = Criptografia().checktoken(token['key'])
        descripto = Criptografia().decode(token['key'])
        if fk_user and descripto['user_id'] == fk_user[0]:
            response = Criptografia().excluiToken(token['key'])
            if response:
                return jsonify({'staus': 'success'})
            return jsonify({'status': 'error', 'info': 'erro na exclusão'})
        return jsonify({'status': 'invalid'})

    def esqueciSenha(self):
        # cpf = request.json.get('cpf')
        cpf = '40404044052'
        user = User(cpf)
        infos = user.esqueciSenha()
        code = random.randint(1000, 100000)

        Email().ConfirmaTrocaSenha('basqueroto.felipe125@gmail.com', code)

        token = Criptografia().gerarTokenEsqueciSenha(code)
        return jsonify(token)

    def verificaTokenSenha(self):
        token = request.json.get('token')
        code = request.json.get('code')
        payload = Criptografia().decode(token.keys())
        if payload['key'] == code:
            return jsonify({'status': True})
        return jsonify({'satus': False})


