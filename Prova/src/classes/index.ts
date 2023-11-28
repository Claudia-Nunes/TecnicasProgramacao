// src/index.ts
import express from 'express';
import Course from './Course';
import Student from './Student';

const app = express();

// Suas rotas e lógica de aplicativo aqui

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`O servidor está rodando em http://localhost:${port}`);
});
