import express from 'express';

const PORT = 3000
const app = express()

//Middleware que indica que nossa API lida com JSON
app.use(express.json()) 

app.listen(PORT, () => {
    console.log(`Servidor rodando em http:/localhost:${PORT}`)
})