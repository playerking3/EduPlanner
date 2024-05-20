from models.Turma import *

class TurmaSalaController:
    def verificaSaida(self, id):
        turma = Turma()
        return turma.getId(id)