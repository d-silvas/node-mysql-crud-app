CREATE DATABASE tasks;
USE tasks;
CREATE TABLE IF NOT EXISTS `tasks` (
    `id` int(5) NOT NULL AUTO_INCREMENT,
    `description` varchar(4096) NOT NULL,
    `area` varchar(255) NOT NULL,
    `priority` int(1) NOT NULL,
    `predecessors` varchar(2048) NULL,
    `date` date NULL,
    `periodicity` int(11) NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;