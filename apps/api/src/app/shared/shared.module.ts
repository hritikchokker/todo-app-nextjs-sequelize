import { Module } from '@nestjs/common';
import { HashingService } from './services/hashing/hashing.service';
import { JwtService } from './services/jwt/jwt.service';

@Module({
  providers: [HashingService, JwtService],
})
export class SharedModule {}
