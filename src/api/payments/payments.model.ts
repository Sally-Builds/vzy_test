import {Schema, model, Document} from "mongoose"

export interface IPayment extends Document{
    amount: number;
    payment_date: Date;
    user: string;
    uid: string;
}

const paymentSchema = new Schema<IPayment>({
    amount: {
        type: Number,
        required: [true, "amount is required"],
    },
    payment_date: {
        type: Date,
    },
    user: {
        type: String,
        ref: "User",
        refPath: 'uid'
    },
    uid: {
        type: String,
        unique: true
    }
}, {
    timestamps: true
})

paymentSchema.index({uid: 1})
export default model("Payment", paymentSchema)