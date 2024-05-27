-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 27/05/2024 às 22:16
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
(10, 'sesi bgi', 10, '14-16', '[\'dfsgsd\', \'sfgsdfg\', \'sdfgsdfg\']', 'sfdgsdfg', NULL, 'ativo');

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
  `descricao` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `sala`
--

INSERT INTO `sala` (`id_sala`, `nome`, `capacidade`, `numero_sala`, `descricao`) VALUES
(1, 'sesi bgi', 20, NULL, NULL),
(2, 'sesi bgi5', 20, 5, 'dsafasdf'),
(3, 'sesi bgi56', 20, 5, 'dsafasdf');

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
(5, 10, 1, 'sesi BGI', '2024-06-05', '2024-06-20', '[1,2,3]', '00:00:04', 'ativo', NULL),
(6, 10, 1, '{nome}', '0000-00-00', '0000-00-00', '{lista_dias}', '00:00:05', 'ativo', '14:00'),
(7, 10, 1, 'sesi bgo', '2024-05-27', '2024-06-30', '[0, 5]', '00:00:20', 'ativo', '14:00'),
(8, 10, 1, 'sesi bgi5', '2024-05-29', '2024-06-30', '[6, 3]', '00:00:20', 'ativo', '14'),
(9, 10, 1, 'sesi bgi7', '2024-05-29', '2024-06-30', '[6, 3]', '00:00:20', 'ativo', '14'),
(10, 10, 1, 'sesi bgi1111', '2024-05-01', '2024-06-30', '[]', '00:00:20', 'ativo', '14'),
(11, 10, 1, 'sesi bgi1119', '2024-05-01', '2024-06-30', '[]', '00:00:20', 'ativo', '14'),
(12, 10, 1, 'sesi bgi11100', '2024-05-01', '2024-06-30', '[]', '00:00:20', 'ativo', '14'),
(13, 10, 1, 'sesi bgi66', '0000-00-00', '2024-06-30', '[2, 1]', '00:00:20', 'ativo', '14:00'),
(14, 10, 1, 'sesi bgi669', '0000-00-00', '2024-06-30', '[2, 1]', '00:00:20', 'ativo', '14:00'),
(15, 10, 1, 'sesi bgi777', '2024-05-29', '2024-06-30', '[]', '00:00:20', 'ativo', '14:00'),
(16, 10, 1, 'sesi bgi2222', '2024-05-20', '2024-06-30', '[]', '00:00:20', 'ativo', '14:00'),
(17, 10, 1, 'sesi bgi22222', '2024-05-20', '2024-06-30', '[]', '00:00:20', 'ativo', '14:00'),
(18, 10, 1, 'sesi bgi222222', '2024-05-20', '2024-06-30', '[]', '00:00:20', 'ativo', '14:00'),
(19, 10, 1, 'sesi bgi2222222', '2024-05-20', '2024-06-30', '[]', '00:00:20', 'ativo', '14:00'),
(20, 10, 1, 'sesi bgi22222222', '2024-05-20', '2024-06-30', '[]', '00:00:20', 'ativo', '14:00'),
(21, 10, 1, 'sesi bgi222222222', '2024-05-20', '2024-06-30', '[]', '00:00:20', 'ativo', '14:00'),
(22, 10, 1, 'sesi bgi2222222222', '2024-05-20', '2024-06-30', '[]', '00:00:20', 'ativo', '14:00'),
(23, 10, 1, 'sesi bgi22222222222', '2024-05-20', '2024-06-30', '[]', '00:00:20', 'ativo', '14:00');

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
  `salt` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nome`, `cpf`, `email`, `senha`, `cargo`, `data_nascimento`, `salt`) VALUES
(9, 'Felipe', '40168403846', 'basqueroto.felipe125@gmail.com', 'bd7662ef0b1f141ffe35bb788f9c86fcc70d16e88d01dd1773fefa91b2b27ba1', 'professor', '2024-05-20', '1492043935125'),
(10, 'Felipe', '221.002.770-57', 'basqueroto.felipe125@gmail.com', '63d86b0a684d7536a93933ff77e7c63568610914b3ae2f6a4f54d1175824adcb', 'aluno', '0000-00-00', '9925051378636'),
(11, 'Bia Garrocini', '05643660059', 'basqueroto.felipe125@gmail.com', '7daac9544893708e14415981b3cbdd8212c405bd932721b7d6325164b84417fa', 'aluno', '2024-05-13', '8437575176222'),
(12, 'Henri', '80019647018', 'basqueroto.felipe125@gmail.com', '5791b6853d71bf18bf879c3e05c5323dbed546b65cf4a859cd1b79b1ee2ae274', 'professor', '2024-05-21', '1438170222784');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`id_curso`);

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
-- AUTO_INCREMENT de tabela `curso`
--
ALTER TABLE `curso`
  MODIFY `id_curso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `participantes`
--
ALTER TABLE `participantes`
  MODIFY `id_participante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `sala`
--
ALTER TABLE `sala`
  MODIFY `id_sala` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `turma`
--
ALTER TABLE `turma`
  MODIFY `id_turma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restrições para tabelas despejadas
--

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
