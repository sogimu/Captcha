-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Ноя 10 2013 г., 15:27
-- Версия сервера: 5.5.32
-- Версия PHP: 5.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `guestbook`
--
CREATE DATABASE IF NOT EXISTS `guestbook` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `guestbook`;

-- --------------------------------------------------------

--
-- Структура таблицы `messages`
--

CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `text` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Дамп данных таблицы `messages`
--

INSERT INTO `messages` (`id`, `text`) VALUES
(1, 'ep,rflelkermfkler'),
(2, 'klwrmklermf'),
(3, 'erkhgnkrn');

-- --------------------------------------------------------

--
-- Структура таблицы `tasks`
--

CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(4) NOT NULL AUTO_INCREMENT COMMENT 'task id',
  `taskIntoJSON` text COLLATE utf8_unicode_ci NOT NULL COMMENT 'serialized array',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`id`, `taskIntoJSON`) VALUES
(1, '{"items": [\r\n                {"id": 1, "pos": {"x": 0, "y": 0}, "path": "global/img/car/image0.png"},\r\n                {"id": 2, "pos": {"x": 1, "y": 0}, "path": "global/img/car/image1.png"},\r\n                {"id": 3, "pos": {"x": 0, "y": 1}, "path": "global/img/car/image2.png"},\r\n                {"id": 4, "pos": {"x": 1, "y": 1}, "path": "global/img/car/image3.png"}],\r\n                "row": 2,\r\n                "col": 2,\r\n            	"count": 4\r\n        }'),
(2, '{"items": [\r\n                {"id": 1, "pos": {"x": 0, "y": 0}, "path": "global/img/html5/html5_swap_part1x1.png"},\r\n                {"id": 2, "pos": {"x": 0, "y": 1}, "path": "global/img/html5/html5_swap_part1x2.png"},\r\n                {"id": 3, "pos": {"x": 0, "y": 2}, "path": "global/img/html5/html5_swap_part1x3.png"},\r\n                {"id": 4, "pos": {"x": 0, "y": 3}, "path": "global/img/html5/html5_swap_part1x4.png"},\r\n                {"id": 1, "pos": {"x": 1, "y": 0}, "path": "global/img/html5/html5_swap_part2x1.png"},\r\n                {"id": 2, "pos": {"x": 1, "y": 1}, "path": "global/img/html5/html5_swap_part2x2.png"},\r\n                {"id": 3, "pos": {"x": 1, "y": 2}, "path": "global/img/html5/html5_swap_part2x3.png"},\r\n                {"id": 4, "pos": {"x": 1, "y": 3}, "path": "global/img/html5/html5_swap_part2x4.png"},\r\n                {"id": 1, "pos": {"x": 2, "y": 0}, "path": "global/img/html5/html5_swap_part3x1.png"},\r\n                {"id": 2, "pos": {"x": 2, "y": 1}, "path": "global/img/html5/html5_swap_part3x2.png"},\r\n                {"id": 3, "pos": {"x": 2, "y": 2}, "path": "global/img/html5/html5_swap_part3x3.png"},\r\n                {"id": 4, "pos": {"x": 2, "y": 3}, "path": "global/img/html5/html5_swap_part4x4.png"},\r\n                {"id": 1, "pos": {"x": 3, "y": 0}, "path": "global/img/html5/html5_swap_part4x1.png"},\r\n                {"id": 2, "pos": {"x": 3, "y": 1}, "path": "global/img/html5/html5_swap_part4x2.png"},\r\n                {"id": 3, "pos": {"x": 3, "y": 2}, "path": "global/img/html5/html5_swap_part4x3.png"},\r\n                {"id": 4, "pos": {"x": 3, "y": 3}, "path": "global/img/html5/html5_swap_part4x4.png"}],\r\n                "row": 4,\r\n                "col": 4,\r\n            	"count": 16\r\n        }'),
(3, '{"items": [\r\n                {"id": 1, "pos": {"x": 0, "y": 0}, "path": "global/img/jake/jake_swap_part1x1.png"},\r\n                {"id": 2, "pos": {"x": 1, "y": 0}, "path": "global/img/jake/jake_swap_part1x2.png"},\r\n                {"id": 3, "pos": {"x": 0, "y": 1}, "path": "global/img/jake/jake_swap_part2x1.png"},\r\n                {"id": 4, "pos": {"x": 1, "y": 1}, "path": "global/img/jake/jake_swap_part2x2.png"}],\r\n                "row": 2,\r\n                "col": 2,\r\n            	"count": 4\r\n        }');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
