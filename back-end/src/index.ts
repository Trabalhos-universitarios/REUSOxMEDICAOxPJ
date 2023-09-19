import express from 'express'

const app = express();
const port = 3000;

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
