import express from "express";
import { validationMiddleware } from '../../middlewares/validation.middleware';
import authenticate from "../../middlewares/authentication.middleware";
import {_getMe, _updateUser} from './user.controller';

const router = express.Router();



router.route("/").get(authenticate, _getMe).patch(authenticate, _updateUser)
export default {
  router: router,
  path: "/users",
};
