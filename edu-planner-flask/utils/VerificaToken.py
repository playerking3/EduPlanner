from utils.Criptografia import *
from datetime import date, timedelta, datetime
from dateutil import parser as date_parser

class VerificaToken:
    def validaToken(self):
        token = {
            "down": "Mon, 27 May 2024 00:00:00 GMT",
            "key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4LCJjYXJnbyI6InByb2Zlc3NvciIsInZlbmNpbWVudG8iOiIyMDI0LTA1LTI3In0.02wphOI3kui1j25GsY3tqtCIXkPtbCJsSFU2Yl5j41g"
          }
        # token = request.json.get('token')
        valid = Criptografia().decode(token)
        if valid:
            vence = datetime.strptime(valid['vencimento'], "%Y-%m-%d")
            day = datetime.today()
            if day > vence:
                return False
        return valid