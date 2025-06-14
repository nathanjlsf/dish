import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectMongo } from './connectMongo';
import { registerAuthRoutes } from './routes/authRoutes';
import { registerImageRoutes } from './routes/imageRoutes';
import { verifyAuthToken } from './middleware/verifyAuthToken';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const STATIC_DIR = path.resolve(__dirname, '../../frontend/dist');

app.use(express.json());
app.use(express.static(STATIC_DIR));

const mongoClient = connectMongo();
mongoClient.connect().then(() => {
  const db = mongoClient.db();
  registerAuthRoutes(app, db);
  registerImageRoutes(app, db, verifyAuthToken);

  app.get('*', (_req, res) => {
    res.sendFile(path.join(STATIC_DIR, 'index.html'));
  });

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
  process.exit(1);
});
