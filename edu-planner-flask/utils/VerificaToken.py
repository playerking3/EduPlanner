from utils.Criptografia import *
from datetime import date, timedelta, datetime
from dateutil import parser as date_parser
from flask import request

class VerificaToken:
    def validaToken(self):
        token = request.json.get('token')
        valid = Criptografia().decode(token)
        print(valid)
        if valid:
            vence = datetime.strptime(valid['vencimento'], "%Y-%m-%d")
            day = datetime.today()
            if day > vence:
                print('venceu')
                return False
        return valid