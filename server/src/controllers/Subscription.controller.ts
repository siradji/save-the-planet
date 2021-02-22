import { Request, Response} from 'express'

export default class Subscription {

constructor() {
}

public async subscribeToNotification(_request: Request, response: Response): Promise< Response> {
    return response.send('Hello world')
}



 bodyParser(body: Request['body']): any {
    return body
}
}