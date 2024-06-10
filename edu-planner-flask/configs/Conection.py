import mysql.connector
from utils.Image import *

class Conection:
    def add_query (self, query):
        try:
            conect = mysql.connector.connect(user="root", password="", host="127.0.0.1", database='eduplanner', port='3306')
            cursor = conect.cursor()
            inserir = query
            cursor.execute(inserir)
            conect.commit()
            cursor.close()
            conect.close()
            return True

        except mysql.connector.Error as erro:
            print(erro)
            return False

    def get_query(self, query):
        try:
            conect = mysql.connector.connect(user="root", password="", host="127.0.0.1", database='eduplanner', port='3306')
            cursor = conect.cursor()
            inserir = query
            cursor.execute(inserir)
            di = False
            if cursor:
                exist = True
                for i in cursor:
                    di = i
            else:
                exist = False
            cursor.close()
            conect.close()
            if exist:
                return di
            else:
                return False
        except mysql.connector.Error as erro:
            print(erro)
            return False

    def get_list (self, query):
        try:
            conect = mysql.connector.connect(user="root", password="", host="127.0.0.1", database='eduplanner', port='3306')
            cursor = conect.cursor()
            inserir = query
            cursor.execute(inserir)
            di = []
            if cursor:
                exist = True
                for i in cursor:
                    di.append(i)
            else:
                exist = False
            cursor.close()
            conect.close()
            if exist:
                return di
            else:
                return False
        except mysql.connector.Error as erro:
            print(erro)
            return False

    def get_list_image (self, query, repositorio):
        try:
            conect = mysql.connector.connect(user="root", password="", host="127.0.0.1", database='eduplanner', port='3306')
            cursor = conect.cursor()
            inserir = query
            cursor.execute(inserir)
            di = []
            if cursor:
                exist = True
                for i in cursor:
                    listI = list(i)
                    for j in listI:
                        di.append(j)
                    di.append(Imagem().converteImagem(i[1], repositorio))
                    print(di)
            else:
                exist = False
            cursor.close()
            conect.close()
            if exist:
                return di
            else:
                return False
        except mysql.connector.Error as erro:
            print(erro)
            return False