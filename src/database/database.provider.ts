// import { TypeOrmModule } from '@nestjs/typeorm';
// import { join } from 'path';
import environment from 'src/config/env';

// export const DatabaseProvider = [
//   TypeOrmModule.forRoot({
//     ssl: false,
//     type: 'postgres',
//     host: 'localhost',
//     username: environment.DATABASE_USERNAME,
//     password: environment.DATABASE_PASSWORD,
//     database: environment.DATABASE_NAME,
//     port: 5432,
//     synchronize: true,
//     entities: ['../entities/schema/*.entity.js'],
//     logging: false
//   }),
// ];
// const path= join(__dirname, '**','**',  '*.entity.{ts,js}')

// console.log(path);

import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: 'localhost',
      username: environment.DATABASE_USERNAME,
      password: environment.DATABASE_PASSWORD,
      database: environment.DATABASE_NAME,
      port: 5432,
      entities: ['dist/**/*.entity.{ts,js}'],
      migrations: ['dist/migrations/*.{ts,js}'],
      migrationsTableName: 'typeorm_migrations',
      synchronize: true, // never use TRUE in production!
    };
  }
}
