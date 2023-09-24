import bodyParser from "body-parser";
import express, { Application } from "express";

import register from './routes/register'
import login from "./routes/login";

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// APPLICATION ROUTES
app.use('/login', login);
app.use('/register', register)

export default app;