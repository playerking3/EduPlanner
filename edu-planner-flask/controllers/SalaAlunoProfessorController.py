from flask import jsonify
from models.Sala import *
from models.User import *
from models.Aulas import *
from utils.FimDeCurso import *
from controllers.CursoController import *
from utils.HoraDeAula import  *

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
        print('aqui')
        nome = request.json.get('nome')
        inicio = request.json.get('inicio')
        lista_dias = request.json.get('lista_dias')
        horario = request.json.get('horario')
        horas_dia = int(request.json.get('horas_dia'))
        id_curso = request.json.get('id_curso')

        duracao = Curso().getDuracao(id_curso)
        allSalas = Sala().getList()
        listaFeriados = []
        tempoCurso = FimDeCurso(lista_dias, listaFeriados, inicio, duracao[0], horas_dia).listData
        salasUsadas = Aulas().listarAulasESalas(tempoCurso)
        duracaoAula = HoraDeAula(horario, horas_dia).ListarHora()

        for aula in salasUsadas:
            try :
                listaHoras = HoraDeAula(aula[1], int(aula[2])).ListarHora()
                if any(item in duracaoAula for item in listaHoras):
                    print('deu certo!')
                    allSalas.remove(item[0])
            except:
                print('falhou')
                pass
        professores = User().getProfessores()
        alunos = User().getAlunos()

        if allSalas == False and professores == False and alunos == False:
            return jsonify({'status': 'error', 'info': 'erro na busca no banco'})
        return jsonify({'status': 'success', 'infos': {'professores': professores, 'salas': allSalas, 'alunos': alunos}})