import { Application } from "express";

export default interface Middleware {
    app: Application
}