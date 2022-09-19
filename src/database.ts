import mongoose from 'mongoose';
import config from './config';

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${config.MONGO_USERNAME}:${config.MONGO_PASSWORD}@clustervanguardia.5drt9oa.mongodb.net/${config.MONGO_DATABASE}?retryWrites=true&w=majority`
    );
    console.log('Connected to CraiDev');
  } catch (error) {
    console.error(error);
  }
})();
