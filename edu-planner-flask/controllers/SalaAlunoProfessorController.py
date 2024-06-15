from flask import jsonify
from models.Sala import *
from models.User import *
from models.Aulas import *
from utils.FimDeCurso import *
from controllers.CursoController import *

class SalaAlunoProfessorController:
    def retornarInfos(self):
        # print('dentro')
        #         salas = Sala().getList()
        #         professores = User().getProfessores()
        #         alunos = User().getAlunos()
        #
        #         print(salas)
        #         print(professores)
        #         print(alunos)

        nome = request.json.get('nome')
        inicio = request.json.get('inicio')
        lista_dias = request.json.get('lista_dias')
        horario = request.json.get('horario')
        horas_dia = int(request.json.get('horas_dia'))
        id_curso = request.json.get('id_curso')

        duracao = Curso().getDuracao(id_curso)
        allSalas = Sala().getList()
        salasUsadas = Aulas().listarAulasESalas()

        print(duracao)

        listaFeriados = []
        tempoCurso = FimDeCurso(lista_dias, listaFeriados, inicio, duracao[0], horas_dia)

        salasDisponiveis = []
        for sala in salasUsadas:
            if sala[1] in tempoCurso.listData:
                pass
            #colocar verificação de data e hora do curso aqui ara depois eliminar as salas que já estão sendo usadas 


        professores = User().getProfessores()
        alunos = User().getAlunos()

        if salas == False and professores == False and alunos == False:
            return jsonify({'status': 'error', 'info': 'erro na busca no banco'})
        return jsonify({'status': 'success', 'infos': {'professores': professores, 'salas': salasDisponiveis, 'alunos': alunos}})