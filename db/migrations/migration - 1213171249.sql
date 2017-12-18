DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  email VARCHAR(255)
);

DROP TABLE IF EXISTS shareElections;
CREATE TABLE IF NOT EXISTS shareElections(
    id SERIAL PRIMARY KEY,
    userid INTEGER,
    statename VARCHAR,
    electiondate DATE,
    runoffdate DATE,
    senate VARCHAR,
    representatives VARCHAR,
    notificationdate DATE
);

DROP TABLE IF EXISTS elections;
CREATE TABLE IF NOT EXISTS elections(
    id SERIAL PRIMARY KEY,
    statename VARCHAR,
    electiondate DATE,
    runoffdate DATE,
    senate VARCHAR,
    representatives VARCHAR
);