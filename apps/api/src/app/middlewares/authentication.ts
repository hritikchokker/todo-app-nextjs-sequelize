import { verify, sign } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { environment } from '../../environments/environment';

export async function verifyToken(token: string): Promise<any> {
  return new Promise((resolve, reject) => {
    verify(token, environment.JWT_SECRET, (err: Error, decoded) => {
      if (err) {
        reject(err);
      }
      resolve(decoded);
    });
  });
}

export async function createToken(payload: string): Promise<string> {
  return new Promise((resolve, reject) => {
    sign(payload, environment.JWT_SECRET, (err, tok) => {
      if (err) {
        reject(err);
      }
      resolve(tok);
    });
  });
}
// function encodeToken() {}

export async function authHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req?.headers?.authorization) {
    res.status(400).json({
      message: 'No Auth token found',
    });
    return;
  }
  try {
    const tokenDetails = await verifyToken(req?.headers?.authorization);
    if (tokenDetails) {
      next();
    }
  } catch (error) {
    res.status(401).json({
      message: 'Invalid token passed,please check the token',
    });
  }
}
