CREATE SCHEMA `eduplanner` ;

CREATE TABLE usuario (
    id_usuario INT auto_increment primary key,
    nome varchar(254),
    cpf INT(11),
    email varchar(254),
    senha varchar(100),
    cargo varchar(50),
    data_nascimento date
)

CREATE TABLE sala (
    id_sala INT auto_increment primary key,
    nome varchar(254),
    capacidade  INT
)

CREATE TABLE curso (
    id_curso INT auto_increment primary key,
    nome varchar(254),
    carga_horaria INT
)

create table turma (
    id_turma INT primary key auto_increment,
    id_curso INT,
    id_sala INT,
    nome varchar(254),
    inicio date,
    fim date,
    lista_dias varchar(254),
    horas_dia time
    FOREIGN key (id_curso) references curso (id_curso)
    FOREIGN key (id_sala) references sala (id_sala)
)

CREATE TABLE participantes(
    id_participante INT primary key auto_increment,
    id_turma INT,
    id_usuario INT,
    FOREIGN key (id_turma) references turma (id_turma),
    FOREIGN key (id_usuario) references usuario (id_usuario)
)

ALTER TABLE curso ADD COLUMN faixa_etaria varchar(254)

ALTER TABLE curso ADD COLUMN categorias varchar(254)