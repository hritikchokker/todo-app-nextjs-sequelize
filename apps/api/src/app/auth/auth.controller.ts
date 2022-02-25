import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Post('register')
  registerHandler(@Body() userDetails: CreateAuthDto, @Res() res: Response) {
    return this.authService.createUser(userDetails, res);
  }

  @Post('login')
  loginHandler(@Body() userDetails, @Req() req, @Res() res) {
    return this.authService.login(req, userDetails, res);
  }
}
