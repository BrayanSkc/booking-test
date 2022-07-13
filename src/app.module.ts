import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { BookModule } from './modules/book/book-model.module';

@Module({
  imports: [DatabaseModule, BookModule],
})
export class AppModule {}
