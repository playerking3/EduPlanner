from flask import jsonify
from models.Sala import *
from models.User import *
from models.Aulas import *
from utils.FimDeCurso import *
from controllers.CursoController import *
from utils.HoraDeAula import  *

class SalaAlunoProfessorController:
    def retornarInfos(self):
        print('aqui')
        nome = request.json.get('nome')
        inicio = request.json.get('inicio')
        lista_dias = request.json.get('lista_dias')
        horario = request.json.get('horario')
        horas_dia = int(request.json.get('horas_dia'))
        id_curso = request.json.get('id_curso')

        duracao = Curso().getDuracao(id_curso)
        allSalas = Sala().getNomes()
        auxSalas = []
        auxProf = []
        listaFeriados = []
        tempoCurso = FimDeCurso(lista_dias, listaFeriados, inicio, duracao[0], horas_dia).listData
        salasUsadas = Aulas().listarAulasESalas(tempoCurso)
        profsUsados = Aulas().listarAulasEProfs(tempoCurso)
        duracaoAula = HoraDeAula(horario, horas_dia).ListarHora()

        print(profsUsados, 'professores usados e abusados')
        for i in allSalas:
            auxSalas.append(i[0])

        for aula in salasUsadas:
            listaHoras = HoraDeAula(aula[1], int(aula[2])).ListarHora()
            if any(item in duracaoAula for item in listaHoras):
                try :
                    auxSalas.remove((aula[0]))
                    print('deu certo!')
                except:
                    print('falhou')
                    pass

        allProfessores = User().getNomeProfessores()
        allAlunos = User().getNomeAlunos()

        for i in allProfessores:
            auxProf.append(i[0])

        for aula in profsUsados:
            print(aula, '')
            listaHoras = HoraDeAula(aula[1], int(aula[2])).ListarHora()
            if any(item in duracaoAula for item in listaHoras):
                try :
                    auxProf.remove((aula[0]))
                    print('deu certo!')
                except:
                    print('falhou')
                    pass

        if  auxSalas == False and auxProf == False and auxProf == False:
            return jsonify({'status': 'error', 'info': 'erro na busca no banco'})
        return jsonify({'status': 'success', 'infos': {'professores': auxProf, 'salas': auxSalas, 'alunos': allAlunos}})