import mongoose from 'mongoose';
import config from '@/config';

export default async (): Promise<any> => {
    console.log(config.databaseURL);
  const connection = await mongoose.connect(config.databaseURL);

  return connection.connection.db;
};