from models.User import *
from utils.Criptografia import *
from flask import jsonify, request, send_from_directory
from utils.Email import *
from utils.CpfCheck import *
import random
from utils.Image import *

class UserController:
    def getUser(self):
        user = User()
        professores = user.getProfessores()
        alunos = user.getAlunos()
        coordenadores = user.getCoordenadores()

        if professores != False and alunos != False and coordenadores != False:
            return jsonify({'status': 'success', 'professores' : professores, 'alunos': alunos, 'coordenadores': coordenadores})
        return jsonify({'status': 'error', 'infos': 'falha em recuperar informações'})


    def login(self):
        cpf = request.json.get('cpf')
        password = request.json.get('password')

        user = User(cpf, password)
        infos = user.login()
        if infos:
            if infos[1] == Criptografia().hashSenha(password + infos[2]):
                if infos[3] == 'coordenador':
                    token = Criptografia().gerarToken(infos[0], infos[3])
                    return jsonify({'status': 'success', 'token': token})
                return jsonify({'status': 'error', 'info': 'o login deve ser feito por um coordenador'})
            return jsonify({'status': 'error', 'info': 'usuario ou senha invalido'})
        return jsonify({'status': 'error', 'info': 'usuario nao encontrado'})

    def cadastro(self, app):
        cpf = request.json.get('cpf')
        password = request.json.get('password')
        nome = request.json.get('nome')
        email = request.json.get('email')
        cargo = request.json.get('cargo')
        nascimento = request.json.get('data_nascimento')
        base64_string = request.json.get('foto')

        #verificador de cpf
        cpfcheck = Cpf(cpf)
        resp, msn = cpfcheck.is_cpf_valid()
        if resp == False:
            return jsonify({'status': 'error', 'info': msn})

        salt = random.randint(1000000000, 9999999999999)
        password = Criptografia().hashSenha(password + str(salt))
        user = User(cpf, password)
        check = user.checkUser()
        if check == False:
            response = user.cadastro(nome, email, cargo, nascimento, salt)
            if response:
                id = user.checkUser()

                response = Imagem().cadastrarImagem(base64_string, id, 'usuario')

                if response != True:
                    return jsonify({'status': 'error', 'info': response})

                print(id, 'id aqui')
                if id:
                    token = Criptografia().gerarToken(id, cargo)
                    return jsonify({'status': 'success', 'token': token})
                return jsonify({'status': 'error', 'info': 'usuario não cadastrado'})
            return jsonify({'status': 'error', 'info': response})
        return jsonify({'status': 'error', 'info': 'usuario ja cadastrado'})

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

    def excluir(self):
        id = request.json.get('id')

        curso = User()
        response = curso.excluiUser(id)
        if response:
            return jsonify({'status': 'success'})
        return jsonify({'status': 'error', 'info': 'erro ao excluir usuário'})

    def getUsuarioID(self):
        id = request.json.get('id')

        response = User().getId(id)
        if response:
            return jsonify({'status': 'success', 'infos': response})
        return jsonify({'status': 'error', 'info': 'erro ao recuperar informações'})




