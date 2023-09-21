import express from 'express';
import { PORT } from './config';

const app = express();

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

export const server = app.listen(PORT, () => {
  console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
