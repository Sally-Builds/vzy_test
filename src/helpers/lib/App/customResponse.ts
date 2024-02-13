import { Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { MyReasons } from "../../constants";
import { Send } from 'express-serve-static-core'

export interface responseData<T> {
  msg?: ReasonPhrases | MyReasons;
  data: T | T[];
  statusCode?: StatusCodes;
}

// Declare a custom Response interface that includes the 'success' method
export interface CustomResponse<T> extends Response {
  json: Send<responseData<T>, this>;
}
