import jwt
import hashlib
from datetime import date, timedelta
from configs.Conection import *
from configs.config import SECRET_KEY
class Criptografia:
    def gerarToken(self, user_id):
        if type(user_id) != int:
            user_id = user_id[0]

        to_day = date.today()
        td = timedelta(7)

        encoder = {'user_id': user_id}
        print(encoder)
        token = jwt.encode(encoder, SECRET_KEY, algorithm='HS256')
        print(token)

        query = f"INSERT INTO token (fk_user, codigo, vencimento) VALUES ({user_id}, '{token}', '{to_day + td}');"
        conexao = Conection()
        response = conexao.add_query(query)
        print(response, 'insert into token')
        if response:
            resposta = {'status': True, 'key': token, 'down': to_day + td}
            return resposta
        return response

    def hashSenha(self, string):
        hash_object = hashlib.sha256(string.encode())
        return hash_object.hexdigest()