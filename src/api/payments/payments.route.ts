import express from "express";
import {_validatePayment} from "./payments.controller";
import stripeMiddleware from "../../middlewares/stripe.middleware";

const router = express.Router();



router.post("", stripeMiddleware, _validatePayment)
export default {
    router: router,
    path: "/payments",
};
