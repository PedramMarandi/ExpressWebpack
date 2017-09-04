import {
    mongo
} from '../config/config';
import mongoose from 'mongoose';

const options = {
    useMongoClient: true,
}
mongoose.createConnection(`mongodb://${mongo.username}:${mongo.password}@${mongo.adress}:${mongo.port}/${mongo.name}`);
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => console.log('Mongo db connected'));
mongoose.connection.on('error', (err) => console.log('An error occured in mongoose connection ' + err));
mongoose.connection.on('disconnected', () => console.log('Mongo db disconnected successfuly'));

