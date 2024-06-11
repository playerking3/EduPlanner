from configs.Conection import *
class Aulas:
    def cadstrarAulas(self, id_turma, data):
        query = f'INSERT INTO aulas (id_turma, data_aula) VALUES ({id_turma}, "{data}");'
        conexao = Conection()
        response = conexao.add_query(query)
        return response