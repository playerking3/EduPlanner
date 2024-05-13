import jwt
from flask_bcrypt import generate_password_hash
from datetime import date, timedelta
from configs.Conection import *
from configs.config import SECRET_KEY
class Criptografia:
    def gerarToken(self, user_id):
        to_day = date.today()
        td = timedelta(7)

        encoder = {'user_id': user_id[0]}
        print(encoder)
        token = jwt.encode(encoder, SECRET_KEY, algorithm='HS256')
        print(token)

        query = f"INSERT INTO token (fk_user, codigo, vencimento) VALUES ({user_id[0]}, '{token}', '{to_day + td}');"
        conexao = Conection()
        response = conexao.add_query(query)
        print(response, 'insert into token')
        if response:
            resposta = {'status': True, 'key': token, 'down': to_day + td}
            return resposta
        return response

    def hashSenha(self, senha):
        senha_hash = generate_password_hash(senha).decode('utf-8')
        return senha_hash