import express, { Application } from 'express';
import { AppDataSource } from './config/dataSource';

const PORT = 3000
const app: Application = express()

app.use(express.json())

AppDataSource.initialize()
.then(() => {
    console.log('Banco de dados conectado!')
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`)
    })
}).catch((error) => {
    console.error('Banco de dados não conectado!/n', error)
})