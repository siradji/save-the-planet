import { Request, Response} from 'express'

import SubscriptionService from '../services/Subscription.service'

export default class Subscription {
service: SubscriptionService
constructor() {
    this.service = new SubscriptionService(); 
}

public async subscribeToNotification(_request: Request, response: Response): Promise< Response> {
    return response.send('Hello world')
}


public  async register(request: Request, response: Response): Promise<any> {
        const body = this.bodyParser(request);
        const newUser = await this.service.createUser(body)
        response.json({data: newUser})
}


 private bodyParser(req: Request): any {
     const body = req['body']
    return body
}
}