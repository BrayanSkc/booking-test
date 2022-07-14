<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

Aplicación creada en Nest JS + Postgres que permite la gestión de reserva de una casa.

## Installation

```bash
$ npm install || yarn
```

## Running the app

```bash
# development
$ npm run start:dev || yarn start:dev

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Environments
````
API_DISCOUNT=https://622271e2666291106a26a17c.mockapi.io/discount/v1/new
PORT=3000
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=1234
DATABASE_NAME=bidea
DATABASE_HOST=localhost
````
Para correr el proyecto es necesario tener postgress instalado de manera local [pgAdmin](https://www.pgadmin.org/download/), instalar las librerías y correr el ```npm run start``` o ```yarn start``` si las tablas no se crean automaticamente al iniciar habria que correr el comando ```npm run migration:generate -- name``` y luego ```npm run migrate``` 
