import { Injectable } from '@nestjs/common';
import { Response } from 'express';
@Injectable()
export class HttpResponseService {
  sendResponse(res: Response, statusCode: number, details: any): void {
    try {
      res.status(statusCode).json(details);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  sendError(error: Error | unknown, res: Response) {
    res.status(400).json({
      error,
    });
  }
}
