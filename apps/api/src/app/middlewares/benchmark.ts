import { NextFunction, Request, Response } from 'express';
// work in progress
function benchMarks(req: Request, res: Response, next: NextFunction) {
  console.log(new Date(), 'current time', new Date().getTime());
  next();
}

export default benchMarks;
