-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2019 at 10:40 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `attendance`
--

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `class_id` int(5) NOT NULL,
  `subject_name` varchar(200) NOT NULL,
  `subject_code` varchar(10) NOT NULL,
  `course` varchar(100) DEFAULT NULL,
  `branch` varchar(100) DEFAULT NULL,
  `year` int(2) DEFAULT NULL,
  `sem` int(2) DEFAULT NULL,
  `fid` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`class_id`, `subject_name`, `subject_code`, `course`, `branch`, `year`, `sem`, `fid`) VALUES
(10, 'computer network', 'mcp12', 'B.Tech', 'Computer Science', 1, 1, 'cs5'),
(12, 'web technology', 'mcp14', 'B.Tech', 'Mechanical Engineering', 1, 2, 'cs5'),
(13, 'Electrical Engineering', 'mcp15', 'B.Tech', 'Mechanical Engineering', 1, 2, 'cs4'),
(14, 'Graphics', 'are1', 'B.Tech', 'Mechanical Engineering', 1, 2, 'cs2'),
(15, 'Programming using Java', 'are2', 'B.Tech', 'Mechanical Engineering', 1, 2, 'cs3'),
(16, 'Compiler', 'are3', 'B.Tech', 'Mechanical Engineering', 1, 2, 'cs6'),
(17, 'Software Engineering', 'are4', 'B.Tech', 'Mechanical Engineering', 1, 2, 'cs7'),
(18, 'Theorey of Computation', 'are5', 'B.Tech', 'Mechanical Engineering', 1, 2, 'cs8');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`class_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `class_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
