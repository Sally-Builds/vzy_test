import {Request, Response} from "express";
import { CreateUser, LoginUser } from './auth.service';
import {CustomResponse} from "../../helpers/lib/App";
import {Reasons} from "../../helpers/constants";


export const _register = async (req: Request, res: CustomResponse<{message: string}>) => {
  const data = await CreateUser(req.body)

  res.status(201).json({
    msg: Reasons.DefaultReasons.OK,
    data: {message: data},
    statusCode: 201,
  })
}

export const _login = async (req: Request, res: CustomResponse<{ token: string }>) => {
  const token = await LoginUser(req.body)

  res.status(200).json({
    msg: Reasons.DefaultReasons.OK,
    data: {token},
    statusCode: 200,
  });
}