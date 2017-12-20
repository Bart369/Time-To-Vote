DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  email VARCHAR(255)
);

DROP TABLE IF EXISTS shareelections;
CREATE TABLE IF NOT EXISTS shareelections(
    id SERIAL PRIMARY KEY,
    userid INTEGER,
    statename VARCHAR,
    electiondate VARCHAR,
    runoffdate DATE,
    senate VARCHAR,
    representatives VARCHAR,
    notificationdate DATE,
    electionDateByDate DATE
);

DROP TABLE IF EXISTS elections;
CREATE TABLE IF NOT EXISTS elections(
    id SERIAL PRIMARY KEY,
    statename VARCHAR,
    electiondate VARCHAR,
    runoffdate DATE,
    senate VARCHAR,
    representatives VARCHAR,
    electionDateByDate DATE
);