from utils.Criptografia import *
from flask import jsonify, request

class VerificaToken:
    def validaToken(self):
        token = {
          "down": "Tue, 21 May 2024 00:00:00 GMT",
          "key": "eyJhbGOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo3LCJjYXJnbyI6InByb2Zlc3NvciJ9.JZIpykQA2jO-KilM83B8Hd1BynS323kZYxhf_hcZ0Ak",
          "status": True
        }
        # token = request.json.get('token')
        decode = Criptografia().decode(token['key'])
        check = Criptografia().checktoken(token['key'])

        if check:
            verify = Criptografia().validaToken(decode, check, token)
            if verify:
                return {'status': 'valid'}
            return jsonify({'status': 'erro', 'infos': verify})
        return jsonify({'status': 'invalid'})