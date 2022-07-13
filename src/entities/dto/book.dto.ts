import {
  Length,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  Max,
  Matches,
} from 'class-validator';
import { IsOnlyDate } from 'src/helpers';


export class BookDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/([0-9]){7,8}(-)[0-9]{1}/,{
    message: 'Invalid id, please try again'
  })
  @Length(9, 10)
  id: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  lastname: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(18)
  @Max(100)
  age: number;

  @IsString()
  @IsNotEmpty()
  @Length(9, 20)
  phoneNumber: number;

  @IsString()
  @IsOptional()
  @Length(8)
  discountCode?: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 15)
  houseId: string;

  @IsOnlyDate()
  @IsNotEmpty()
  startDate: string;

  @IsOnlyDate()
  @IsNotEmpty()
  endDate: string;
}
