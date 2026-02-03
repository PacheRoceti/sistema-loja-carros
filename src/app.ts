import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  return res.json({ status: 'API rodando' });
});

export { app };

import { prisma } from './config/prisma';

app.get('/test-db', async (req, res) => {
  const cars = await prisma.cars.findMany();
  return res.json(cars);
});
