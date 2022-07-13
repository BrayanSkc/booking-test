import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsOnlyDate(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsOnlyDate',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: {
        message: `Please provide only date like ${getDateFormat()}`,
        ...validationOptions,
      },
      validator: {
        validate(value: any) {
          const regex = /^\d{4}-\d{2}-\d{2}$/;
          return typeof value === 'string' && regex.test(value);
        },
      },
    });
  };
}

const getDateFormat = () => {
  let yourDate = new Date();
  yourDate.toISOString().split('T')[0];
  const offset = yourDate.getTimezoneOffset();
  yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
  return yourDate.toISOString().split('T')[0];
};

export const convertDateStringToTimestamp = (date: string) =>
  new Date(date).getTime();
