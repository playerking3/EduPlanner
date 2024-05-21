from utils.Criptografia import *
from datetime import date, timedelta, datetime
from dateutil import parser as date_parser
from flask import request

class VerificaToken:
    def validaToken(self):
        token = request.json.get('token')
        valid = Criptografia().decode(token)
        if valid:
            vence = datetime.strptime(valid['vencimento'], "%Y-%m-%d")
            day = datetime.today()
            if day > vence:
                return False
        return valid