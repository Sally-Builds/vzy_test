import { NextFunction } from "express";
import { CustomResponse, responseData } from "../helpers/lib/App";
import { StatusCodes } from "http-status-codes";

export const responseMiddleware = <T>(
  req: Request,
  res: CustomResponse<T>,
  next: NextFunction
) => {

  next();
};
