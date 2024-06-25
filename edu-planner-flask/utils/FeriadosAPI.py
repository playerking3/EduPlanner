from datetime import datetime, timedelta
from brasilapy import BrasilAPI
from flask import jsonify
from models.Feriados import Feriados as custom

class Feriados():
    def getFeriadosObject(self):
        client = BrasilAPI()
        anoAtual = datetime.now().year
        feriados = client.get_feriados(anoAtual)
        customFeriados = custom().listFeriados()
        print(customFeriados)
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

        for i in customFeriados:
            if i[2].weekday() == 1:
                listaFeriados.append({

                    '1': 'Emenda de feriado',
                    '2': (i[2] - timedelta(days=1)).isoformat(),
                    '0': 'emenda'
                })
            elif i[2].weekday() == 3:
                listaFeriados.append({
                    '1': 'Emenda de feriado',
                    '2': (i[2] + timedelta(days=1)).isoformat(),
                    '0': 'emenda'
                })
            listaFeriados.append({

                '1': i[1],
                '2': i[2].isoformat(),
                '0': 'feriado'
            })
        return listaFeriados

    def getFeriadosList(self):
        client = BrasilAPI()
        anoAtual = datetime.now().year
        feriados = client.get_feriados(anoAtual)
        customFeriados = custom().listFeriados()

        listaFeriados = []
        for i in feriados:
            listaFeriados.append(i.date)

        for i in customFeriados:
            listaFeriados.append(i[2])
        return listaFeriados