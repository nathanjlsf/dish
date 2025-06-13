import { MongoClient } from 'mongodb';

export function connectMongo() {
  return new MongoClient(process.env.MONGO_URI!);
}
