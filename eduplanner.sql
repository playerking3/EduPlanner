-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24/06/2024 às 22:20
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `eduplanner`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `aulas`
--

CREATE TABLE `aulas` (
  `id_dataAula` int(11) NOT NULL,
  `id_turma` int(11) DEFAULT NULL,
  `data_aula` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `aulas`
--

INSERT INTO `aulas` (`id_dataAula`, `id_turma`, `data_aula`) VALUES
(1, 25, '2024-06-16'),
(2, 25, '2024-06-19'),
(3, 25, '2024-06-20'),
(4, 26, '2024-06-16'),
(5, 26, '2024-06-19'),
(6, 26, '2024-06-20'),
(7, 27, '2024-06-16'),
(8, 27, '2024-06-19'),
(9, 27, '2024-06-20'),
(10, 28, '2024-05-23'),
(11, 28, '2024-05-24'),
(12, 28, '2024-05-27'),
(13, 28, '2024-05-31'),
(14, 28, '2024-06-03'),
(15, 28, '2024-06-06'),
(16, 28, '2024-06-07'),
(17, 28, '2024-06-10'),
(18, 28, '2024-06-13'),
(19, 28, '2024-06-14'),
(20, 28, '2024-06-17'),
(21, 28, '2024-06-20'),
(22, 28, '2024-06-21'),
(23, 28, '2024-06-24'),
(24, 28, '2024-06-27'),
(25, 28, '2024-06-28'),
(26, 28, '2024-07-01'),
(27, 28, '2024-07-04'),
(28, 28, '2024-07-05'),
(29, 28, '2024-07-08'),
(30, 29, '2024-06-14'),
(31, 29, '2024-06-17'),
(32, 29, '2024-06-19');

-- --------------------------------------------------------

--
-- Estrutura para tabela `curso`
--

CREATE TABLE `curso` (
  `id_curso` int(11) NOT NULL,
  `nome` varchar(254) DEFAULT NULL,
  `carga_horaria` int(11) DEFAULT NULL,
  `faixa_etaria` varchar(254) DEFAULT NULL,
  `categorias` varchar(254) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `image` text DEFAULT NULL,
  `status` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `curso`
--

INSERT INTO `curso` (`id_curso`, `nome`, `carga_horaria`, `faixa_etaria`, `categorias`, `descricao`, `image`, `status`) VALUES
(10, 'sesi bgi', 10, '14-16', '[\'dfsgsd\', \'sfgsdfg\', \'sdfgsdfg\']', 'sfdgsdfg', NULL, 'ativo'),
(11, 'turma do altinoff', 80, 'sdfsdf', '[\'sdfsdf\']', 'sdfsdf', NULL, 'ativo'),
(12, 'Sim', 10, '30', '[\'1\', \'2\']', 'Legal', NULL, 'inativo');

-- --------------------------------------------------------

--
-- Estrutura para tabela `feriados`
--

CREATE TABLE `feriados` (
  `id_feriado` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `data_feriado` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `feriados`
--

INSERT INTO `feriados` (`id_feriado`, `nome`, `data_feriado`) VALUES
(2, 'dsfsdgfsg', '2024-06-20'),
(3, 'zdffdzdgfb', '2024-06-25');

-- --------------------------------------------------------

--
-- Estrutura para tabela `participantes`
--

CREATE TABLE `participantes` (
  `id_participante` int(11) NOT NULL,
  `id_turma` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `participantes`
--

INSERT INTO `participantes` (`id_participante`, `id_turma`, `id_usuario`) VALUES
(1, 22, 10),
(2, 23, 10);

-- --------------------------------------------------------

--
-- Estrutura para tabela `sala`
--

CREATE TABLE `sala` (
  `id_sala` int(11) NOT NULL,
  `nome` varchar(254) DEFAULT NULL,
  `capacidade` int(11) DEFAULT NULL,
  `numero_sala` int(11) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `sala`
--

INSERT INTO `sala` (`id_sala`, `nome`, `capacidade`, `numero_sala`, `descricao`, `status`) VALUES
(1, 'sesi bgi', 20, NULL, NULL, 'inativo'),
(3, 'sesi bgi56', 20, 5, 'dsafasdf', 'ativo'),
(4, 'turma do altinoffdd', 234234, 90, 'sadfa', 'ativo'),
(5, 'TI', 20, 10, 'jdukskdqhuid', 'ativo'),
(6, 'TI4', 20, 109, 'jdukskdqhuid', 'ativo'),
(7, 'Sim', 10, 34, '', 'ativo'),
(8, 'wdqrqwrqWR', 7, 1, 'pkomk-opm', 'ativo');

-- --------------------------------------------------------

--
-- Estrutura para tabela `turma`
--

CREATE TABLE `turma` (
  `id_turma` int(11) NOT NULL,
  `id_curso` int(11) DEFAULT NULL,
  `id_sala` int(11) DEFAULT NULL,
  `nome` varchar(254) DEFAULT NULL,
  `inicio` date DEFAULT NULL,
  `fim` date DEFAULT NULL,
  `lista_dias` varchar(254) DEFAULT NULL,
  `horas_dia` time DEFAULT NULL,
  `status` text DEFAULT NULL,
  `hora_inicio` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `turma`
--

INSERT INTO `turma` (`id_turma`, `id_curso`, `id_sala`, `nome`, `inicio`, `fim`, `lista_dias`, `horas_dia`, `status`, `hora_inicio`) VALUES
(5, 10, 1, 'sesi BGI', '2024-06-05', '2024-06-20', '[1,2,3]', '00:00:04', 'inativo', NULL),
(6, 10, 1, '{nome}', '0000-00-00', '0000-00-00', '{lista_dias}', '00:00:05', 'inativo', '14:00'),
(7, 10, 1, 'sesi bgo', '2024-05-27', '2024-06-30', '[0, 5]', '00:00:20', 'inativo', '14:00'),
(8, 10, 1, 'sesi bgi5', '2024-05-29', '2024-06-30', '[6, 3]', '00:00:20', 'inativo', '14'),
(9, 10, 1, 'sesi bgi7', '2024-05-29', '2024-06-30', '[6, 3]', '00:00:20', 'inativo', '14'),
(10, 10, 1, 'sesi bgi1111', '2024-05-01', '2024-06-30', '[]', '00:00:20', 'inativo', '14'),
(11, 10, 1, 'sesi bgi1119', '2024-05-01', '2024-06-30', '[]', '00:00:20', 'inativo', '14'),
(12, 10, 1, 'sesi bgi11100', '2024-05-01', '2024-06-30', '[]', '00:00:20', 'inativo', '14'),
(13, 10, 1, 'sesi bgi66', '0000-00-00', '2024-06-30', '[2, 1]', '00:00:20', 'inativo', '14:00'),
(14, 10, 1, 'sesi bgi669', '0000-00-00', '2024-06-30', '[2, 1]', '00:00:20', 'inativo', '14:00'),
(15, 10, 1, 'sesi bgi777', '2024-05-29', '2024-06-30', '[]', '00:00:20', 'inativo', '14:00'),
(16, 10, 1, 'sesi bgi2222', '2024-05-20', '2024-06-30', '[]', '00:00:20', 'inativo', '14:00'),
(17, 10, 1, 'sesi bgi22222', '2024-05-20', '2024-06-30', '[]', '00:00:20', 'inativo', '14:00'),
(18, 10, 1, 'sesi bgi222222', '2024-05-20', '2024-06-30', '[]', '00:00:20', 'inativo', '14:00'),
(19, 10, 1, 'sesi bgi2222222', '2024-05-20', '2024-06-30', '[]', '00:00:20', 'inativo', '14:00'),
(20, 10, 1, 'sesi bgi22222222', '2024-05-20', '2024-06-30', '[]', '00:00:20', 'inativo', '14:00'),
(21, 10, 1, 'sesi bgi222222222', '2024-05-20', '2024-06-30', '[]', '00:00:20', 'inativo', '14:00'),
(22, 10, 1, 'sesi bgi2222222222', '2024-05-20', '2024-06-30', '[]', '00:00:20', 'inativo', '14:00'),
(23, 10, 1, 'sesi bgi22222222222', '2024-05-20', '2024-06-30', '[]', '00:00:20', 'inativo', '14:00'),
(24, 10, 1, 'turma do altino', '2024-06-05', '2024-06-30', '[1, 6]', '00:00:40', 'inativo', '16:00'),
(25, 10, 1, 'Teste', '2024-06-14', '2024-06-30', '[0, 3, 4]', '00:00:04', 'inativo', '18:00'),
(26, 10, 1, 'Teste2', '2024-06-14', '2024-06-30', '[0, 3, 4]', '00:00:04', 'inativo', '18:00'),
(27, 10, 1, 'Teste3', '2024-06-14', '2024-06-30', '[0, 3, 4]', '00:00:04', 'inativo', '18:00'),
(28, 11, 5, 'Testando cadastro de feriado2', '2024-05-23', '2024-06-30', '[1, 4, 5]', '00:00:04', 'inativo', '9:00'),
(29, 10, 7, 'testandoSalas', '2024-06-13', '2024-06-30', '[1, 3, 5]', '00:00:04', 'ativo', '9:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nome` varchar(254) DEFAULT NULL,
  `cpf` text DEFAULT NULL,
  `email` varchar(254) DEFAULT NULL,
  `senha` varchar(100) DEFAULT NULL,
  `cargo` varchar(50) DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL,
  `salt` text DEFAULT NULL,
  `status` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nome`, `cpf`, `email`, `senha`, `cargo`, `data_nascimento`, `salt`, `status`) VALUES
(9, 'Felipe', '40168403846', 'basqueroto.felipe125@gmail.com', 'bd7662ef0b1f141ffe35bb788f9c86fcc70d16e88d01dd1773fefa91b2b27ba1', 'coordenador', '2024-05-20', '1492043935125', 'ativo'),
(10, 'Felipe', '221.002.770-57', 'basqueroto.felipe125@gmail.com', '63d86b0a684d7536a93933ff77e7c63568610914b3ae2f6a4f54d1175824adcb', 'aluno', '0000-00-00', '9925051378636', NULL),
(11, 'Bia Garrocini', '05643660059', 'basqueroto.felipe125@gmail.com', '7daac9544893708e14415981b3cbdd8212c405bd932721b7d6325164b84417fa', 'aluno', '2024-05-13', '8437575176222', NULL),
(12, 'Henri', '80019647018', 'basqueroto.felipe125@gmail.com', '5791b6853d71bf18bf879c3e05c5323dbed546b65cf4a859cd1b79b1ee2ae274', 'professor', '2024-05-21', '1438170222784', NULL),
(13, 'altino', '55138671090', 'asdfsd@afadsf', 'bc66fd5e23a978d50f8bab1a89d627eafa7add91b9b8d45b0559283c04a8f249', 'Professor', '0000-00-00', '6613942489864', NULL),
(14, 'altino2', '80856383040', '', '94bfd0776426ec52113829064df177332b27c47f7d2b95d75c9aab0670b629a8', 'Professor', '2024-06-11', '3481004037925', 'inativo'),
(15, 'Lucas', '94370321069', 'lucas123@gmail.com', 'f0c809f4eabcee8e3872308e3bb245a6f5b2b070a221968830f43efccb21adfd', 'coordenador', '2024-06-18', '2206418178789', 'inativo'),
(16, 'Lucas2', '70700068023', 'lucas.silva885@aluno.senai.br', '60e1391ffadd54cee0ca1c9a0cefa00e55de063e601a7cdc961308d8d2f5eb74', 'Professor', '2024-06-25', '5356774627695', 'inativo'),
(17, 'Lucas85', '43885077094', 'safwasf@aesfd', '8ace19251e635d4b57e5d77830132d30674da1431ae9cde53e8e7fccea00bfc5', '', '2024-06-20', '3303640797536', 'ativo'),
(18, 'Lucas', '81988303087', 'safwasf@aesfd2', 'a9921687b5ebf32ea7d40c2f8fc8d2b1b1a6b97fbba89b3d811c15560bac01fd', 'Professor', '2024-06-07', '7707048496894', 'inativo'),
(19, 'Ederson Sales', '442.100.830-38', 'tatu.arnesto@gmail.com', 'a69653f91822d5dbbb3df38b119409d0da2ea335b32d53c3c81cb4014245dbb0', 'Aluno', '1994-04-12', '6796234856374', 'inativo'),
(20, 'Ederson Sales', '442.100.830-38', 'tatu.arnesto@gmail.com', '4bc7f91c90a4d200ac5ad98659e70377c3dfc3da29a72b1afc25b5eb0d61ce38', 'Aluno', '1994-04-12', '5714931269194', 'inativo'),
(21, 'Igao', '921.505.420-05', 'teste@test3ando.com', 'b769fbbe7da54d689aed1c5c180fa207d5d7e4b3aae02a177bbc694d9d484c37', 'Professor', '2024-06-12', '705291392875', 'inativo'),
(22, 'Igao', '921.505.420-05', 'teste@test3ando.com', 'e0434f526d115adc25abec20f3ed3655df0031111dca20fae4097bfd57c6fb74', 'Professor', '2024-06-12', '2332335976022', 'inativo'),
(23, 'Igasso', '933.343.330-94', 'teste@tererstando.com', '20dbd35c36681a5abb613eb81575c3eb501794d49c6587a1a76404c4506f54d2', 'Aluno', '2024-05-30', '2631997827628', 'inativo'),
(24, 'Igasso', '933.343.330-94', 'teste@tererstando.com', '3a6df70a8ceb49e8e10c87326cfb14a668d31837b973ef1060933f5c4d281313', 'Aluno', '2024-05-30', '4726701165638', 'inativo'),
(25, 'Igo', '187.903.090-06', 'teste@testdegvdfxgdando.com', 'd970566a2695251aa79aa9da17fd3907d7964a027ef1c7ddf94c018e4ee76c8a', 'Professor', '2024-05-21', '3175181655565', 'inativo'),
(26, 'Igo', '187.903.090-06', 'teste@testdegvdfxgdando.com', 'e6c1750bfe50e4bf66d610fe4f0475282998047943fe1816013b0ea13f3273f1', 'Professor', '2024-05-21', '4480671966174', 'inativo'),
(27, 'srfsdsd', '969.688.030-89', 'murilomarquesdecaqwqwqwastro@gmail.com', '4e81950a7e48cf9ea6d5b129ac4cab3d93ea95eb9039b922847b9a750165b9d2', 'Coordenador', '1205-02-12', '2923991810341', 'inativo'),
(28, 'final', '403.744.510-79', 'teste@testansdfdo.com', '874527a9cb17367486d4762bd04816fe9681cd0fc9cbe10a0e265eb76118f7ee', 'Professor', '2024-06-02', '7247279000348', 'inativo');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `aulas`
--
ALTER TABLE `aulas`
  ADD PRIMARY KEY (`id_dataAula`),
  ADD KEY `id_turma` (`id_turma`);

--
-- Índices de tabela `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`id_curso`);

--
-- Índices de tabela `feriados`
--
ALTER TABLE `feriados`
  ADD PRIMARY KEY (`id_feriado`);

--
-- Índices de tabela `participantes`
--
ALTER TABLE `participantes`
  ADD PRIMARY KEY (`id_participante`),
  ADD KEY `id_turma` (`id_turma`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices de tabela `sala`
--
ALTER TABLE `sala`
  ADD PRIMARY KEY (`id_sala`);

--
-- Índices de tabela `turma`
--
ALTER TABLE `turma`
  ADD PRIMARY KEY (`id_turma`),
  ADD KEY `id_curso` (`id_curso`),
  ADD KEY `id_sala` (`id_sala`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `aulas`
--
ALTER TABLE `aulas`
  MODIFY `id_dataAula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de tabela `curso`
--
ALTER TABLE `curso`
  MODIFY `id_curso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `feriados`
--
ALTER TABLE `feriados`
  MODIFY `id_feriado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `participantes`
--
ALTER TABLE `participantes`
  MODIFY `id_participante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `sala`
--
ALTER TABLE `sala`
  MODIFY `id_sala` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `turma`
--
ALTER TABLE `turma`
  MODIFY `id_turma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `aulas`
--
ALTER TABLE `aulas`
  ADD CONSTRAINT `aulas_ibfk_1` FOREIGN KEY (`id_turma`) REFERENCES `turma` (`id_turma`);

--
-- Restrições para tabelas `participantes`
--
ALTER TABLE `participantes`
  ADD CONSTRAINT `participantes_ibfk_1` FOREIGN KEY (`id_turma`) REFERENCES `turma` (`id_turma`),
  ADD CONSTRAINT `participantes_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Restrições para tabelas `turma`
--
ALTER TABLE `turma`
  ADD CONSTRAINT `turma_ibfk_1` FOREIGN KEY (`id_curso`) REFERENCES `curso` (`id_curso`),
  ADD CONSTRAINT `turma_ibfk_2` FOREIGN KEY (`id_sala`) REFERENCES `sala` (`id_sala`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
