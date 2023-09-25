import bodyParser from "body-parser";
import express, { Application } from "express";
const cors = require('cors');

import register from './routes/register'
import login from "./routes/login";

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



// APPLICATION ROUTES
app.use('/login', login);
app.use('/register', register)

export default app;