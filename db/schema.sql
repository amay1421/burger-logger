DROP DATABASE if exists burgers;

CREATE DATABASE burgers;
USE burgers;

CREATE TABLE burgers (
    id INT NOT NULL auto_increment,
    devoured BOOLEAN Default false,
    burger_name VARCHAR (40) NOT NULL,
    PRIMARY KEY (id)
);