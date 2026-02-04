import express from 'express';
import cors from 'cors';
import path from 'path';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

import carRoutes from './routes/car.routes';

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());

app.use(
  '/uploads',
  express.static(path.resolve(__dirname, '..', 'uploads'))
);


// Rotas
app.get('/health', (req, res) => {
  return res.json({ status: 'API rodando' });
});

app.use('/cars', carRoutes);

app.use('/login', authRoutes);
app.use('/users', userRoutes);

// Export
export { app };
