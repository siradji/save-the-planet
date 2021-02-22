import { Application } from "express";
import Env from '../config/env';
import SubscriptionRouter from './subscription';



const apiPrefix = Env.API_PREFIX as string;

console.log(apiPrefix);

const router = (app: Application): void => {
    app.use(apiPrefix + '/subscribe', SubscriptionRouter)

}

export default router