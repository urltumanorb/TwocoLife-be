# Host: 127.0.0.1  (Version 5.7.17-log)
# Date: 2019-11-05 14:37:32
# Generator: MySQL-Front 6.0  (Build 1.157)


#
# Structure for table "afs_type"
#

CREATE TABLE `afs_type` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `type_name` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

#
# Data for table "afs_type"
#

INSERT INTO `afs_type` VALUES (1,'Balance'),(2,'Income Statement'),(3,'ITC History'),(4,'ITC Tranacstions');

#
# Structure for table "total_balance"
#

CREATE TABLE `total_balance` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `end_time` datetime DEFAULT NULL,
  `total_usd` float(9,2) DEFAULT NULL,
  `usd_teacher_holding` float(9,2) DEFAULT NULL,
  `usd_teacher_withdrawing` float(9,2) DEFAULT NULL,
  `usd_student_holding` float(9,2) DEFAULT NULL,
  `usd_student_spending` float(9,2) DEFAULT NULL,
  `usd_giftcard_unuse` float(9,2) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

#
# Data for table "total_balance"
#

INSERT INTO `total_balance` VALUES (1,'2019-01-01 00:00:00',10000.00,4000.00,1000.00,1000.00,2000.00,2000.00),(2,'2018-06-08 00:00:00',20000.00,7000.00,2000.00,5000.00,4000.00,2000.00);
