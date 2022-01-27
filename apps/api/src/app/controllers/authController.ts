import { Request, Response } from 'express';
import { createToken } from '../middlewares/authentication';
import { UserModel } from '../models/user';
import { getV4Id } from '../utils/uuidHandler';
export const loginHandler = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    if (!payload) {
      res.status(400).json({
        message: 'No Payload Found',
      });
    }
    const user: any = await UserModel.findOne({
      where: {
        email: req.body.email || '',
      },
    });
    if (user) {
      const token = await createToken(
        JSON.stringify({ id: user.uid, type: 'user' })
      );
      res.status(200).json({
        message: 'LoggedIn successfully',
        data: user,
        token,
      });
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
    const task = await UserModel.create(payload);
    const token = await createToken(
      JSON.stringify({ id: payload.uid, type: 'user' })
    );
    res.status(201).json({
      message: 'Account created succesfully',
      data: task,
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
