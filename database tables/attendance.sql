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
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `rollno` varchar(30) NOT NULL,
  `attandance_state` varchar(10) NOT NULL,
  `date` varchar(30) NOT NULL,
  `class_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`rollno`, `attandance_state`, `date`, `class_id`) VALUES
('mrt17ugbcs001', 'present', '2019-09-04T18:30:00.000Z', 12),
('mrt17ugbcs002', 'present', '2019-09-04T18:30:00.000Z', 12),
('mrt17ugbcs003', 'present', '2019-09-04T18:30:00.000Z', 12),
('mrt17ugbcs004', 'present', '2019-09-04T18:30:00.000Z', 12),
('mrt17ugbcs005', 'present', '2019-09-04T18:30:00.000Z', 12),
('mrt17ugbcs006', 'absent', '2019-09-04T18:30:00.000Z', 12),
('mrt17ugbcs007', 'absent', '2019-09-04T18:30:00.000Z', 12),
('mrt17ugbcs001', 'present', '2019-09-05T18:30:00.000Z', 12),
('mrt17ugbcs002', 'absent', '2019-09-05T18:30:00.000Z', 12),
('mrt17ugbcs003', 'present', '2019-09-05T18:30:00.000Z', 12),
('mrt17ugbcs004', 'present', '2019-09-05T18:30:00.000Z', 12),
('mrt17ugbcs005', 'present', '2019-09-05T18:30:00.000Z', 12),
('mrt17ugbcs006', 'absent', '2019-09-05T18:30:00.000Z', 12),
('mrt17ugbcs007', 'present', '2019-09-05T18:30:00.000Z', 12),
('mrt17ugbcs001', 'present', '2019-09-10T18:30:00.000Z', 0),
('mrt17ugbcs002', 'present', '2019-09-10T18:30:00.000Z', 0),
('mrt17ugbcs003', 'absent', '2019-09-10T18:30:00.000Z', 0),
('mrt17ugbcs004', 'absent', '2019-09-10T18:30:00.000Z', 0),
('mrt17ugbcs005', 'absent', '2019-09-10T18:30:00.000Z', 0),
('mrt17ugbcs006', 'absent', '2019-09-10T18:30:00.000Z', 0),
('mrt17ugbcs007', 'present', '2019-09-10T18:30:00.000Z', 0),
('mrt17ugbcs001', 'present', '2019-09-12T18:30:00.000Z', 0),
('mrt17ugbcs002', 'present', '2019-09-12T18:30:00.000Z', 0),
('mrt17ugbcs003', 'present', '2019-09-12T18:30:00.000Z', 0),
('mrt17ugbcs004', 'absent', '2019-09-12T18:30:00.000Z', 0),
('mrt17ugbcs005', 'absent', '2019-09-12T18:30:00.000Z', 0),
('mrt17ugbcs006', 'absent', '2019-09-12T18:30:00.000Z', 0),
('mrt17ugbcs007', 'absent', '2019-09-12T18:30:00.000Z', 0),
('mrt17ugbcs001', 'present', '2019-09-19T18:30:00.000Z', 12),
('mrt17ugbcs002', 'present', '2019-09-19T18:30:00.000Z', 12),
('mrt17ugbcs003', 'present', '2019-09-19T18:30:00.000Z', 12),
('mrt17ugbcs004', 'present', '2019-09-19T18:30:00.000Z', 12),
('mrt17ugbcs005', 'absent', '2019-09-19T18:30:00.000Z', 12),
('mrt17ugbcs006', 'absent', '2019-09-19T18:30:00.000Z', 12),
('mrt17ugbcs007', 'absent', '2019-09-19T18:30:00.000Z', 12),
('mrt17ugbcs001', 'present', '2019-09-24T18:30:00.000Z', 12),
('mrt17ugbcs002', 'present', '2019-09-24T18:30:00.000Z', 12),
('mrt17ugbcs003', 'present', '2019-09-24T18:30:00.000Z', 12),
('mrt17ugbcs004', 'absent', '2019-09-24T18:30:00.000Z', 12),
('mrt17ugbcs005', 'absent', '2019-09-24T18:30:00.000Z', 12),
('mrt17ugbcs006', 'absent', '2019-09-24T18:30:00.000Z', 12),
('mrt17ugbcs007', 'present', '2019-09-24T18:30:00.000Z', 12),
('mrt17ugbcs001', 'present', '2019-08-01T18:30:00.000Z', 14),
('mrt17ugbcs002', 'present', '2019-08-01T18:30:00.000Z', 14),
('mrt17ugbcs003', 'absent', '2019-08-01T18:30:00.000Z', 14),
('mrt17ugbcs004', 'absent', '2019-08-01T18:30:00.000Z', 14),
('mrt17ugbcs006', 'present', '2019-08-01T18:30:00.000Z', 14),
('mrt17ugbcs007', 'present', '2019-08-01T18:30:00.000Z', 14),
('mrt17ugbcs001', 'present', '2019-08-02T18:30:00.000Z', 14),
('mrt17ugbcs002', 'present', '2019-08-02T18:30:00.000Z', 14),
('mrt17ugbcs003', 'present', '2019-08-02T18:30:00.000Z', 14),
('mrt17ugbcs004', 'present', '2019-08-02T18:30:00.000Z', 14),
('mrt17ugbcs006', 'absent', '2019-08-02T18:30:00.000Z', 14),
('mrt17ugbcs007', 'absent', '2019-08-02T18:30:00.000Z', 14),
('mrt17ugbcs001', 'present', '2019-08-04T18:30:00.000Z', 14),
('mrt17ugbcs002', 'present', '2019-08-04T18:30:00.000Z', 14),
('mrt17ugbcs003', 'present', '2019-08-04T18:30:00.000Z', 14),
('mrt17ugbcs004', 'present', '2019-08-04T18:30:00.000Z', 14),
('mrt17ugbcs006', 'present', '2019-08-04T18:30:00.000Z', 14),
('mrt17ugbcs007', 'present', '2019-08-04T18:30:00.000Z', 14),
('mrt17ugbcs001', 'absent', '2019-09-06T18:30:00.000Z', 14),
('mrt17ugbcs002', 'absent', '2019-09-06T18:30:00.000Z', 14),
('mrt17ugbcs003', 'present', '2019-09-06T18:30:00.000Z', 14),
('mrt17ugbcs004', 'present', '2019-09-06T18:30:00.000Z', 14),
('mrt17ugbcs006', 'present', '2019-09-06T18:30:00.000Z', 14),
('mrt17ugbcs007', 'present', '2019-09-06T18:30:00.000Z', 14),
('mrt17ugbcs001', 'present', '2019-08-08T18:30:00.000Z', 14),
('mrt17ugbcs002', 'absent', '2019-08-08T18:30:00.000Z', 14),
('mrt17ugbcs003', 'present', '2019-08-08T18:30:00.000Z', 14),
('mrt17ugbcs004', 'present', '2019-08-08T18:30:00.000Z', 14),
('mrt17ugbcs006', 'present', '2019-08-08T18:30:00.000Z', 14),
('mrt17ugbcs007', 'present', '2019-08-08T18:30:00.000Z', 14),
('mrt17ugbcs001', 'present', '2019-07-31T18:30:00.000Z', 15),
('mrt17ugbcs002', 'present', '2019-07-31T18:30:00.000Z', 15),
('mrt17ugbcs003', 'present', '2019-07-31T18:30:00.000Z', 15),
('mrt17ugbcs004', 'present', '2019-07-31T18:30:00.000Z', 15),
('mrt17ugbcs006', 'present', '2019-07-31T18:30:00.000Z', 15),
('mrt17ugbcs007', 'present', '2019-07-31T18:30:00.000Z', 15),
('mrt17ugbcs001', 'absent', '2019-08-01T18:30:00.000Z', 15),
('mrt17ugbcs002', 'absent', '2019-08-01T18:30:00.000Z', 15),
('mrt17ugbcs003', 'absent', '2019-08-01T18:30:00.000Z', 15),
('mrt17ugbcs004', 'absent', '2019-08-01T18:30:00.000Z', 15),
('mrt17ugbcs006', 'absent', '2019-08-01T18:30:00.000Z', 15),
('mrt17ugbcs007', 'present', '2019-08-01T18:30:00.000Z', 15),
('mrt17ugbcs001', 'present', '2019-08-02T18:30:00.000Z', 15),
('mrt17ugbcs002', 'present', '2019-08-02T18:30:00.000Z', 15),
('mrt17ugbcs003', 'present', '2019-08-02T18:30:00.000Z', 15),
('mrt17ugbcs006', 'present', '2019-08-02T18:30:00.000Z', 15),
('mrt17ugbcs007', 'present', '2019-08-02T18:30:00.000Z', 15),
('mrt17ugbcs004', 'present', '2019-08-02T18:30:00.000Z', 15),
('mrt17ugbcs002', 'absent', '2019-08-03T18:30:00.000Z', 15),
('mrt17ugbcs001', 'present', '2019-08-03T18:30:00.000Z', 15),
('mrt17ugbcs003', 'present', '2019-08-03T18:30:00.000Z', 15),
('mrt17ugbcs004', 'present', '2019-08-03T18:30:00.000Z', 15),
('mrt17ugbcs006', 'absent', '2019-08-03T18:30:00.000Z', 15),
('mrt17ugbcs007', 'present', '2019-08-03T18:30:00.000Z', 15),
('mrt17ugbcs001', 'absent', '2019-08-08T18:30:00.000Z', 15),
('mrt17ugbcs003', 'present', '2019-08-08T18:30:00.000Z', 15),
('mrt17ugbcs002', 'present', '2019-08-08T18:30:00.000Z', 15),
('mrt17ugbcs004', 'present', '2019-08-08T18:30:00.000Z', 15),
('mrt17ugbcs006', 'absent', '2019-08-08T18:30:00.000Z', 15),
('mrt17ugbcs007', 'present', '2019-08-08T18:30:00.000Z', 15),
('mrt17ugbcs001', 'present', '2019-07-31T18:30:00.000Z', 16),
('mrt17ugbcs002', 'present', '2019-07-31T18:30:00.000Z', 16),
('mrt17ugbcs003', 'absent', '2019-07-31T18:30:00.000Z', 16),
('mrt17ugbcs004', 'present', '2019-07-31T18:30:00.000Z', 16),
('mrt17ugbcs006', 'present', '2019-07-31T18:30:00.000Z', 16),
('mrt17ugbcs007', 'present', '2019-07-31T18:30:00.000Z', 16),
('mrt17ugbcs002', 'present', '2019-08-01T18:30:00.000Z', 16),
('mrt17ugbcs003', 'present', '2019-08-01T18:30:00.000Z', 16),
('mrt17ugbcs004', 'present', '2019-08-01T18:30:00.000Z', 16),
('mrt17ugbcs006', 'present', '2019-08-01T18:30:00.000Z', 16),
('mrt17ugbcs007', 'present', '2019-08-01T18:30:00.000Z', 16),
('mrt17ugbcs001', 'absent', '2019-08-01T18:30:00.000Z', 16),
('mrt17ugbcs001', 'present', '2019-08-08T18:30:00.000Z', 16),
('mrt17ugbcs002', 'present', '2019-08-08T18:30:00.000Z', 16),
('mrt17ugbcs003', 'present', '2019-08-08T18:30:00.000Z', 16),
('mrt17ugbcs004', 'present', '2019-08-08T18:30:00.000Z', 16),
('mrt17ugbcs007', 'absent', '2019-08-08T18:30:00.000Z', 16),
('mrt17ugbcs006', 'present', '2019-08-08T18:30:00.000Z', 16),
('mrt17ugbcs001', 'present', '2019-07-31T18:30:00.000Z', 17),
('mrt17ugbcs002', 'present', '2019-07-31T18:30:00.000Z', 17),
('mrt17ugbcs003', 'present', '2019-07-31T18:30:00.000Z', 17),
('mrt17ugbcs004', 'present', '2019-07-31T18:30:00.000Z', 17),
('mrt17ugbcs006', 'present', '2019-07-31T18:30:00.000Z', 17),
('mrt17ugbcs007', 'present', '2019-07-31T18:30:00.000Z', 17),
('mrt17ugbcs001', 'present', '2019-08-01T18:30:00.000Z', 17),
('mrt17ugbcs002', 'present', '2019-08-01T18:30:00.000Z', 17),
('mrt17ugbcs004', 'absent', '2019-08-01T18:30:00.000Z', 17),
('mrt17ugbcs003', 'absent', '2019-08-01T18:30:00.000Z', 17),
('mrt17ugbcs007', 'present', '2019-08-01T18:30:00.000Z', 17),
('mrt17ugbcs006', 'present', '2019-08-01T18:30:00.000Z', 17),
('mrt17ugbcs001', 'absent', '2019-08-09T18:30:00.000Z', 17),
('mrt17ugbcs002', 'absent', '2019-08-09T18:30:00.000Z', 17),
('mrt17ugbcs003', 'absent', '2019-08-09T18:30:00.000Z', 17),
('mrt17ugbcs004', 'present', '2019-08-09T18:30:00.000Z', 17),
('mrt17ugbcs006', 'present', '2019-08-09T18:30:00.000Z', 17),
('mrt17ugbcs007', 'present', '2019-08-09T18:30:00.000Z', 17),
('mrt17ugbcs001', 'present', '2019-08-09T18:30:00.000Z', 17),
('mrt17ugbcs001', 'present', '2019-08-06T18:30:00.000Z', 18),
('mrt17ugbcs002', 'present', '2019-08-06T18:30:00.000Z', 18),
('mrt17ugbcs003', 'present', '2019-08-06T18:30:00.000Z', 18),
('mrt17ugbcs004', 'present', '2019-08-06T18:30:00.000Z', 18),
('mrt17ugbcs006', 'present', '2019-08-06T18:30:00.000Z', 18),
('mrt17ugbcs007', 'present', '2019-08-06T18:30:00.000Z', 18),
('mrt17ugbcs001', 'present', '2019-08-02T18:30:00.000Z', 18),
('mrt17ugbcs002', 'present', '2019-08-02T18:30:00.000Z', 18),
('mrt17ugbcs003', 'absent', '2019-08-02T18:30:00.000Z', 18),
('mrt17ugbcs006', 'absent', '2019-08-02T18:30:00.000Z', 18),
('mrt17ugbcs006', 'present', '2019-08-02T18:30:00.000Z', 18),
('mrt17ugbcs007', 'present', '2019-08-02T18:30:00.000Z', 18),
('mrt17ugbcs004', 'present', '2019-08-02T18:30:00.000Z', 18),
('mrt17ugbcs001', 'present', '2019-08-07T18:30:00.000Z', 18),
('mrt17ugbcs002', 'present', '2019-08-07T18:30:00.000Z', 18),
('mrt17ugbcs003', 'present', '2019-08-07T18:30:00.000Z', 18),
('mrt17ugbcs004', 'absent', '2019-08-07T18:30:00.000Z', 18),
('mrt17ugbcs006', 'present', '2019-08-07T18:30:00.000Z', 18),
('mrt17ugbcs007', 'present', '2019-08-07T18:30:00.000Z', 18);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
