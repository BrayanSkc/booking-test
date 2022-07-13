import {
  Controller,
  Response,
  Req,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  HttpStatus,
} from '@nestjs/common';
import { BookDto } from 'src/entities/dto/book.dto';
import { BookService } from './book.service';
import { Request } from 'express';

@UsePipes(ValidationPipe)
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('/')
  async createHomeReservation(
    @Response() res,
    @Body() payload: BookDto,
    @Req() req: Request,
  ): Promise<Response> {
    console.log('saludar');
    return res
      .status(HttpStatus.CREATED)
      .json({ status: HttpStatus.CREATED, data: true });
  }
}
