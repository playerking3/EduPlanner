from datetime import datetime
from brasilapy import BrasilAPI
from flask import jsonify

class Feriados():
    def getFeriadosObject(self):
        client = BrasilAPI()
        anoAtual = datetime.now().year
        feriados = client.get_feriados(anoAtual)

        listaFeriados = []
        for i in feriados:
            listaFeriados.append({

                '1': i.name,
                '2': i.date.isoformat(),
                '0': 'feriado'
            })
        return listaFeriados

    def getFeriadosList(self):
        client = BrasilAPI()
        anoAtual = datetime.now().year
        feriados = client.get_feriados(anoAtual)

        listaFeriados = []
        for i in feriados:
            listaFeriados.append(i.date)
        return listaFeriados