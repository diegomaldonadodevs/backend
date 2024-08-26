-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 25-08-2024 a las 14:07:31
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `misogi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE IF NOT EXISTS `eventos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `fecha` varchar(250) NOT NULL,
  `hora` varchar(250) NOT NULL,
  `lugar` varchar(250) NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=18 ;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id`, `titulo`, `subtitulo`, `fecha`, `hora`, `lugar`, `img_id`, `cuerpo`) VALUES
(12, 'Jornada Aikido Familiar', 'Sensei Daniel Fernandez - 5° Dan Aikido', 'Sábado 24 de Febrero 2024', '10.00', 'Anisacate - Córdoba', 'l7fbv6eoi1t1hytehxju', 'Jornada familiar con prácticas de Aikido al aire libre.\r\nActividades grupales.\r\nPileta libre.\r\nAlmuerzo de camaradería.\r\nAbierto a todas las escuelas.\r\nPara practicantes de todas las edades y sus grupos familiares.\r\nLos esperamos!'),
(13, 'Clase Especial Intensiva "JO y BOKKEN"', 'Sensei Daniel Fernandez - 5° Dan Aikido', 'Sábado 16 de Marzo 2024', '15 a 18', 'Misogi Aikikai Argentina - Dojo Córdoba', 'ifzafosash8ijors9f9i', 'Los invitamos a participar de la 1° Clase Anual Intensiva de uso de armas "JO y BOKKEN"\r\nEvento abierto a todas las escuelas.\r\nTodos los niveles: principiante, intermedio y avanzado.\r\nClase válida como requisito para exámenes.\r\nGratuita para los alumnos con cuota al día.\r\nLos esperamos!'),
(14, 'Seminario Internacional de Aikido', 'Shihan Ricardo Corbal - 7° Dan Aikido', '11 y 12 de Mayo 2024 ', '10.00', 'A.S.A. Casa Central (C.A.B.A.)', 'bns89xptmxrvjrjncvnu', 'Seminario Internacional a cargo de Shihan RICARDO CORBAL 7° Dan, con la participación de Sensei ALEJANDRO DOMINGUEZ 6° Dan (Puerto Rico) y Sensei MIGUELANGEL BECERRA 4° Dan (España).\r\nDos días de prácticas intensivas.\r\nEvento que reúne a practicantes de todo el país.'),
(15, 'Clase Especial Intensiva Ukemis', 'Sensei Daniel Fernandez - 5° Dan Aikido', 'Sábado 8 de Julio 2024', '15 a 18', 'Misogi Aikikai Argentina - Dojo Córdoba', 's2orukkx6sbdsm82emyg', 'Práctica intensiva de "UKEMIS" para todos los niveles.\r\nInicial, intermedio y avanzado.\r\nAbierto para todas las escuelas.\r\nGratuito para los alumnos con cuota al día.\r\nLos esperamos!'),
(16, 'Exámenes de Niños', 'Sensei Eugenia Cuervo - 2° Dan Aikido', 'Sábado 6 de Julio 2024', '15.00', 'Misogi Aikikai Argentina - Dojo Córdoba', 'sqlblzwnsh4hm0pwovdw', 'Los invitamos a acompañar a los mas pequeños del Dojo en este momento tan importante para su desarrollo!\r\nExámenes de Kyu!\r\nLos esperamos!'),
(17, 'Seminario Internacional de Aikido', 'VU HA SENSEI - 6° Dan Aikido - 5° Dan Iaido', '11, 12 y 13 Octubre 2024', '10.00', 'Club 9 de Julio - Caseros - Bs. As.', 'g87rpgadv5ec84lmtdch', 'Seminario Internacional a cargo de Sensei VU HA 6° Dan (Japón)\r\nClases de Iaido y Aikido.\r\nTres días a pura práctica con practicantes de todo el país!\r\nImperdible!');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'diego', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'patricia', '6562c5c1f33db6e05a082a88cddab5ea'),
(3, 'joan', '46d045ff5190f6ea93739da6c0aa19bc'),
(4, 'valen', '81dc9bdb52d04dc20036dbd8313ed055'),
(5, 'pepe', '827ccb0eea8a706c4c34a16891f84e7b');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
