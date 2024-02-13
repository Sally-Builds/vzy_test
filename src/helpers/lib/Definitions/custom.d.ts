import {IUser} from "../../../api/users/user.interface";
import Stripe from "stripe";

import User from '@/resources/user/user.interface';
declare global {
    namespace Express {
        export interface Request {
            user: IUser,
            stripeEvent: Stripe.Event
        }
    }
}