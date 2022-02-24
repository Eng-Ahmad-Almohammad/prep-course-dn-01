DROP TABLE IF EXISTS favRecipes;

CREATE TABLE IF NOT EXISTS favRecipes(
id SERIAL PRIMARY KEY,
title VARCHAR(255),
readyInMinutes INTEGER,
vegetarian BOOLEAN,
sourceUrl VARCHAR(500),
image VARCHAR(1000),
summary VARCHAR(10000),
instructions VARCHAR(10000)
);