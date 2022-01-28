import { Request, Response } from 'express';
import { createToken } from '../middlewares/authentication';
import { UserModel } from '../models/user';
import { decryptHash } from '../utils/hashManager';
import { getV4Id } from '../utils/uuidHandler';
export const loginHandler = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    if (!payload) {
      res.status(400).json({
        message: 'No Payload Found',
      });
    }
    const user = await UserModel.findOne({
      where: {
        email: req.body.email || '',
      },
    });
    // attributes: { exclude: ['password', 'updatedAt'] },
    if (user) {
      const userResponse = user.toJSON();
      const compareHash = await decryptHash(
        payload.password,
        userResponse.password
      );
      if (compareHash) {
        const token = await createToken(
          JSON.stringify({ id: userResponse.uid, type: 'user' })
        );
        delete userResponse.password;
        delete userResponse.updatedAt;
        delete userResponse.active;
        res.status(200).json({
          message: 'LoggedIn successfully',
          data: userResponse,
          token,
        });
      }
    } else {
      res.status(400).json({
        message: 'No user with this email exists',
      });
    }
  } catch (error) {
    console.log(error, 'errors ');
    res.status(400).json({
      message: 'something went wrong',
      error,
    });
  }
};

export const registerHandler = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    delete payload.uid;
    payload.uid = getV4Id();
    if (!payload) {
      res.status(400).json({
        message: 'No Payload Found',
      });
    }
    const user = await UserModel.create(payload);
    const token = await createToken(
      JSON.stringify({ id: payload.uid, type: 'user' })
    );
    const response = user.toJSON();
    delete response.password;
    delete response.active;
    delete response.updatedAt;
    res.status(201).json({
      message: 'Account created succesfully',
      data: response,
      token,
    });
  } catch (error) {
    console.log(error, 'errors ');
    res.status(400).json({
      message: 'something went wrong',
      error,
    });
  }
};
