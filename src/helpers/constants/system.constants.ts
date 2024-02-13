import dotenv from "dotenv";
import {CustomError} from "../lib/App";
import {Reasons} from "./application.constants";

dotenv.config();
export const isDev = process.env.NODE_ENV !== "production";

const requiredEnvs = [
    "DATABASE",
    "NODE_ENV",
    "JWT_SECRET",
    "JWT_EXPIRES_IN",
    "STRIPE_WEBHOOK_SECRET",
    "STRIPE_SECRET_KEY"
] as const;
interface Envs {
    [key: string]: string;
}

const envs: Envs = requiredEnvs.reduce((acc: Envs, key: string) => {
    acc[key] = process.env[key] as string;
    return acc;
}, {});

const missingEnvs: string[] = requiredEnvs.filter((key) => !envs[key]);

if (missingEnvs.length > 0 || !process.env.PORT) {
    console.error("ENV Error, the following ENV variables are not set:");
    missingEnvs.push("PORT")
    console.table(missingEnvs);
    throw new CustomError({message: Reasons.CustomReasons.ENV_NOT_FOUND, code: 500})
}

export const PORT:number = Number(process.env.PORT);

export const {
    DATABASE,
    NODE_ENV,
    JWT_EXPIRES_IN,
    STRIPE_WEBHOOK_SECRET,
    STRIPE_SECRET_KEY
} = envs;

