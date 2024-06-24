from flask import jsonify, request
from models.Curso import *
from utils.Image import *

class CursoController:
    def getCurso(self):
        response = Curso().getCursos()
        if response:
            return jsonify({'status': 'success', 'cursos': response})
        return jsonify({'status': 'error', 'infos': 'falha em recuperar informações'})

    def CadastroCurso(self):
        nome = request.json.get('nome')
        carga_horaria = request.json.get('carga_horaria')
        descricao = request.json.get('descricao')
        faixa_etaria = request.json.get('faixa_etaria')
        imagem = request.json.get('imagem')
        categorias = request.json.get('categorias')

        curso = Curso()
        if curso.getCurso(nome) == False:
            curso.createCurso(nome, carga_horaria, faixa_etaria, categorias, descricao)
            print(curso.getCurso(nome))
            id = curso.getCurso(nome)
            print(id)
            if id != False:
                Imagem().cadastrarImagem(imagem, id, 'curso')
                return jsonify({'status': 'success'})
            return jsonify({'status': 'error', 'info': 'falha em cadastrar a imagem'})
        return jsonify({'status': 'error', 'info': 'curso de mesmo nome ja cadastrado'})

    def editarCurso(self):
        nome = request.json.get('nome')
        carga_horaria = request.json.get('carga_horaria')
        descrição = request.json.get('descrição')
        faixa_etaria = request.json.get('faixa_etaria')
        imagem = request.json.get('imagem')
        categorias = request.json.get('categorias')

        nome = nome.lower()
        curso = Curso()
        if curso.getCurso(nome):
            response = curso.editaCurso(nome, carga_horaria, faixa_etaria, categorias, descrição, imagem)
            return jsonify({'status': response})
        return jsonify({'status': 'error', 'info': 'curso não encontrado'})

    def excluiCurso(self):
        id = request.json.get('id')
        print(id)
        curso = Curso()
        if curso.getCurso(nome='',id=id):
            response = curso.excluiCurso(id)
            return jsonify({'status': response})
        return jsonify({'status': 'error', 'info': 'curso não encontrado'})

    def getDuracao(self, id):
        duracao = Curso().getDuracao(id)
        if duracao:
            return jsonify({'status': 'success'})
        return jsonify({'status': 'error', 'info': 'curso não encontrado'})

    def getCursoID(self):
        id = request.json.get('id')
        response = Curso().getId(id)
        response = response[0]

        if response:
            return jsonify({'status': 'success', 'infos': response})
        return jsonify({'status': 'error', 'info': 'erro ao recuperar informações'})

    def editarcurso(self):
        id = request.json.get('id')
        nome = request.json.get('nome')
        cargaH = request.json.get('cargaH')
        faixaE = request.json.get('faixaE')
        categorias = request.json.get('categorias')
        descricao = request.json.get('descricao')
        base64_string = request.json.get('imagem')

        curso = Curso()

        if curso.getCurso(nome) == False:
            return jsonify({'status': 'error', 'info': 'curso de mesmo nome cadastrado'})

        img = Imagem().cadastrarImagem(base64_string, id, 'usuario')

        response = curso.editaCurso(nome, cargaH, faixaE, categorias, descricao, img)
        if response:
            return jsonify({'status': 'success'})
        return jsonify({'status': 'error', 'info': 'usuario não cadastrado'})