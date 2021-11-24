-- Creating local database with following psql commands.  If using ElephantSQL, use:
-- psql -d <url from elephantSQL> -f todo_postgres_create.sql
-- from terminal with pwd in project root folder
-- \l to see list of current databases
-- CREATE DATABASE task_db;

-- After creating database with above command,
-- \c task_db
--  to connect to task_db
-- \dt
-- to see tables in current database

-- creating table & schema for task data
CREATE TABLE public.tasks (
  TaskID SERIAL PRIMARY KEY,
  taskName VARCHAR NOT NULL,
  completed BOOL NOT NULL,
  rewards VARCHAR,
  email VARCHAR NOT NULL,
  FOREIGN KEY (email)
  REFERENCES users(email)
);

CREATE TABLE public.users (
  email  VARCHAR NOT NULL PRIMARY KEY,
  username VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);
-- creating table & schema for rewards data
-- CREATE TABLE rewards (
--   "rewards_id" SERIAL NOT NULL,
--   "name" VARCHAR NOT NULL,
--   "done" BOOL NOT NULL,
--   "value" INTEGER
-- );


-- \dt 
-- again to confirm tables have been created