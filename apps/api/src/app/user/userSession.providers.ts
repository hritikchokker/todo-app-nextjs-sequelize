import { UserSession } from './entities/session.entity';

export const usersSessionProviders = [
  {
    provide: 'USER_SESSION_REPOSITORY',
    useValue: UserSession,
  },
];
