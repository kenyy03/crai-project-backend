import dotenv from 'dotenv';

dotenv.config();

export default {
  MONGO_PORT: process.env.PORT || 4001,
  MONGO_USERNAME: process.env.USER || 'kenyy03',
  MONGO_PASSWORD: process.env.PASSWORD || '3b2333ba9h',
  MONGO_DATABASE: process.env.DATABASE || 'CraiDev',
};
