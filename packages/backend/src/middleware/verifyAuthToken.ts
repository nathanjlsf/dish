import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface TokenPayload {
  username: string;
}

declare module 'express-serve-static-core' {
  interface Request {
    user?: TokenPayload;
  }
}

export function verifyAuthToken(req: Request, res: Response, next: NextFunction) {
  const auth = req.get('Authorization');
  const token = auth?.split(' ')[1];

  if (!token) return res.status(401).end();

  jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
    if (err || !decoded) return res.status(403).end();
    req.user = decoded as TokenPayload;
    next();
  });
}
