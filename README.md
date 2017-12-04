# Express+Webpack backend boilerplate
An consistence Express framework with power of the Webpack to design an scalable API backend.

  - Structured config files
  - Moongose database
  - Structured models
  - Structured routes
  - Integrated config files with Express config variables
  - Structured controllers and services
  - Mocha testing
  - Build tools and test coverage tools
  
## Installation

To start developing your application, after you cloned the project do 

```sh
$ npm install
$ npm run-script run-dev
```
---

## Controllers
In order to develope a consistence and scaleable Express application we've defined different conventions. So, all of the controllers should return a promise. huh? hold on, don't freak out it now, it's sweet you will understand why.

```javascript 
const getUser = async function(username) {
    if(username ==='') 
        throw new Error('Username can\'t be empty');

    return await getUserByUsername(username); // A service
}
```
Also, you may noticed that there isn't any parameter for getUser function in our controller. We'll pass them with a cool trick. It's cool because you've got rid of (req, res, next) in your controllers.

The logic of our **Controllers** is driven by **Services**. The aim of a **Service** is to developing a reusable code related to **models** and **conrollers**. The returned value of your services could be anything.

**services/user.js**
```javascript
export function getUser(username) {
    return User.find({username}).exec(); // A promise
}
```
So, now we should resolve the Promise which is returned by the controllers in the router.
Here is our router for *getUser* function. 
```javascript
router.get('/:username', async function(req, res, next) {
    const data = await userController.getUser(req.params.username);

    return res.json(data);
});
```
As it mentioned before, all of the controllers will return a promise. You should resolve all of the Controller's promises in each router. However, we made a fake route client to do it for you. You can implement this fake router like below.
```javascript
router.get('/:username', call(userController.getUser, (req, res, next) => [req.params.username]));
```


## Models
All of your applications' models goes into ***./app/models*** folder.

```javascript 
import mongoos from 'mongoose';
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
```
You can learn about mongoose from its documentation [Mongoose object mondeling](http://mongoosejs.com/).

---

## Configs
All of your configs files should be in **./config** folder. 
***./config/main.js***
```javascript 
configs =  Object.assign({
    project: 'ExpressMVC Boilderplate', 
    url: 'localhost', 
    port: process.env.PORT || 3000,  
    api: {
        address: 'http://github.com/api'
    }  
});

const environemnts = {
    production: {
       
    },
    development: {

    }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign(project, environemnts);
```
Your config file will be accessible throughout your application with the Express ``app.get()`` method. Moreover, if you have nested level config objects, each level will be accessible with a **" . "** 
```javascript 
    app.get('api.address');
```

---

