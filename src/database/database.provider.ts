import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/entities/schema/book.schema';

export const DatabaseProvider = [
  TypeOrmModule.forRoot({
    ssl: false,
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '1234',
    database: 'bidea',
    port: 5432,
    synchronize: true,
    entities: [Book],
    logging: true,
    migrations: [__dirname + '../migrations/*{.ts,.js}'],
  }),
];
