-- this first line is only used in the dev stage. you will want to remove it once your db is deployed.
DROP DATABASE IF EXISTS burger_timeDB;
CREATE database burger_timeDB;

USE burger_timeDB;
-- this is the table that will store burger name and if it has been eaten
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(144),
    is_eaten boolean default false,
    PRIMARY KEY(id)
);