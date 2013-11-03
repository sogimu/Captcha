-- phpMyAdmin SQL Dump
-- version 4.0.8
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 03, 2013 at 01:45 AM
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `text`) VALUES
(1, 'ep,rflelkermfkler'),
(2, 'klwrmklermf'),
(3, 'erkhgnkrn');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(4) NOT NULL AUTO_INCREMENT COMMENT 'task id',
  `taskIntoJSON` text COLLATE utf8_unicode_ci NOT NULL COMMENT 'serialized array',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `taskIntoJSON`) VALUES
(1, '{"items": [\r\n                {"id": 1, "pos": {"x": 0, "y": 0}, "path": "global/img/image0.png"},\r\n                {"id": 2, "pos": {"x": 1, "y": 0}, "path": "global/img/image1.png"},\r\n                {"id": 3, "pos": {"x": 0, "y": 1}, "path": "global/img/image2.png"},\r\n                {"id": 4, "pos": {"x": 1, "y": 1}, "path": "global/img/image3.png"}],\r\n                "row": 2,\r\n                "col": 2,\r\n            	"count": 4\r\n        }');
