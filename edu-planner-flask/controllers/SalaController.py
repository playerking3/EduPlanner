from flask import jsonify, request
from models.Sala import *
from controllers.TurmaSalaController import *
from utils.Image import *

class SalaController:
    def Cadastro(self):
        nome = request.json.get('nome')
        capacidade = request.json.get('capacidade')
        numero_sala = request.json.get('numero_sala')
        descricao = request.json.get('descricao')
        imagem = request.json.get('imagem')

        obj = Sala()
        if obj.get(nome, numero_sala) == False:
            print(obj.get(nome, numero_sala))
            response = obj.create(nome, capacidade, numero_sala, descricao)
            if response:
                id = obj.get(nome, numero_sala)
                Imagem().cadastrarImagem(imagem, id, 'sala')
                return jsonify({'status': 'success'})
        return jsonify({'status': 'error', 'info': 'curso de mesmo nome ja cadastrado ou com mesmo número'})

    def editar(self):
        nome = request.json.get('nome')
        capacidade = request.json.get('capacidade')

        obj = Sala()
        if obj.get(nome):
            response = obj.edita(nome, capacidade)
            return jsonify({'status': response})
        return jsonify({'status': 'error', 'info': 'curso não encontrado'})

    def excluir(self):
        nome = request.json.get('nome')

        obj = Sala()
        if obj.get(nome):
            print(TurmaSalaController().verificaSaida(obj.get(nome)))
            if not TurmaSalaController().verificaSaida(obj.get(nome)):
                response = obj.excluir(nome)
                return jsonify({'status': response})
            return jsonify({'status': 'error', 'info': 'a sala ainda tem alunos cadastrados'})
        return jsonify({'status': 'error', 'info': 'curso não encontrado'})

    def getList(self):
        obj = Sala()
        response = obj.getList()
        if response:
            return jsonify({'status': 'success', 'getSala': response})
        return jsonify({'status': 'error', 'info': response})

    def getId(self):
        nome = request.json.get('nome')
        obj = Sala()
        response = obj.get(nome)
        if response:
            return jsonify({'status': 'success', 'getSala': response})
        return jsonify({'status': 'error', 'info': response})

    def getIdEdit(self):
        id = request.json.get('id')
        obj = Sala()
        response = obj.getEdit(id)
        print(response)
        if response:
            return jsonify({'status': 'success', 'getSala': response[0]})
        return jsonify({'status': 'error', 'info': response})

    def EditSala (self):
        id = request.json.get('id')
        nome = request.json.get('nome')
        capacidade = request.json.get('capacidade')
        numero_sala = request.json.get('numero_sala')
        descricao = request.json.get('descricao')
        base64_string = request.json.get('imagem')

        sala = Sala()

        if sala.get(nome, numero_sala) == True:
            return jsonify({'status': 'error', 'info': 'curso de mesmo nome cadastrado'})

        img = Imagem().cadastrarImagem(base64_string, id, 'curso')

        response = curso.editaCurso(nome, cargaH, faixaE, categorias, descricao, id)
        if response:
            return jsonify({'status': 'success'})
        return jsonify({'status': 'error', 'info': 'usuario não cadastrado'})