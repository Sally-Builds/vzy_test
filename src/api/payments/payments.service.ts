import Stripe from "stripe";
import {PaymentStatus} from "../users/user.interface";
import {paymentsRepo} from "./payments.repository";
import {userRepository} from "../users/user.repository";

export const ValidateUserPayment = async (event: Stripe.Event) => {
    switch (event.type) {
        case 'payment_intent.succeeded':
            return await paymentSucceeded(event.data.object)
        case 'payment_intent.canceled':
            //do sth bro
            return
        default:
            //do sth bro
            return
    }
}

const paymentSucceeded = async (data: Stripe.PaymentIntent) => {

    if(data.status != 'succeeded') {
        //log unsuccessful payment
        return
    }
    const userUID = data.metadata.userUID;

    const user = await userRepository.findOneAndUpdate({status: PaymentStatus.PAID}, {uid: userUID})

    if(!user) {
        //log no user found
        return
    }

    await paymentsRepo.create({user: userUID, amount: data.amount_received, payment_date: data.created})

    return
}

