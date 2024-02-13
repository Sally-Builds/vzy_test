import  jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import {Token, verifyToken} from '../helpers/lib/App/jwtToken'
import {userRepository} from "../api/users/user.repository";
import {CustomError} from "../helpers/lib/App";
import {Reasons} from "../helpers/constants";

async function authenticate (req:Request, res:Response, next:NextFunction): Promise<Response | void> {
    const bearer = req.headers.authorization

    if(!bearer || !bearer.startsWith('Bearer')){
        return next(new CustomError({message: Reasons.DefaultReasons.UNAUTHORIZED, code: 401}))
    }
    const accessToken = bearer.split('Bearer ')[1].trim()
    try {
        const payload: Token | jwt.JsonWebTokenError = await verifyToken(accessToken)

        if(payload instanceof jwt.JsonWebTokenError) {
            return next(new CustomError({message: Reasons.DefaultReasons.UNAUTHORIZED, code: 401}))
        }
        const user = await userRepository.findOne({_id: payload.id}, {password: 0, __v: 0, _id: 0})

        if(!user) {
            return next(new CustomError({message: Reasons.DefaultReasons.UNAUTHORIZED, code: 401}))
        }

        req.user = user
        next()

    } catch (error:any) {
        next(new CustomError({message: Reasons.DefaultReasons.UNAUTHORIZED, code: 401}))
    }
}

export default authenticate