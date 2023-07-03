CREATE DATABASE taskdb;

CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE NOT NULL, 
    description VARCHAR(255),
    isComplete BOOLEAN NOT NULL
);


-- CREATE TABLE 