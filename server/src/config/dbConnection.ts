import mongoose from 'mongoose'

import cacheEnv from './env';

(async () => {
  try {
      console.log(cacheEnv.MONGO_URI)
    await mongoose.connect(cacheEnv.MONGO_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
      console.log('mongoose connected...');
  } catch (error) {
    console.log(error);
  }
})()

