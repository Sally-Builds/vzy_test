import { ReasonPhrases } from "http-status-codes";
export const SALT = 10

export enum MyReasons {
  WRONG_PASSWORD = "Wrong Password",
  INVALID_EMAIL = "Invalid Email",
  EMAIL_EXIST = "Email already exist",
  LOGIN_INCORRECT_CREDENTIALS = "Username or Password incorrect",
  ENV_NOT_FOUND = "Environmental variables missing",
  REGISTRATION_SUCCESSFUL = "Your registration was successful. Login to get started"
}
export namespace Reasons {
  export const DefaultReasons = ReasonPhrases;
  export const CustomReasons = MyReasons;
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE"
}

