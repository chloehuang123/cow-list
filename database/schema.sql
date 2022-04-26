DROP DATABASE IF EXISTS cowlist;
CREATE DATABASE cowlist;

USE cowlist;

DROP TABLE IF EXISTS cows;

CREATE TABLE cows (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(60) UNIQUE,
  description VARCHAR(2000)
);

INSERT INTO cows (name, description) VALUES ('COCONUT', '3');