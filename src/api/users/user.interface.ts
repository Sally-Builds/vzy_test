import {Document} from 'mongoose'
import {Gender} from '../../helpers/constants'
import {IsString} from "class-validator";


export enum PaymentStatus {
  PAID = "paid",
  UNPAID = "unpaid"
}
export interface IUser extends Document{
  firstname: string;
  surname: string;
  phone: string;
  password: string;
  email: string;
  address: string;
  gender: Gender;
  date_of_birth: Date;
  uid: string;
  status: PaymentStatus
}

export class UpdateUserDTO {
  @IsString()
  firstname!: string;
  @IsString()
  surname!: string;
  @IsString()
  phone!: string;
  @IsString()
  address!: string;
}
