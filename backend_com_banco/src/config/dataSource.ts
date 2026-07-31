import 'reflect-metadata'
import { DataSource } from 'typeorm'
import * as dotenv from 'dotenv'

dotenv.config()

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env

export const AppDataSource = new DataSource({
    type: 'better-sqlite3',
    database: 'src/database/banco.db',
    entities: ['src/models/*.ts'],
    synchronize: true,
    logging: true
})