import {Schema, model, Document, ObjectId} from 'mongoose'
import {IUser, PaymentStatus} from './user.interface';
import {Gender} from '../../helpers/constants'

const userSchema = new Schema<IUser>({
    firstname: {
        type: String,
    },
    surname: {
        type: String,
    },
    date_of_birth: {
        type: Date,
    },
    email: {
        type: String,
        unique: true
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    gender: {
        type: String,
        enum: Gender
    },
    status: {
        type: String,
        enum: PaymentStatus,
        default: PaymentStatus.UNPAID
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    uid: {
        type: String,
        required: [true, "uid is required"],
        unique: true
    }
})

export default model("User", userSchema)