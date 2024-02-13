import { DbRepository } from '../../helpers/lib/DB/db_base.repository';
import UserModel from './user.model';
import {IUser} from './user.interface';

export const userRepository = new DbRepository<IUser>(UserModel)