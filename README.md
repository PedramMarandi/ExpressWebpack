# ExpressMVC 
ExpressMvc is a full-structured simple boilerplate for Express.js based on MVC structure. 

  - Structured config files
  - manage database connections
  - manage routes 
  - manage config files
  - manage your controllers
  - Structured models
  
## Installation

start to develope your application with 

```sh
$ npm run-script run-dev
```

# Routing
all of your application routes will be saved into ***./app/lib/routes*** folder.

***./app/routes/index.js***
```javascript
    var express = require('express');
    var router = express.Router();
    router.get('/', function(req, res, next) {
        res.render('index', {title: 'ExpressMVC Bolierplate'})
    });
```
After you created you routes you have to register them into ***./app/lib/route.js*** file:


```javascript 
    import index from './routes/index';
    import users from './routes/users';
    
    function register(app) { 
        app.use('/', index);
        app.use('/users', users);
    }
```

Also, you can register your route level middlewares and your error handlers in the ***route.js*** file.


---
## Controllers
All of your application controllers goes into ***./app/controllers*** folder.

```javascript 
import BaseController from '../BaseController';
import UserModel from '../../models/users';

export default class IndexController extends BaseController {
    index(req, res, next) {
        res.render('index', { title: 'ExpressMVC Bolierplate' });
    }
}
```
### Router and Controllers
Also, you can instantiate a controller within your routers.

***./app/routes/index.js***
```javascript 
import IndexController from '../controllers/index/IndexController';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(function(req, res, next) {
  console.log("Route Middleware");
  next();
});

router.get('/', new IndexController().index);
module.exports = router;
```

## Models
All of your applications' models goes into ***./app/models*** folder.

```javascript 
import mongoos from 'mongoose';
var userSchema = new mongoos.Schema({
    name: String,
    lastName: String,
    age: {type: Number, default: null},
    password: String
});
mongoos.model('User', userSchema);
```

Currently, ExpressMVC works with [Mongoose object mondeling](http://mongoosejs.com/) for MongoDB.

## Configs
All of your configs files should be in **./config** folder. 
***./config/main.js***
```javascript 
configs =  Object.assign({
    project: 'ExpressMVC Boilderplate', 
    url: 'localhost', 
    port: process.env.PORT || 3000,    
});

module.exports = configs;
```
Whenever you created a new config, by passing it to **registerConfigs()** function which is in **app.js** file, your config file will accessible with **app.get('CONFIG_KEY')**.
```javascript
import config from './config/main';
registerConfigs(app, config); 
```