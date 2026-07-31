import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

// 🔹 GET
app.get('/usuarios', (req: Request, res: Response): Response => {
  return res.status(200).json({ mensagem: 'Lista de usuários' });
});

app.get('/meu', (req: Request, res: Response): Response => {
  return res.status(200).json({ mensagem: 'Arthur' });
});

app.get('/meunome', (req: Request, res: Response): Response => {
  return res.status(200).json({ mensagem: 'Olá, meu nome é Arthur' });
});

app.get('/servidor', (req: Request, res: Response): Response => {
  return res.status(200).json({ mensagem: "Servidor está funcionando perfeitamente 🚀" });
});

app.get('/sobre', (req: Request, res: Response): Response => {
  return res.status(200).json({ mensagem: "Olá, meu nome é Arthur! Tenho 17 anos, sou estudante e moro e São Leopoldo"});
});

app.use((req,res,next) => {
  console.log(`Requisição feita em: ${new Date().toISOString()}`)
  next()
})

// 🔹 POST
app.post('/usuarios', (req: Request, res: Response): Response => {
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ mensagem: 'Nome é obrigatório!' });
  return res.status(201).json({ mensagem: `Usuário ${nome} criado com sucesso!` });
});

// 🔹 PUT
app.put('/usuarios/:id', (req: Request, res: Response): Response => {
  return res.status(200).json({ mensagem: 'Usuário atualizado completamente!' });
});

// 🔹 PATCH
app.patch('/usuarios/:id', (req: Request, res: Response): Response => {
  return res.status(200).json({ mensagem: 'Usuário atualizado parcialmente!' });
});

// 🔹 DELETE
app.delete('/usuarios/:id', (req: Request, res: Response): Response => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ mensagem: 'ID não enviado' });
  return res.status(204).send(); // Sem conteúdo
});
// Iniciando o servidor
app.listen(PORT, (): void => {
  console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});