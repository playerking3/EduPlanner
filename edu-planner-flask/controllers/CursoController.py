from flask import jsonify, request
from models.Curso import *

class CursoController:
    def CadastroCurso(self):
        nome = request.json.get('nome')
        carga_horaria = request.json.get('carga_horaria')
        descrição = request.json.get('descrição')
        faixa_etaria = request.json.get('faixa_etaria')
        imagem = request.json.get('imagem')
        categorias = request.json.get('categorias')

        curso = Curso()
        if curso.createCurso(nome) != True:
            response = curso.createCurso(nome, carga_horaria, faixa_etaria, categorias, descrição)
            return jsonify({'status': response})
        return jsonify({'status': 'curso de mesmo nome já cadastrado'})

    def editarCurso(self):
        nome = request.json.get('nome')
        carga_horaria = request.json.get('carga_horaria')
        descrição = request.json.get('descrição')
        faixa_etaria = request.json.get('faixa_etaria')
        imagem = request.json.get('imagem')
        categorias = request.json.get('categorias')

        curso = Curso()
        if curso.createCurso(nome):
            response = curso.editaCurso(nome, carga_horaria, faixa_etaria, categorias, descrição)
            return jsonify({'status': response})
        return jsonify({'status': 'curso de mesmo nome já cadastrado'})