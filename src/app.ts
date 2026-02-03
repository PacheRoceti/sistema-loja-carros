import express from 'express';
import cors from 'cors';

import carRoutes from './routes/car.routes';

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());


// Rotas
app.get('/health', (req, res) => {
  return res.json({ status: 'API rodando' });
});

app.use('/cars', carRoutes);

// Export
export { app };
