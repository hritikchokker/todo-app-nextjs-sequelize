import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { todoProviders } from './todo.providers';
import { HttpResponseService } from '../shared/services/http-response/http-response.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/jwt.strategy';
import { usersProviders } from '../user/user.providers';

@Module({
  controllers: [TodoController],
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: 'EXTRASTRONGPASSWORD',
      signOptions: { expiresIn: '60s' },
      // signOptions: { expiresIn: 60 * 60 },
    }),
  ],
  providers: [
    TodoService,
    ...todoProviders,
    HttpResponseService,
    JwtStrategy,
    ...usersProviders,
  ],
})
export class TodoModule {}
