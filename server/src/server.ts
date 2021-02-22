import  express from 'express'
import {Application} from 'express';

import env from './config/env'



const app: Application = express()

const PORT = env.PORT;


app.listen(PORT, () => console.log('Server up and running on port: ' + PORT) )