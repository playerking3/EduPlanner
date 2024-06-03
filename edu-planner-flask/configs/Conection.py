import mysql.connector

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
                    print(i)
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

    def get_list_image (self, query):
        try:
            conect = mysql.connector.connect(user="root", password="", host="127.0.0.1", database='eduplanner', port='3306')
            cursor = conect.cursor()
            inserir = query
            cursor.execute(inserir)
            di = []
            if cursor:
                exist = True
                for i in cursor:
                    print(i)
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