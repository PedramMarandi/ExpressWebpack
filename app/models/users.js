import mongoose, {Schema as schema} from 'mongoose';

var userSchema = new schema({
    name: {type: String, require: true},
    lastName: {type: String, required: true},
    age: {type: Number, default: null},
    password: String
});

const User = mongoose.model('User', userSchema);

export default User;