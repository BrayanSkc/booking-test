import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import environment from 'src/config/env';

export const DatabaseProvider = [
  TypeOrmModule.forRoot({
    ssl: false,
    type: 'postgres',
    host: 'localhost',
    username: environment.DATABASE_USERNAME,
    password: environment.DATABASE_PASSWORD,
    database: environment.DATABASE_NAME,
    port: 5432,
    synchronize: true,
    entities: ['../entities/schema/*.entity.js'],
    logging: false
  }),
];
const path= join(__dirname, '**','**',  '*.entity.{ts,js}')

console.log(path);
