// src/index.ts
import express, { Request, Response } from 'express';
import client from './config/database'; 

const app = express();
const port = 3000;

app.get('/', async (req: Request, res: Response) => {
  try {
    const result = await client.query('SELECT NOW()');
    res.send(`Server time is: ${result.rows[0].now}`);
  } catch (err) {
    console.error('Error running query:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});