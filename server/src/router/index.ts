import { Application } from "express";
import Env from '../config/env';
import SubscriptionRouter from './subscription';
import ClimateLookupRouter from './ClimateLookup';


const apiPrefix = Env.API_PREFIX as string;


const router = (app: Application): void => {
    app.use(apiPrefix + '/subscribe', SubscriptionRouter),
    app.use(apiPrefix + '/lookup', ClimateLookupRouter)


}

export default router