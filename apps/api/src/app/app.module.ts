import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { SharedModule } from './shared/shared.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    DatabaseModule,
    TodoModule,
    UserModule,
    SharedModule,
    JwtModule.register({ secret: 'hardtodecodesecret' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
