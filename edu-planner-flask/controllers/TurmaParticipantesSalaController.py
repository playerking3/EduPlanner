from flask import jsonify
from controllers.TurmaController import *
from controllers.ParticipanteController import *
from controllers.CursoController import *
from utils.FimDeCurso import *
class TurmaParticipantesSalaController:
    def cadastrarTurma(self):
        nome = request.json.get('nome')
        inicio = request.json.get('inicio')
        lista_dias = request.json.get('lista_dias')
        horario = request.json.get('horario')
        horas_dia = int(request.json.get('horas_dia'))
        id_curso = request.json.get('id_curso')
        id_sala = request.json.get('id_sala')

        duracao = Curso().getDuracao(id_curso)
        listaFeriados = []


        turma = TurmaController()

        print(nome, inicio, lista_dias, int(horario), int(horas_dia), id_curso, id_sala)

        fim, listaAulas = FimDeCurso(lista_dias, listaFeriados, inicio, duracao, horas_dia)
        print(fim, listaAulas)

        responseCad = turma.Cadastro(nome, inicio, lista_dias, horario, horas_dia, id_curso, id_sala, fim)



        if responseCad['status'] == 'success':
            participante = ParticipanteController()
            participante.Cadastro(responseCad['id'])

        return jsonify(responseCad)