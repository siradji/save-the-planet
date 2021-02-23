import {  Request, Response} from 'express'
import LookupService from '../services/Lookup.service';

export default class ClimateLookup {

    service: LookupService;

constructor() {
    this.service = new LookupService()
}

public async LookupByCity(request: Request, response: Response): Promise< Response> {
    const {city} = request.body;
    const res = await this.service.lookupBycity(city);
    return response.json({data: res})
}



 bodyParser(body: Request['body']): any {
    return body
}
}