import mongoose, {
    Schema as schema
} from 'mongoose';
import validateUsername from './validate';
var userSchema = new schema({
    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        validator: validateUsername,
        msg: "Your username is wrong"
    },
    age: {
        type: Number,
        default: null
    },
    password: String
});

const User = mongoose.model('User', userSchema);

export default User;