import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class HashingService {
  salt = 10;
  createHash(password: string): Promise<string | null> {
    return bcrypt.hash(password, this.salt);
  }

  compareHash(password: string, hash: string): Promise<boolean | null> {
    return bcrypt.compare(password, hash);
  }
}
