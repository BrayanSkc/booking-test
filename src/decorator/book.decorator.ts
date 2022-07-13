import { HttpException, HttpStatus } from '@nestjs/common';

const httpExceptionHandler = (httpStatus, message) => {
  throw new HttpException({ status: httpStatus, message }, httpStatus);
};

export const BAD_REQUEST = (message) => {
  httpExceptionHandler(HttpStatus.BAD_REQUEST, message);
};

export const FORBIDDEN = (message) => {
  httpExceptionHandler(HttpStatus.FORBIDDEN, message);
};
