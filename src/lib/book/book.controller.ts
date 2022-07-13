import {
  Controller,
  Response,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  HttpStatus,
  Get,
} from '@nestjs/common';
import { BookDto } from 'src/entities/dto/book.dto';
import { BookService } from './book.service';

@UsePipes(ValidationPipe)
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('/')
  async createHomeReservation(
    @Response() res,
    @Body() payload: BookDto,
  ): Promise<Response> {
    await this.bookService.createBook(payload);
    return res
      .status(HttpStatus.CREATED)
      .json({ status: HttpStatus.CREATED, data: 'Book Accepted' });
  }

  @Get('/')
  async getHomeReservation(@Response() res): Promise<Response> {
    const data = await this.bookService.filterByField({});
    return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data });
  }
}
