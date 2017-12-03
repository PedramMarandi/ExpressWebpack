import mongoose from 'mongoose';
import { mongo } from '../config/config';

const options = {
  useMongoClient: true,
};
const databaseURI = `mongodb://${mongo.username}:${mongo.password}@${mongo.adress}:${mongo.port}/${
  mongo.name
}?authSource=admin`;

mongoose.Promise = global.Promise;
mongoose
  .connect(databaseURI, options)
  .then((db) => {
    console.log(`~DATABASE~Express Server has Connected to the "${db.db.s.databaseName}" Database`);
  })
  .catch((e) => {
    console.log('~DATABASE~ Something is wrong' + e);
  });
