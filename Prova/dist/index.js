"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = require("express");
const Student_1 = require("./classes/Student");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Rota /student
app.post("/student", (req, res) => {
  const { name, courses } = req.body;
  // Criar um novo aluno
  const newStudent = new Student_1.default({ name, courses });
  // Retornar o JSON do aluno criado
  res.json(newStudent.toJSON());
});
const port = process.env.PORT || 3014;
app.listen(port, () => {
  console.log(`O servidor está rodando em http://localhost:${port}`);
});
