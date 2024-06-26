import calendar
from datetime import timedelta, date

class FimDeCurso:

    def __init__(self, periodicidade, listaFeriados, dataInicio, duracaoCurso, duracaoAula, emendaFeriado=True):
        self.periodicidade = periodicidade
        self.emendaFeriado = emendaFeriado
        self.listaFeriados = self.transformaObjData(listaFeriados)
        self.dataInicio = date.fromisoformat(dataInicio)
        self.duracaoCurso = duracaoCurso
        self.duracaoAula = duracaoAula
        self.listaSemana = [1,2,3,4,5,6,0]
        self.diaInicio = self.dataInicio.day
        self.mesInicio = self.dataInicio.month
        self.anoInicio = self.dataInicio.year
        self.diasPassados = 0
        self.horasContadas = 0
        self.calendario = calendar.Calendar()
        self.mes = self.calendario.itermonthdays4(self.anoInicio, self.mesInicio)
        self.listData = []
        self.dataFinal = self.contaMes()

    def transformaObjData(self, lista):
        result = []
        for i in lista:
            objeto = date.fromisoformat(i)
            if self.emendaFeriado:
                if objeto.weekday() == 1:
                    result.append(objeto - timedelta(days=1))
                elif objeto.weekday() == 3:
                    result.append(objeto + timedelta(days=1))
                result.append(objeto)
            else:
                result.append(objeto)
        return result

    def contaMes(self):
        for i in self.mes:
            if i[1] >= self.mesInicio and i[2] >= self.diaInicio:
                if self.horasContadas < self.duracaoCurso:
                    if self.listaSemana[i[3]] in self.periodicidade:
                        if date(i[0], i[1], i[2]) not in self.listaFeriados:
                            self.horasContadas += self.duracaoAula
                            self.listData.append(date(i[0], i[1], i[2]).isoformat())

                    self.diasPassados += 1
                else:
                    break
        if self.horasContadas < self.duracaoCurso:
            self.mesInicio += 1
            self.diaInicio = 1
            self.mes = self.calendario.itermonthdays4(self.anoInicio, self.mesInicio)
            return self.contaMes()
        else:
            dataFinal = self.dataInicio + timedelta(days=self.diasPassados-1)
            return dataFinal