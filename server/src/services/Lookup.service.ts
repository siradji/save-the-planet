import axios from 'axios'

import Env from '../config/env';

export default class Lookup{
    constructor() {

    }

    public async lookupBycity(city: string): Promise<any> {
        const baseUrl = Env.BASE_URL;
        const apiKey = Env.API_KEY;
        const fetchRequest = (await axios.get(`${baseUrl}/feed/${city}/?token=${apiKey}`)).data.data;
        return fetchRequest;
    }

    

    
}