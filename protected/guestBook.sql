-- phpMyAdmin SQL Dump
-- version 4.0.8
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 01, 2013 at 02:08 PM
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
  `message` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `message`) VALUES
(1, 'ep,rflelkermfkler'),
(2, 'klwrmklermf');

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
(1, 'a:3:{s:5:"items";a:4:{i:0;a:3:{s:2:"id";i:1;s:3:"pos";a:2:{s:1:"x";i:0;s:1:"y";i:0;}s:4:"path";s:21:"global/img/image0.png";}i:1;a:3:{s:2:"id";i:2;s:3:"pos";a:2:{s:1:"x";i:1;s:1:"y";i:0;}s:4:"path";s:21:"global/img/image1.png";}i:2;a:3:{s:2:"id";i:3;s:3:"pos";a:2:{s:1:"x";i:0;s:1:"y";i:1;}s:4:"path";s:21:"global/img/image2.png";}i:3;a:3:{s:2:"id";i:4;s:3:"pos";a:2:{s:1:"x";i:1;s:1:"y";i:1;}s:4:"path";s:21:"global/img/image3.png";}}s:3:"row";i:2;s:3:"col";i:2;}');
