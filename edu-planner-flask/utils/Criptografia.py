import jwt
import hashlib
from datetime import date, timedelta, datetime
from configs.Conection import *
from configs.config import SECRET_KEY
from dateutil import parser as date_parser
class Criptografia:
    def gerarToken(self, user_id, cargo):
        if type(user_id) != int:
            user_id = user_id[0]

        to_day = date.today()
        td = timedelta(7)

        encoder = {'user_id': user_id, 'cargo': cargo, 'vencimento': str(to_day + td)}
        token = jwt.encode(encoder, SECRET_KEY, algorithm='HS256')


        return {'key': token, 'down': to_day + td}

    def gerarTokenEsqueciSenha(self, code):
        to_day = datetime.now()
        td = timedelta(minutes=5)

        encoder = {'user_id': code, 'down': str(to_day + td)}
        token = jwt.encode(encoder, SECRET_KEY, algorithm='HS256')

        return {'status': True, 'key': token, 'down': to_day + td}

    def decode(self, token):
        try:
            response = jwt.decode(token['key'], SECRET_KEY, algorithms=['HS256'])
            return response
        except:
            return False


    def validaToken(self, descriptado, correspondencia, token):
        vencimento = token['down']

        if correspondencia[0] == descriptado['user_id'] and datetime.strptime(vencimento, "%a, %d %b %Y %H:%M:%S %Z").strftime('%d/%m/%Y') == correspondencia[1].strftime('%d/%m/%Y'):

            # checando data
            to_day = datetime.today()
            vence = date_parser.parse(vencimento)
            vence = datetime.date(vence)
            to_day = datetime.date(to_day)

            if to_day > vence:
                print('token vencido')
                return 'vencido'
            return True
        return 'invalid'



    def hashSenha(self, string):
        hash_object = hashlib.sha256(string.encode())
        return hash_object.hexdigest()