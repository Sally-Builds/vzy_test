import {StatusCodes, ReasonPhrases} from 'http-status-codes'
import {MyReasons} from "../../constants"

export type CustomErrorContent = {
    message: string,
    ctx?: { [key: string]: any }
};
type ErrorParams  = {
    code?: StatusCodes,
    message?: ReasonPhrases | MyReasons,
    logging?: boolean,
    ctx?: {[key: string]: any}
}
export  class CustomError extends Error {
    private readonly _statusCode: StatusCodes;
    private readonly _ctx: {[key: string]: any};
    private readonly _logging: boolean
    constructor(errorParams: ErrorParams) {
        const {code, message, logging, ctx} = errorParams
        super(message);

        this._statusCode = code || StatusCodes.BAD_REQUEST
        this._ctx = ctx || {}
        this._logging = logging || false

        Object.setPrototypeOf(this, CustomError.prototype);
    }

    get error(): CustomErrorContent {
        return {message: this.message, ctx: this._ctx}
    }

    get statusCode() {
        return this._statusCode;
    }

    get logging() {
        return this._logging;
    }
}