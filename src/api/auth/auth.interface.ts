import {IsString, IsEmail, IsEnum, IsDateString, MinLength} from 'class-validator';
import {Gender} from '../../helpers/constants'

export interface IUser{
  firstname: string;
  surname: string;
  phone: string;
  email: string;
  password: string;
  address: string;
  gender: Gender;
  date_of_birth: Date;
  uid: string;
}

export class UserRegisterValidatorDTO implements  Omit<IUser, 'uid'> {
  @IsString()
  firstname!: string;
  @IsString()
  surname!: string;
  @IsString()
  phone!: string;
  @IsEmail()
  @IsString()
  email!: string;
  @IsString()
  @MinLength(8, {message: "Password too short. must be up to 8 characters"})
  password!: string;
  @IsString()
  address!: string;
  @IsEnum(Gender)
  gender!: Gender;
  @IsDateString()
  date_of_birth!: Date;
}

export class UserLoginValidatorDto implements Pick<IUser, "email" | "password"> {
  @IsEmail()
  email!: string;
  @IsString()
  @MinLength(8, {message: "Password too short. must be up to 8 characters"})
  password!: string;
}
