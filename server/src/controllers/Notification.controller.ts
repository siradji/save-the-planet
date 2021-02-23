import { Request, Response} from 'express'

export default class Notification {

constructor() {
}

public async SendNotification(_request: Request, response: Response): Promise< Response> {
    return response.send('Hello world')
}


 bodyParser(body: Request['body']): any {
    return body
}
}