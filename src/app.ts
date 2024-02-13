import express, { Application } from "express";
import cors from "cors";
import { errorHandler } from "./middlewares";
import IRoute from "./routes/route.interface";
import "express-async-errors";
import { responseMiddleware } from "./middlewares";
export default class App {
    private app: Application;
    private readonly port: number;

    constructor(port: number, routes: IRoute[]) {
        this.app = express();
        this.port = port;
        this.middlewareInitializer();
        this.routeInitializer(routes);
        this.GlobalErrorHandler();
    }

    private middlewareInitializer() {
        this.app.use(cors());
        this.app.use(responseMiddleware as any);
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private routeInitializer(routes: IRoute[]) {
        routes.map((router: IRoute) => {
            this.app.use(router.path, router.router);
        });
        this.app.get("/", (req, res, next) => {
            res.send("VZY demo now available");
        });
        this.app.get("*", (req, res, next) => {
            res
                .status(404)
                .send(
                    `<h1 style="height: 100vh; width: 100vw; display: flex; justify-content: center; align-items: center">Page Note Found 404</h1>`
                );
        });
    }

    private GlobalErrorHandler() {
        this.app.use(errorHandler);
    }

    public start() {
        this.app.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`);
        });
    }
}
