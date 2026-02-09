import express from 'express';
import cors from 'cors';
import path from 'path';

import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import carRoutes from './routes/car.routes';
import carImageRoutes from './routes/car-image.routes';
import dashboardRoutes from './routes/dashboard.routes';
import salesReportRoutes from './routes/sales-report.routes';

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
app.use('/cars/images', carImageRoutes);

app.use('/login', authRoutes);
app.use('/users', userRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/reports', salesReportRoutes);

export { app };
