import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL!'))
  .catch(err => console.error('Connection error', err.stack));

export default client;