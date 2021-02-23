import {model, Schema} from 'mongoose' 


const UserSchema: Schema = new Schema({
    name: {
        type: String, 
        required: true
    },
    location: {
        type: String,
        required: false
    }, 

    email: {
        required: true,
        type: String,
        unique: true
    },
    subscriptions: {
        type:Boolean, 
        required: false
    }
})

export default model('users', UserSchema)