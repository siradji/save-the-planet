import User from '../models/User'
import UserInterface from '../interfaces/User.interface'

export default class UserRepository {
constructor () {

}


public async getAllUsers():Promise<UserInterface[] | []> {
    const users: any[] =  await User.find() 
    return users as UserInterface[]
}

public async getUserByEmail(email: string): Promise<UserInterface> {
    const user: any = await User.findOne({email})
    return user as UserInterface
} 

}