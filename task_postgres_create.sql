-- If using ElephantSQL, use:
-- psql -d <url from elephantSQL> -f todo_postgres_create.sql
-- from terminal with pwd in project root folder

-- After creating database with above command,
-- run '\c' task_db to connect to the db
-- run \dt
-- to see tables in current database

-- SQL commands to run to populate database with necessary tables

CREATE TABLE public.users (
  email  VARCHAR NOT NULL PRIMARY KEY,
  username VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);

CREATE TABLE public.tasks (
  TaskID SERIAL PRIMARY KEY,
  taskName VARCHAR NOT NULL,
  completed BOOL NOT NULL,
  rewards VARCHAR,
  email VARCHAR NOT NULL,
  FOREIGN KEY (email)
  REFERENCES users(email)
);


-- creating table & schema for rewards data
CREATE TABLE rewards (
  "rewards_id" SERIAL NOT NULL,
  "name" VARCHAR NOT NULL,
  "done" BOOL NOT NULL,
  "value" INTEGER
);


-- \dt 
-- again to confirm tables have been created