-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 06 月 22 日 11:15
-- 服务器版本: 5.5.53
-- PHP 版本: 5.4.45

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `myshop15`
--

-- --------------------------------------------------------

--
-- 表的结构 `advert`
--

CREATE TABLE IF NOT EXISTS `advert` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(100) NOT NULL,
  `pos` tinyint(4) NOT NULL,
  `url` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `advert`
--

INSERT INTO `advert` (`id`, `img`, `pos`, `url`) VALUES
(5, '14519674771654552059.jpg', 1, 'http://www.baidu.com'),
(6, '14519674881925629022.jpg', 0, 'http://www.qq.com');

-- --------------------------------------------------------

--
-- 表的结构 `brand`
--

CREATE TABLE IF NOT EXISTS `brand` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `class_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- 转存表中的数据 `brand`
--

INSERT INTO `brand` (`id`, `name`, `class_id`) VALUES
(7, 'camel 骆驼', 1),
(8, '迈路士 ', 1),
(9, 'SCARPA', 3),
(10, 'Zamberlan', 3),
(11, '土拔鼠', 4);

-- --------------------------------------------------------

--
-- 表的结构 `class`
--

CREATE TABLE IF NOT EXISTS `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `class`
--

INSERT INTO `class` (`id`, `name`) VALUES
(1, '户外包'),
(3, '户外鞋'),
(4, '户外服装');

-- --------------------------------------------------------

--
-- 表的结构 `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `content` text,
  `shop_id` int(11) NOT NULL,
  `time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `comment`
--

INSERT INTO `comment` (`id`, `user_id`, `content`, `shop_id`, `time`) VALUES
(1, 14, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 12, 1452221961),
(2, 14, 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', 31, 1452221971),
(3, 14, 'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv', 12, 1452221984);

-- --------------------------------------------------------

--
-- 表的结构 `indent`
--

CREATE TABLE IF NOT EXISTS `indent` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `time` int(11) NOT NULL,
  `status_id` int(11) NOT NULL DEFAULT '1',
  `touch_id` int(11) NOT NULL,
  `shop_id` int(10) unsigned NOT NULL,
  `price` float unsigned NOT NULL,
  `num` int(10) unsigned NOT NULL,
  `confirm` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- 转存表中的数据 `indent`
--

INSERT INTO `indent` (`id`, `code`, `user_id`, `time`, `status_id`, `touch_id`, `shop_id`, `price`, `num`, `confirm`) VALUES
(1, '1452216457178734098', 14, 1452216457, 5, 3, 12, 100, 10, 1),
(2, '1452216457178734098', 14, 1452216457, 5, 3, 15, 400, 5, 1),
(3, '1452216457178734098', 14, 1452216457, 5, 3, 30, 400, 5, 1),
(6, '1452220713692073358', 14, 1452220713, 1, 6, 10, 400, 2, 1),
(7, '1452220786885334336', 14, 1452220786, 1, 3, 25, 400, 3, 1),
(8, '1498123132816199214', 10, 1498123132, 1, 7, 9, 300, 1, 0),
(9, '14981299611916301707', 10, 1498129961, 1, 7, 7, 1001, 1, 0);

-- --------------------------------------------------------

--
-- 表的结构 `shop`
--

CREATE TABLE IF NOT EXISTS `shop` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `img` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `stock` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `shelf` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=32 ;

--
-- 转存表中的数据 `shop`
--

INSERT INTO `shop` (`id`, `name`, `img`, `price`, `stock`, `brand_id`, `shelf`) VALUES
(7, '骆驼-1', '1498128549659793930.jpg', 1001, 99, 7, 1),
(8, '骆驼-2', '14981285811774863217.jpg', 200, 10, 7, 1),
(9, '骆驼-3', '14981286001365779704.jpg', 300, 9, 7, 1),
(10, '骆驼-4', '14981286511970120495.jpg', 400, 8, 7, 1),
(11, '骆驼-5', '14981286921311940226.jpg', 500, 10, 7, 1),
(12, '迈路士-1', '14981292981320277173.jpg', 100, 10, 8, 1),
(13, '迈路士-2', '1498129343206987243.jpg', 200, 10, 8, 1),
(14, '迈路士-3', '14981293642016036178.jpg', 300, 10, 8, 1),
(15, '迈路士-4', '14981293881936213671.jpg', 400, 5, 8, 1),
(16, '迈路士-5', '1498129408458369267.jpg', 500, 10, 8, 1),
(17, 'SCARPA-1', '14981288162141096957.jpg', 100, 10, 9, 1),
(18, 'SCARPA-2', '1498128844210327126.jpg', 200, 10, 9, 1),
(19, 'SCARPA-3', '14981288601812687309.jpg', 300, 7, 9, 1),
(20, 'SCARPA-4', '1498128899906604064.jpg', 400, 10, 9, 1),
(21, 'SCARPA-5', '14981289171357805095.jpg', 500, 10, 9, 1),
(22, 'Zamberlan-1', '1498129450501922725.jpg', 100, 10, 10, 1),
(23, 'Zamberlan-2', '1498129489782247857.jpg', 200, 10, 10, 1),
(24, 'Zamberlan-3', '1498129553682027574.jpg', 300, 10, 10, 1),
(25, 'Zamberlan-4', '14981296841379045531.jpg', 400, 7, 10, 1),
(26, 'Zamberlan-5', '1498129774491193485.jpg', 50, 10, 10, 1),
(27, '土拔鼠-1', '1498128957437677383.jpg', 100, 10, 11, 1),
(28, '土拔鼠-2', '149812897492094616.jpg', 200, 10, 11, 1),
(29, '土拔鼠-3', '14981289911757875343.jpg', 300, 10, 11, 1),
(30, '土拔鼠-4', '1498129010635097613.jpg', 400, 5, 11, 1),
(31, '土拔鼠-5', '14981290251706853878.jpg', 500, 7, 11, 1);

-- --------------------------------------------------------

--
-- 表的结构 `status`
--

CREATE TABLE IF NOT EXISTS `status` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `status`
--

INSERT INTO `status` (`id`, `name`) VALUES
(1, '未发货'),
(2, '已发货'),
(3, '未付款'),
(5, '已付款');

-- --------------------------------------------------------

--
-- 表的结构 `touch`
--

CREATE TABLE IF NOT EXISTS `touch` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `addr` varchar(100) NOT NULL,
  `tel` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `touch`
--

INSERT INTO `touch` (`id`, `name`, `addr`, `tel`, `email`, `user_id`) VALUES
(3, '金龙2', '月球2', '1102', 'jing@qq.com2', 14),
(5, '帅华2', '地球2', '1192', 'huq@qq.com2', 14),
(6, '文科', '110号', '110', 'wen@qq.com', 14),
(7, 'wangqing', '河北秦皇岛', '1122323', '123@qq.com', 10);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `isadmin` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `isadmin`) VALUES
(10, 'admin', '21232f297a57a5a743894a0e4a801fc3', 1),
(14, 'user1', '698d51a19d8a121ce581499d7b701668', 0),
(15, 'wang', 'e08392bb89dedb8ed6fb298f8e729c15', 0),
(16, '123', '202cb962ac59075b964b07152d234b70', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
