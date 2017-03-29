import mongoos from 'mongoose';
var userSchema = new mongoos.Schema({
    name: String,
    lastName: String,
    age: {type: Number, default: null},
    password: String
});
mongoos.model('User', userSchema);