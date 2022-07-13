import * as dotenv from 'dotenv';

const envSettings = () => {
  const envPath = '.env/.env';
  dotenv.config({ path: envPath });
  return {
    API_DISCOUNT: process.env.API_DISCOUNT,
    PORT: process.env.PORT,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_NAME: process.env.DATABASE_NAME,
  };
};

export default envSettings();
