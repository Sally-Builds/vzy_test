import {NextFunction, Request, Response} from "express";
import Stripe from 'stripe';
import {CustomError} from "../helpers/lib/App";
import {Reasons, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET} from "../helpers/constants";


async function stripeAuthenticate (req:Request, res:Response, next:NextFunction): Promise<Response | void> {
    const stripe = new Stripe(STRIPE_SECRET_KEY);
    const signature = req.headers['stripe-signature']

    if(!signature){
        //log err
        return next(new CustomError({message: Reasons.DefaultReasons.UNAUTHORIZED, code: 401}))
    }
    try {
        // req.stripeEvent = stripe.webhooks.constructEvent(req.body, signature, STRIPE_WEBHOOK_SECRET)
        req.stripeEvent = req.body
        next()
    } catch (error:any) {
        //log err
        next(new CustomError({message: Reasons.DefaultReasons.UNAUTHORIZED, code: 401}))
    }
}

export default stripeAuthenticate