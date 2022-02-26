import { User } from '../entities/user.entity';

export class CreateUserDto {
  sessionId: string;
  active?: boolean;
  deviceId: string;
}
