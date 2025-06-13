import { Express } from 'express';
import { Db } from 'mongodb';
import { Request, Response } from 'express';

export function registerImageRoutes(app: Express, db: Db, verify: any) {
  const images = db.collection('images');

  // GET all images (public or with filtering)
  app.get('/api/images', async (_req: Request, res: Response) => {
    const result = await images.find().toArray();
    res.json(result);
  });

  // PATCH to rename image (protected)
  app.patch('/api/images/:id', verify, async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    await images.updateOne({ id: id, username: req.user!.username }, { $set: { name } });
    res.status(200).end();
  });

  // POST new image (if doing uploads)
}
