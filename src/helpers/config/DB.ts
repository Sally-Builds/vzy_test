import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const options = {
    serverSelectionTimeoutMS: 30000,
};

class DB {
    private readonly log: any;
    constructor(log: any) {
        this.log = log;
    }

    public connect(DB_URL: string) {
        const log = this.log;
        mongoose.set("strictQuery", false);
        mongoose
            .connect(DB_URL, options)
            .then(async () => {
                log.info(`Successfully connected to `, DB_URL);
                // new DefaultScripts();
            })
            .catch((err: any) => {
                log.error(`There was a db connection error`, err);
                process.exit(0);
            });
        mongoose.connection.once("disconnected", () => {
            log.error(`Successfully disconnected from ${DB_URL}`);
        });
        process.on("SIGINT", () => {
            mongoose.connection.close().then(() => {
                log.error("dBase connection closed due to app termination");
                process.exit(0);
            });
        });
    }
}

export default DB;
