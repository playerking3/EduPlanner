from models.Aulas import*
class TurmaDataController:
    def cadastraCalendar(self,list, id_turma):
        print(list, id_turma)
        aula = Aulas()
        for i in list:
            print(i)
            resp = aula.cadstrarAulas(id_turma, i)
            if resp == False:
                return False