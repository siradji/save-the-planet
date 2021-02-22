import { Application, json, urlencoded } from "express";

import MiddlewareIntf from '../interfaces/Middleware.interface';


export class Middleware implements MiddlewareIntf { 
    app: Application
    constructor(application: Application) {
        this.app = application
    }

    public beforeRoutes() {
        this.app.use(json())
        this.app.use(urlencoded({extended: true}))
    }
}