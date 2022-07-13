
import { BookSchema } from 'src/entities/schema/book.schema';
import { EntityRepository,Repository } from 'typeorm';

@EntityRepository(BookSchema)
export class BookRepository extends Repository<BookSchema> {}
