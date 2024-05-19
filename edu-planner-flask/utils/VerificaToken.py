from utils.Criptografia import *
from flask import jsonify, request

class VerificaToken:
    def validaToken(self):
        token = {
          "down": "Sun, 26 May 2024 00:00:00 GMT",
          "key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4LCJjYXJnbyI6InByb2Zlc3NvciJ9.6WWmtrffKve12jCHt3QMG26xZZIB1oWxvOaHz5iYphU",
          "status": True
        }
        # token = request.json.get('token')
        decode = Criptografia().decode(token['key'])
        check = Criptografia().checktoken(token['key'])

        if check:
            verify = Criptografia().validaToken(decode, check, token)
            if verify:
                return {'status': 'valid'}
            return {'status': 'erro', 'infos': verify}
        return {'status': 'invalid'}