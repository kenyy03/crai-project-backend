import dotenv from 'dotenv';

dotenv.config();

export default {
  MONGO_PORT: process.env.PORT,
  MONGO_USERNAME: process.env.USER,
  MONGO_PASSWORD: process.env.PASSWORD,
  MONGO_DATABASE: process.env.DATABASE,
};
