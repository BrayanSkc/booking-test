import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './database/database.provider';
import { BookAPIModule } from './modules/book/book-global.module';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    BookAPIModule,
  ],
})
export class AppModule {}
