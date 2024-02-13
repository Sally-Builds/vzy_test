import {Request, Response} from "express";
import {ValidateUserPayment} from "./payments.service";
import { CustomResponse } from "../../helpers/lib/App";
import {Reasons} from "../../helpers/constants";


export const _validatePayment = async (req: Request, res: CustomResponse<null>) => {
    const data = await ValidateUserPayment(req.stripeEvent);

    res.status(200).json({
        msg: Reasons.DefaultReasons.OK,
        data: null,
        statusCode: 200,
    });
}

