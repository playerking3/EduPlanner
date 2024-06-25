from flask import jsonify
from controllers.TurmaController import *
from controllers.ParticipanteController import *
from controllers.CursoController import *
from controllers.TurmaDataController import *
from models.Sala import *
from utils.FimDeCurso import *
class TurmaParticipantesSalaController:
    def cadastrarTurma(self):
        nome = request.json.get('nome')
        inicio = request.json.get('inicio')
        lista_dias = request.json.get('lista_dias')
        horario = request.json.get('horario')
        horas_dia = int(request.json.get('horas_dia'))
        id_curso = request.json.get('id_curso')
        nomeSala = request.json.get('id_sala')

        print(nomeSala)

        id_sala = Sala().get(nome=nomeSala)[0]

        duracao = Curso().getDuracao(id_curso)
        listaFeriados = []

        turma = TurmaController()

        print(lista_dias, listaFeriados, inicio, duracao, int(horas_dia))
        if duracao:
            duracao = duracao[0]
            fim = FimDeCurso(lista_dias, listaFeriados, inicio, duracao, int(horas_dia))
            print(nome, inicio, lista_dias, horario, horas_dia, id_curso, id_sala, fim.dataFinal, "dados recebidos")

            responseCad = turma.Cadastro(nome, inicio, lista_dias, horario, horas_dia, id_curso, id_sala, fim.dataFinal)
            print(responseCad, 'Resposta')
            if responseCad['status'] == 'success':
                participante = ParticipanteController()
                participante.Cadastro(responseCad['id'])
                TurmaDataController().cadastraCalendar(fim.listData, responseCad['id'][0])

            return jsonify(responseCad)
        return jsonify({'status': 'error', 'info':'curso não achado'})