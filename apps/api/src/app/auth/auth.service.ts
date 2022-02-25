import { Inject, Injectable } from '@nestjs/common';
import { Response } from 'express';
import { HttpResponseService } from '../shared/services/http-response/http-response.service';
import { UserSession } from '../user/entities/session.entity';
import { User } from '../user/entities/user.entity';
import { v4 } from 'uuid';
import { JwtStrategy } from './jwt.strategy';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userModel: typeof User,
    @Inject('USER_SESSION_REPOSITORY')
    private readonly userSession: typeof UserSession,
    private readonly httpResponse: HttpResponseService,
    private readonly JwtStrategy: JwtStrategy
  ) {}
  async createUser(userDetails: any, res: Response) {
    try {
      const user = await this.userModel.findOne({
        where: { email: userDetails.email },
      });
      if (user) {
        this.httpResponse.sendResponse(res, 400, {
          message: 'User Already Exists',
        });
        return;
      }
      // userDetails.sessions = [];
      userDetails.uid = v4();
      // const newUser = this.userModel.build(userDetails);
      // await newUser.save();
      await this.userSession.create(
        {
          sessionId: v4(),
          active: true,
          deviceId: 'browser',
          user: {
            ...userDetails,
          },
        },
        { include: [User] }
      );
      const findUser = await User.findByPk(userDetails.uid, {
        attributes: { exclude: ['password', 'active'] },
      });
      const token = await this.JwtStrategy.generateToken(
        JSON.stringify({ uid: findUser.toJSON().uid })
      );
      this.httpResponse.sendResponse(res, 201, {
        message: 'account created succesfully',
        data: findUser.toJSON(),
        token,
        // session: sessionI.toJSON(),
      });
      return;
    } catch (error) {
      console.log(error, 'errorr');
      this.httpResponse.sendResponse(res, 400, { error });
    }
  }

  async login(req, userDetails, res) {
    try {
      const user = await this.userModel.findOne({
        where: { email: userDetails.email },
      });
      if (!user) {
        this.httpResponse.sendResponse(res, 400, {
          message: 'NO User Found',
        });
        return;
      }
      await this.userSession.create(
        {
          sessionId: v4(),
          active: true,
          deviceId: 'browser',
          user: {
            ...userDetails,
          },
        },
        { include: [User] }
      );
      const findUser = await User.findByPk(userDetails.uid, {
        attributes: { exclude: ['password', 'active'] },
      });
      const token = await this.JwtStrategy.generateToken(
        JSON.stringify({ uid: findUser.toJSON().uid })
      );
      this.httpResponse.sendResponse(res, 200, {
        message: 'login successfull',
        data: findUser.toJSON(),
        token,
        // session: sessionI.toJSON(),
      });
    } catch (error) {
      this.httpResponse.sendError(error, res);
    }
  }
}
