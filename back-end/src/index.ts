import "reflect-metadata"; 
import express from 'express';
import { PORT } from './config';
import auth from './routes/auth'

const app = express();

app.use(express.urlencoded({extended: true}))

// Rota de exemplo
app.get('/auth', auth);

export const server = app.listen(PORT, () => {
  console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
