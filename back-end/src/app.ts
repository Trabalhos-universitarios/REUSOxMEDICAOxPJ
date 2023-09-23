import bodyParser from "body-parser";
import express, { Application } from "express";

import routesRegister from './routes/register'

const cors = require('cors')
const app: Application = express();

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cors({credentials: true}));


// APPLICATION ROUTES
app.use('/register',routesRegister)

export default app;