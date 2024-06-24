from datetime import datetime, timedelta
from brasilapy import BrasilAPI
from flask import jsonify

class Feriados():
    def getFeriadosObject(self):
        client = BrasilAPI()
        anoAtual = datetime.now().year
        feriados = client.get_feriados(anoAtual)

        listaFeriados = []
        for i in feriados:
            if i.date.weekday() == 1:
                listaFeriados.append({

                    '1': 'Emenda de feriado',
                    '2': (i.date - timedelta(days=1)).isoformat(),
                    '0': 'emenda'
                })
            elif i.date.weekday() == 3:
                listaFeriados.append({
                    '1': 'Emenda de feriado',
                    '2': (i.date + timedelta(days=1)).isoformat(),
                    '0': 'emenda'
                })
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