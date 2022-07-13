import { Module } from '@nestjs/common';
import { BookModule } from './book-model.module';

@Module({
  imports: [BookModule]
})
export class BookAPIModule {}
