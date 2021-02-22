import {Application} from 'express';
import dotenv from 'dotenv';
import  express from 'express'
import {createServer} from 'http'

// native
import env from './config/env'
import {Middleware} from './middlewares'
import router from './router';





dotenv.config();


const app: Application = express()
const server: any = createServer(app);

const middlewares = new Middleware(app);


middlewares.beforeRoutes()

router(app)

const PORT = env.PORT;


server.listen(PORT, () => console.log('Server is up and running on port: ' + PORT) )