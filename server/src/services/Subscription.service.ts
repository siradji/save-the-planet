
import User from '../models/User'

export default class Subscription{
    constructor() {

    }
    public async createUser(body: any) {
        return await User.create(body)
    }
}