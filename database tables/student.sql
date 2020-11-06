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
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `name` varchar(30) NOT NULL,
  `rollno` varchar(20) NOT NULL,
  `course` varchar(30) NOT NULL,
  `branch` varchar(100) NOT NULL,
  `year` int(2) NOT NULL,
  `sem` int(2) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(30) NOT NULL,
  `date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`name`, `rollno`, `course`, `branch`, `year`, `sem`, `email`, `password`, `date`) VALUES
('ankur', 'mrt17ugbcs001', 'B.Tech', 'Mechanical Engineering', 1, 2, 'ankur@gmail.com', 'Ankur@', '2019-08-29T19:37:40.813Z'),
('rajveer', 'mrt17ugbcs002', 'B.Tech', 'Mechanical Engineering', 1, 2, 'rajveer@gmail.com', 'Ankur@', '2019-08-29T19:38:25.676Z'),
('raju', 'mrt17ugbcs003', 'B.Tech', 'Mechanical Engineering', 1, 2, 'rajveu@gmail.com', 'Ankur@', '2019-08-29T19:38:41.796Z'),
('ramu', 'mrt17ugbcs004', 'B.Tech', 'Mechanical Engineering', 1, 2, 'rajveu@gmail.com', 'Ankur@', '2019-08-29T19:38:56.254Z'),
('shyam singh', 'mrt17ugbcs005', 'B.Tech', 'Computer Science', 2, 1, 'shyamsingh67@gmail.com', 'Ankur@', '2019-08-29T19:39:05.470Z'),
('ra', 'mrt17ugbcs006', 'B.Tech', 'Mechanical Engineering', 1, 2, 'rajveu@gmail.com', 'Ankur@', '2019-08-29T19:39:15.885Z'),
('rav', 'mrt17ugbcs007', 'B.Tech', 'Mechanical Engineering', 1, 2, 'rajveu@gmail.com', 'Ankur@', '2019-08-29T19:39:27.337Z'),
('ravi shankar', 'mrt18ugbcs001', 'B.Tech', 'Computer Science', 1, 1, 'ravishankar@gmail.com', 'Ravi@123', '2019-09-08T20:13:35.470Z');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`rollno`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
