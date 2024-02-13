import {DbRepository} from "../../helpers/lib/DB/db_base.repository";
import paymentsModel, {IPayment} from "./payments.model";
export const paymentsRepo = new DbRepository<IPayment>(paymentsModel)