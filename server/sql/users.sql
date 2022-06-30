CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    session_hash TEXT DEFAULT null,
    created_at TIMESTAMP DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS shoppinglists (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    user_id INT REFERENCES users(id)
);
CREATE TABLE IF NOT EXISTS shoppinglistitems (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    count INT default 1,
    obtained BOOLEAN default FALSE,
    list_id INT REFERENCES shoppinglists(id),
);