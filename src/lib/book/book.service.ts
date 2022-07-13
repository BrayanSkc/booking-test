import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import environment from 'src/config/env';
import { BAD_REQUEST } from 'src/decorator/book.decorator';
import { BookDto } from 'src/entities/dto/book.dto';
import { BookRepository } from 'src/modules/book/book-model.service';

interface InAxiosDiscount {
  status: boolean;
  id: string;
  userId: string;
  houseId: string;
  discountCode: string;
}
@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookRepository)
    private readonly bookRepository: BookRepository,
  ) {}

  async createBook(payload: BookDto): Promise<boolean> {
    try {
      if (payload.discountCode) {
        //obtenemos los descuentos activos - status true
        let discountArray: InAxiosDiscount[] = await axios
          .get(environment.API_DISCOUNT)
          .then((res) => {
            return res.data && res.data.length > 0
              ? res.data.filter((item) => item.status)
              : [];
          })
          .catch((err) => {
            throw new Error('Error getting discounts');
          });

          //validamos si el descuento que tenemos se encuentra dentro de los validos
        const isValid = discountArray.find(
          (discount) => discount.discountCode === payload.discountCode,
        );

        if (!isValid) {
          throw new Error('The discount is not valid');
        }
      }

      await this.bookRepository.save(payload);

      return true;
    } catch ({ message }) {
      BAD_REQUEST(message);
    }
  }
}
