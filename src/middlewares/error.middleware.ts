import { NextFunction, Request, Response } from "express";
import {CustomError} from "../helpers/lib/App";
import {Reasons} from "../helpers/constants";
import {ReasonPhrases} from "http-status-codes";
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
        const {statusCode, message, logging, error} = err
        if(logging) {
            console.error(JSON.stringify({
                code: statusCode,
                errors: error,
                stack: err.stack,
            }))
        }
        return res.status(statusCode).json({msg: error.message as ReasonPhrases, statusCode, data: []})
    }


    return res.status(500).json({ msg: Reasons.DefaultReasons.INTERNAL_SERVER_ERROR, statusCode: 500, data: [] });
};