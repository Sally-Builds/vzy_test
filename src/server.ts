import "dotenv/config"
import App from "./app";
import {DATABASE, PORT} from "./helpers/constants";
import routes from "./routes";
import DB from "./helpers/config/DB"

const app = new App(PORT, routes);
const db = new DB(console);

//start application
db.connect(DATABASE)
app.start()
// connect to database

