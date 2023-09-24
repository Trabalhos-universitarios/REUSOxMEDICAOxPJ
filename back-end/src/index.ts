import { PORT } from './config/index';
import app from './app';

export const server = app.listen(PORT, () => {
  console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
