class HoraDeAula:
    def __init__(self, inicio, duracao):
        self.inicio = inicio
        self.duracao = duracao

    def ListarHora(self):
        horaInicio = int(self.inicio.rsplit(":")[0])
        listaFinal = []
        for hora in range(self.duracao):
            listaFinal.append(horaInicio)
            horaInicio += 1

        return listaFinal