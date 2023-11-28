// src/index.ts
import express, { Request, Response } from 'express';
import { StudentProps } from './classes/Types';
import Student from './classes/Student';

const app = express();
app.use(express.json());

// Rota /student
app.post('/student', (req: Request, res: Response) => {
  const { name, courses } = req.body as StudentProps;

  // Criar um novo aluno
  const newStudent = new Student({ name, courses });

  // Retornar o JSON do aluno criado
  res.json(newStudent.toJSON());
});

const port = process.env.PORT || 3014;

app.listen(port, () => {
  console.log(`O servidor está rodando em http://localhost:${port}`);
});
