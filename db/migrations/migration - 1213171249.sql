DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_digest TEXT NOT NULL
);

DROP TABLE IF EXISTS electionstonotify;
CREATE TABLE IF NOT EXISTS electionstonotify(
    id SERIAL PRIMARY KEY,
    userid INTEGER,
    statename VARCHAR,
    electiondate VARCHAR,
    runoffdate VARCHAR,
    senate VARCHAR,
    representatives VARCHAR
);

DROP TABLE IF EXISTS elections;
CREATE TABLE IF NOT EXISTS elections(
    id SERIAL PRIMARY KEY,
    statename VARCHAR,
    electiondate VARCHAR,
    runoffdate VARCHAR,
    senate VARCHAR,
    representatives VARCHAR
);