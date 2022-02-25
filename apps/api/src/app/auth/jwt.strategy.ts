import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy, AuthGuard } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly jwtService: JwtService) {
    //   private readonly userService: UsersService
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'EXTRASTRONGSECRET',
    });
  }
  async generateToken(user) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }
  async checkToken(token: string) {
    const details = await this.jwtService.verifyAsync(token);
    return details;
  }

  async validate(payload: any) {
    // check if user in the token actually exist
    const user = 232;
    console.log(payload, 'payload');
    // const user = await this.userService.findOneById(payload.id);
    if (!user) {
      throw new UnauthorizedException(
        'You are not authorized to perform the operation'
      );
    }
    return payload;
  }
}
