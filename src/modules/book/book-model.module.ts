import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from 'src/lib/book/book.service';
import { BookController } from 'src/lib/book/book.controller';
import { BookRepository } from './book-model.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookRepository])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
