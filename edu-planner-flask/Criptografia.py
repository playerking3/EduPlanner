import jwt
from flask_bcrypt import generate_password_hash
from config import SECRET_KEY

class Criptografia:
    def gerarToken(self, user_id):
        payload = {'id_usuario': user_id}
        token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')
        return token

    def hashSenha(self, senha):
        senha_hash = generate_password_hash(senha).decode('utf-8')
        return senha_hash