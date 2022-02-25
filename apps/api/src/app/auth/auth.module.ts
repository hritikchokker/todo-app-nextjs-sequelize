import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { HttpResponseService } from '../shared/services/http-response/http-response.service';
import { usersProviders } from '../user/user.providers';
import { usersSessionProviders } from '../user/userSession.providers';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
@Module({
  controllers: [AuthController],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'EXTRASTRONGPASSWORD',
      // signOptions: { expiresIn: 60 * 60 },
    }),
  ],
  providers: [
    AuthService,
    HttpResponseService,
    ...usersProviders,
    ...usersSessionProviders,
    JwtStrategy,
  ],
})
export class AuthModule {}
