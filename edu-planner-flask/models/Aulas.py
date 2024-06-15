from configs.Conection import *

class Aulas:
    def cadstrarAulas(self, id_turma, data):
        query = f'INSERT INTO aulas (id_turma, data_aula) VALUES ({id_turma}, "{data}");'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def listarAulasESalas(self):
        query = f'SELECT aulas.id_dataAula ,aulas.data_aula, sala.nome, turma.hora_inicio FROM aulas INNER JOIN  turma ON aulas.id_turma = turma.id_turma INNER JOIN sala ON turma.id_sala = sala.id_sala;'
        conexao = Conection()
        exis = conexao.get_list(query)
        return exis

tese = Aulas()
tese.listarAulasESalas()