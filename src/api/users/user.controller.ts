import {Request, Response} from "express";
import {CustomResponse} from "../../helpers/lib/App";
import {Reasons} from "../../helpers/constants";
import {UpdateUser} from "./user.service";
import {IUser} from "./user.interface";


export const _getMe = async (req: Request, res: CustomResponse<{ user: IUser }>) => {

  res.status(200).json({
    msg: Reasons.DefaultReasons.OK,
    data: {user: req.user},
    statusCode: 200,
  });
}
export const _updateUser = async (req: Request, res: CustomResponse<{ updatedUser: IUser | null }>) => {
  const data = await UpdateUser({uid: req.user.uid}, req.body);

  res.status(200).json({
    msg: Reasons.DefaultReasons.OK,
    data: {updatedUser: data},
    statusCode: 200,
  });
}