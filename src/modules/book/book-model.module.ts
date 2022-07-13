import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from 'src/lib/book/book.service';
import { BookController } from 'src/lib/book/book.controller';
import { BookSchema } from 'src/entities/schema/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookSchema])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
