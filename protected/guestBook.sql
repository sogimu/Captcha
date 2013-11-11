-- phpMyAdmin SQL Dump
-- version 4.0.8
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 11, 2013 at 02:51 AM
-- Server version: 5.5.33a-MariaDB-log
-- PHP Version: 5.5.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `guestBook`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `text` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=10 ;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `text`) VALUES
(1, 'ep,rflelkermfkler'),
(2, 'klwrmklermf'),
(3, 'erkhgnkrn'),
(4, 'jake'),
(5, 'qwdaw'),
(6, 'qwdaw'),
(7, 'jefjhs'),
(8, 'jefjhs'),
(9, 'jefjhswhfek');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(4) NOT NULL AUTO_INCREMENT COMMENT 'task id',
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT 'name of task',
  `taskIntoJSON` text COLLATE utf8_unicode_ci NOT NULL COMMENT 'serialized array',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `name`, `taskIntoJSON`) VALUES
(1, 'car', '{"items": [\r\n                {"id": 1, "pos": {"x": 0, "y": 0}, "path": "global/img/car/image0.png"},\r\n                {"id": 2, "pos": {"x": 1, "y": 0}, "path": "global/img/car/image1.png"},\r\n                {"id": 3, "pos": {"x": 0, "y": 1}, "path": "global/img/car/image2.png"},\r\n                {"id": 4, "pos": {"x": 1, "y": 1}, "path": "global/img/car/image3.png"}],\r\n                "row": 2,\r\n                "col": 2,\r\n            	"count": 4\r\n        }'),
(3, 'jake', '{"items": [\r\n                {"id": 1, "pos": {"x": 0, "y": 0}, "path": "global/img/jake/jake_swap_part1x1.png"},\r\n                {"id": 2, "pos": {"x": 1, "y": 0}, "path": "global/img/jake/jake_swap_part1x2.png"},\r\n                {"id": 3, "pos": {"x": 0, "y": 1}, "path": "global/img/jake/jake_swap_part2x1.png"},\r\n                {"id": 4, "pos": {"x": 1, "y": 1}, "path": "global/img/jake/jake_swap_part2x2.png"}],\r\n                "row": 2,\r\n                "col": 2,\r\n            	"count": 4\r\n        }'),
(4, 'home', '{"items": [\r\n                {"id": 1, "pos": {"x": 0, "y": 0}, "path": "global/img/home/home_swap_part1x1.png"},\r\n                {"id": 2, "pos": {"x": 0, "y": 1}, "path": "global/img/home/home_swap_part1x2.png"},\r\n                {"id": 3, "pos": {"x": 0, "y": 2}, "path": "global/img/home/home_swap_part1x3.png"},\r\n                {"id": 4, "pos": {"x": 1, "y": 0}, "path": "global/img/home/home_swap_part2x1.png"},\r\n                {"id": 1, "pos": {"x": 1, "y": 1}, "path": "global/img/home/home_swap_part2x2.png"},\r\n                {"id": 2, "pos": {"x": 1, "y": 2}, "path": "global/img/home/home_swap_part2x3.png"},\r\n                {"id": 3, "pos": {"x": 2, "y": 0}, "path": "global/img/home/home_swap_part3x1.png"},\r\n                {"id": 4, "pos": {"x": 2, "y": 1}, "path": "global/img/home/home_swap_part3x2.png"},\r\n                {"id": 4, "pos": {"x": 2, "y": 2}, "path": "global/img/home/home_swap_part3x3.png"}],\r\n                "row": 3,\r\n                "col": 3,\r\n            	"count": 9\r\n        }'),
(5, 'pingvin', '{"items": [\r\n                {"id": 1, "pos": {"x": 0, "y": 0}, "path": "global/img/pingvin/pingvin_swap_part1x1.png"},\r\n                {"id": 2, "pos": {"x": 0, "y": 1}, "path": "global/img/pingvin/pingvin_swap_part1x2.png"},\r\n                {"id": 3, "pos": {"x": 0, "y": 2}, "path": "global/img/pingvin/pingvin_swap_part1x3.png"},\r\n                {"id": 4, "pos": {"x": 1, "y": 0}, "path": "global/img/pingvin/pingvin_swap_part2x1.png"},\r\n                {"id": 1, "pos": {"x": 1, "y": 1}, "path": "global/img/pingvin/pingvin_swap_part2x2.png"},\r\n                {"id": 2, "pos": {"x": 1, "y": 2}, "path": "global/img/pingvin/pingvin_swap_part2x3.png"},\r\n                {"id": 3, "pos": {"x": 2, "y": 0}, "path": "global/img/pingvin/pingvin_swap_part3x1.png"},\r\n                {"id": 4, "pos": {"x": 2, "y": 1}, "path": "global/img/pingvin/pingvin_swap_part3x2.png"},\r\n                {"id": 4, "pos": {"x": 2, "y": 2}, "path": "global/img/pingvin/pingvin_swap_part3x3.png"}],\r\n                "row": 3,\r\n                "col": 3,\r\n            	"count": 9\r\n        }');
