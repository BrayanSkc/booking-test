import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import environment from 'src/config/env';
import { BAD_REQUEST } from 'src/decorator/book.decorator';
import { BookDto } from 'src/entities/dto/book.dto';
import { BookSchema } from 'src/entities/schema/book.entity';
import { convertDateStringToTimestamp } from 'src/helpers';
import { Repository } from 'typeorm';

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
    @InjectRepository(BookSchema)
    private readonly bookRepository: Repository<BookSchema>,
  ) {}

  async createBook(payload: BookDto): Promise<BookSchema> {
    try {
      const book = new BookSchema();

      if (
        convertDateStringToTimestamp(payload.startDate) >
        convertDateStringToTimestamp(payload.endDate)
      ) {
        throw new Error('Start date cannot be greater than end date');
      }

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

      //validamos que la casa se encuentre disponible en ese periodo de tiempo
      const house = await this.filterByField({ houseId: payload.houseId });
      if (house.length > 0) {
        house.map((item) =>
          this.validDateRange(item.startDate, item.endDate, payload.startDate),
        );
      }

      book.age = payload.age;
      book.name = payload.name;
      book.lastname = payload.lastname;
      book.id = payload.id;
      book.phoneNumber = payload.phoneNumber;
      book.houseId = payload.houseId;
      book.startDate = payload.startDate;
      book.endDate = payload.endDate;
      book.discountCode = payload.discountCode ?? null;

      return await this.bookRepository.save(book);
    } catch ({ message }) {
      BAD_REQUEST(message);
    }
  }

  async filterByField(query: Record<string, unknown>): Promise<BookSchema[]> {
    try {
      return await this.bookRepository.findBy(query);
    } catch ({ message }) {
      BAD_REQUEST(message);
    }
  }
  private validDateRange = (
    reservedStart: string,
    reservedEnd: string,
    startDate: string,
  ) => {
    if (
      convertDateStringToTimestamp(startDate) >=
        convertDateStringToTimestamp(reservedStart) &&
      convertDateStringToTimestamp(startDate) <
        convertDateStringToTimestamp(reservedEnd)
    ) {
      throw new Error('The house has an active reservation');
    }
  };
}
