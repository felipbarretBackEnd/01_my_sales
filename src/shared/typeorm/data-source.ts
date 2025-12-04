import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';

//const port = process.env.PORT as number | undefined;
const port = Number(process.env.DB_PORT || 5432)

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: port,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'admin',
  database: process.env.DB_NAME || 'mysales',
  entities: ['./src/modules/**/database/entities/*.{ts, js}'],
  migrations: ['./src/shared/typeorm/migrations/*.{ts, js}']
});
