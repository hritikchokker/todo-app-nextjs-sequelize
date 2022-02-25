import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { SharedModule } from './shared/shared.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { HttpResponseService } from './shared/services/http-response/http-response.service';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({ secret: 'hardtodecodesecret' }),
    TodoModule,
    UserModule,
    JwtModule.register({
      secret: 'EXTRASTRONGPASSWORD',
      // signOptions: { expiresIn: 60 * 60 },
    }),
    SharedModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, HttpResponseService, JwtStrategy],
})
export class AppModule {}
