import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { BookController } from './lib/book/book.controller';
import { BookService } from './lib/book/book.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BookController],
  providers: [BookService],
})
export class AppModule {}
