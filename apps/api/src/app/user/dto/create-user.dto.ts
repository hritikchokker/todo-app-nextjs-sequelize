import { UserSession } from '../entities/session.entity';
export class CreateUserDto {
  firstName?: string;
  lastName?: string;
  uid?: string;
  password?: string;
  email?: string;
  active?: boolean;
}
