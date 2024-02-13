import bcrypt from 'bcryptjs'
import {MyReasons, Reasons, SALT} from "../../helpers/constants";
import {userRepository} from "../users/user.repository";
import {UserLoginValidatorDto, UserRegisterValidatorDTO} from "./auth.interface";
import {CustomError} from "../../helpers/lib/App";
import {createToken} from "../../helpers/lib/App/jwtToken";

export const CreateUser = async (payload: UserRegisterValidatorDTO) => {
    //check if email exist
    const isEmail = await userRepository.findOne({email: payload.email}, {id: 1})
    if(isEmail) {
        throw new CustomError({message: Reasons.CustomReasons.EMAIL_EXIST, code: 400})
    }
    const hash = await bcrypt.hash(payload.password, SALT)
    const data = await userRepository.create({...payload, password: hash},{_id: 1})
    return Reasons.CustomReasons.REGISTRATION_SUCCESSFUL
}

export const LoginUser = async (payload: UserLoginValidatorDto) => {
    const user = await userRepository.findOne({email: payload.email})

    if(!user) throw new CustomError({message: MyReasons.LOGIN_INCORRECT_CREDENTIALS})

    if(!(await bcrypt.compare(payload.password, user.password))) {
        throw new CustomError({message: MyReasons.LOGIN_INCORRECT_CREDENTIALS})
    }

    //generate Token
    return  createToken(user)
}