import express from "express";
import { validationMiddleware } from '../../middlewares/validation.middleware';
import {UserRegisterValidatorDTO, UserLoginValidatorDto} from './auth.interface';
import { _register, _login } from './auth.controller';

const router = express.Router();



router.post("/register", validationMiddleware(UserRegisterValidatorDTO), _register)
router.post("/login", validationMiddleware(UserLoginValidatorDto), _login)
export default {
  router: router,
  path: "/auth",
};
