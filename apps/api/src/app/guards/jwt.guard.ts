import { CanActivate, ExecutionContext, Injectable, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { JwtStrategy } from '../auth/jwt.strategy';
@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private readonly JwtStrategy: JwtStrategy) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    return this.handler(context);
  }
  private async handler(context: ExecutionContext) {
    const req: Request = context.switchToHttp().getRequest();
    const res: Response = context.switchToHttp().getResponse();
    if (!req.headers.authorization) {
      res.status(401).json({ message: 'no authentication found' });
      return false;
    }
    const token = req?.headers?.authorization.split(' ')[1];
    const { uid } = await this.JwtStrategy.checkToken(token);
    if (!uid) {
      res.status(401).json({ message: 'token expired login again' });
      return false;
    }
    (req as any).userId = uid;
    return true;
  }
}
