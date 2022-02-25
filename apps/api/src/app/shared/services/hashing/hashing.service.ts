import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class HashingService {
  salt = 10;
  createHash(password: string): string | null {
    return bcrypt.hashSync(password, this.salt);
  }

  compareHash(password: string, hash: string): Promise<boolean | null> {
    return bcrypt.compare(password, hash);
  }
}
