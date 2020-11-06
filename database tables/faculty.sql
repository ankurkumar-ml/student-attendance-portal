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
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `f_id` varchar(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile` bigint(10) NOT NULL,
  `password` varchar(50) NOT NULL,
  `date` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`f_id`, `name`, `email`, `mobile`, `password`, `date`) VALUES
('cs2', 'shubham', 'shubham@gmail.com', 7645456354, 'Ank@', '2019-08-29T19:41:02.499Z'),
('cs3', 'rajesh', 'shubham@gmail.com', 7645456354, 'Ank@', '2019-08-29T19:41:13.432Z'),
('cs4', 'ankit', 'shubham@gmail.com', 7645456354, 'Ank@', '2019-08-29T19:41:22.586Z'),
('cs5', 'ankit', 'shubham@gmail.com', 7645456354, 'Ank@', '2019-08-29T19:41:41.872Z'),
('cs6', 'raj singh', 'rajsingh78@gmail.com', 9090909090, 'Ank@', '2019-08-29T19:41:54.416Z'),
('cs7', 'raj', 'shubham@gmail.com', 7645456354, 'Ank@', '2019-08-29T19:42:06.993Z'),
('cs8', 'avi', 'shubham@gmail.com', 7645456354, 'Ank@', '2019-08-29T19:42:16.299Z');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`f_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
