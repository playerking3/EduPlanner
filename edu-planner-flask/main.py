from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config.from_pyfile('config.py')
db = SQLAlchemy(app)

from User import *
@app.route('/login')
def login():
    #cpf = request.json.get('cpf')
    #password = request.json.get('password')
    cpf = 40404044040
    password = 'Teste123-'
    user = User(cpf, password)
    user.login()
    return jsonify({'voltar': 'fffff'})

@app.route('/cadastro')
def cadastro():
    cpf = 40404044040
    password = 'Teste123-'
    user = User(cpf, password)
    user.login()
    return jsonify({'voltar': 'fffff'})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
