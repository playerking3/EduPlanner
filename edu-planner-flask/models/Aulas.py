from configs.Conection import *

class Aulas:
    def cadstrarAulas(self, id_turma, data):
        query = f'INSERT INTO aulas (id_turma, data_aula) VALUES ({id_turma}, "{data}");'
        conexao = Conection()
        response = conexao.add_query(query)
        return response

    def listarAulasESalas(self, dias):
        query = f"select sala.nome, turma.hora_inicio, TIME_FORMAT(turma.horas_dia, '%S') as horas_dia from aulas \
        left join turma on turma.id_turma = aulas.id_turma \
        left join sala on sala.id_sala = turma.id_sala \
        where aulas.data_aula IN ({', '.join([f'{str(data)}' for data in dias])})"

        # query = "select sala.nome, turma.hora_inicio from aulas left join turma on turma.id_turma = aulas.id_turma left join sala on sala.id_sala = turma.id_sala where aulas.data_aula IN ('2024-06-16', '2024-06-19', '2024-06-20');"

        conexao = Conection()
        exis = conexao.get_list(query)
        return exis

    def listarAulasEProfs(self, dias):
        query = f"select  usuario.nome, turma.hora_inicio, TIME_FORMAT(turma.horas_dia, '%S') as horas_dia from aulas \
        left join turma on turma.id_turma = aulas.id_turma \
        left join participantes on participantes.id_turma = turma.id_turma \
        LEFT JOIN usuario on participantes.id_usuario = usuario.id_usuario \
        where aulas.data_aula IN ({', '.join([f'{str(data)}' for data in dias])})"
        conexao = Conection()
        print("query dias", query)
        exis = conexao.get_list(query)
        return exis

    def listarAulasPorCurso(self, IDs):
        idString = ",".join(str(element) for element in IDs)
        query = f"SELECT aulas.id_dataAula, turma.nome, DATE_FORMAT(aulas.data_aula, '%Y-%m-%d') FROM aulas left join turma on turma.id_turma = aulas.id_turma WHERE aulas.id_turma IN({idString})"
        conexao = Conection()
        exis = conexao.get_list(query)
        return exis