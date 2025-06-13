import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Express, Request, Response } from 'express';
import { Db } from 'mongodb';

export function registerAuthRoutes(app: Express, db: Db) {
  const users = db.collection('users');

  app.post('/auth/register', async (req: Request, res: Response): Promise<void> => {
    const { name, username, password } = req.body;
    const existing = await users.findOne({ username });
    if (existing) {
      res.status(409).json({ error: 'User exists' });
      return;
    }
    const hashed = await bcrypt.hash(password, 10);
    await users.insertOne({ name, username, password: hashed });
    res.status(201).end();
  });

  app.post('/auth/login', async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;
    const user = await users.findOne<{ name: string; password: string }>({ username });
    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }
    const token = jwt.sign({ username }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    res.json({ token, name: user.name });
  });
}
