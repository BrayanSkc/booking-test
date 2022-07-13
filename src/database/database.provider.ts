import { TypeOrmModule } from '@nestjs/typeorm';
import environment from 'src/config/env';
import { BookSchema } from 'src/entities/schema/book.schema';

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
    entities: [BookSchema],
    logging: false,
    migrations: [__dirname + '../migrations/*{.ts,.js}'],
  }),
];
