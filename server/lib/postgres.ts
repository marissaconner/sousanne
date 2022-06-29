import { Pool } from 'pg';

const config = {
  max: 20,
  idleTimeoutMillis: 30000,
  user: 'postgres',
  host: 'localhost',
  database: 'sousanne',
  password: 'bacon',
  port: 5432,
};

async function createPool() {
  const pool = new Pool(config)
  return pool
}

export default createPool