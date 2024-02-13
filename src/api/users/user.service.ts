import { userRepository } from './user.repository';
import {IUser, UpdateUserDTO} from "./user.interface";
// import { UserValidatorDTO } from './user.interface';

export const UpdateUser = async (filter: Partial<IUser>, payload: UpdateUserDTO) => {
    return await userRepository.findOneAndUpdate(payload, filter)
}


