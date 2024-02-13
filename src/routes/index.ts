import IRoute from "./route.interface";
import authRoute from "../api/auth/auth.route";
import userRoute from "../api/users/user.route";
import serviceRoute from "../api/payments/payments.route";


const auth: IRoute = authRoute;
const user: IRoute = userRoute;
const service: IRoute = serviceRoute;
export default [auth, user, service];
