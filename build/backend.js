/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _db = __webpack_require__(16);

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var project = {
    project: 'CRIBBBLE BACKEND',
    url: 'localhost',
    api: {
        url: 'https://api.dribbble.com/v1/'
    },
    port: parseInt(process.env.PORT),
    mongo: _db2.default
};

// You can store the environment-based configs in this object
var environemnts = {
    production: {},
    development: {}
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign(project, environemnts);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _validate = __webpack_require__(20);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose.Schema({
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
        validator: _validate2.default,
        msg: "Your username is wrong"
    },
    age: {
        type: Number,
        default: null
    },
    password: String
});

var User = _mongoose2.default.model('User', userSchema);

exports.default = User;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var controllerHandler = function controllerHandler(promise, params) {
    return function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res, next) {
            var boundParams, result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            boundParams = params ? params(req, res, next) : [];
                            _context.prev = 1;
                            _context.next = 4;
                            return promise.apply(undefined, _toConsumableArray(boundParams));

                        case 4:
                            result = _context.sent;
                            return _context.abrupt('return', res.json(result || {
                                message: 'OK'
                            }));

                        case 8:
                            _context.prev = 8;
                            _context.t0 = _context['catch'](1);
                            return _context.abrupt('return', next(_context.t0));

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[1, 8]]);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var c = controllerHandler;

exports.default = c;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
module.exports = __webpack_require__(7);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _path = __webpack_require__(8);

var _path2 = _interopRequireDefault(_path);

var _http = __webpack_require__(9);

var _http2 = _interopRequireDefault(_http);

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _serveFavicon = __webpack_require__(10);

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = __webpack_require__(11);

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = __webpack_require__(12);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = __webpack_require__(13);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _registers = __webpack_require__(14);

var _database = __webpack_require__(15);

var _database2 = _interopRequireDefault(_database);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

var _route = __webpack_require__(17);

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = __webpack_require__(24)('express:server');

var app = (0, _express2.default)();

// view engine setup
app.set('views', './app/views');
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
    extended: false
}));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

//register the config file into the app.local
(0, _registers.registerConfigs)(app, _config2.default); // Register configs
(0, _route2.default)(app); // Register routes in application


var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
var server = _http2.default.createServer(app);

server.listen(port, function () {
    console.log("I'm listening on port number " + port);
});
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.registerConfigs = registerConfigs;
exports.registerLocal = registerLocal;
function registerConfigs(app, config) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var configKey = void 0;
  var itemCount = 0;
  name.length > 0 ? configKey = name : configKey = '';

  for (var item in config) {
    if (_typeof(config[item]) == 'object') {
      itemCount = Object.keys(config[item]).length;
      configKey.length == 0 ? configKey = item + '.' : configKey += item + '.';

      registerConfigs(app, config[item], configKey);
    } else {
      itemCount--;
      var keyName = configKey;

      configKey.length == 0 ? keyName = item : keyName += item;
      app.set(keyName, config[item]);
      itemCount == 0 ? configKey = '' : configKey;
    }
  }
}

function registerLocal(app, locals) {
  app.locals = _extends({}, app.locals, locals);
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(2);

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://' + _config.mongo.username + ':' + _config.mongo.password + '@' + _config.mongo.adress + ':' + _config.mongo.port + '/' + _config.mongo.name);
_mongoose2.default.Promise = global.Promise;

_mongoose2.default.connection.on('connected', function () {
    return console.log('Mongo db connected');
});
_mongoose2.default.connection.on('error', function (err) {
    return console.log('An error occured in mongoose connection ' + err);
});
_mongoose2.default.connection.on('disconnected', function () {
    return console.log('Mongo db disconnected successfuly');
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var config = {
    'development': {
        adress: 'localhost',
        username: '',
        password: '',
        port: 27017,
        name: 'marandi'
    },
    'production': {
        adress: 'localhost',
        username: '',
        password: '',
        port: 27017,
        name: 'marandi'
    },
    'test': {}
}[process.env.NODE_ENV || 'development'];

exports.default = config;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _index = __webpack_require__(18);

var _index2 = _interopRequireDefault(_index);

var _users = __webpack_require__(21);

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function register(app) {
    app.use('/', _index2.default);
    app.use('/users', _users2.default);

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handler
    app.use(function (err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });
};

exports.default = register;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(19);

var _index2 = _interopRequireDefault(_index);

var _proxyClient = __webpack_require__(4);

var _proxyClient2 = _interopRequireDefault(_proxyClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(0);
var router = express.Router();

router.get('/', (0, _proxyClient2.default)(_index2.default.getIndex, function (req, res, next) {
  return [res, next];
}));

module.exports = router;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _User = __webpack_require__(3);

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/** 
 * All of the controllers should return Promise function.
 * @param Express res
 * @returns Promise 
 */
exports.getIndex = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(res, next) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt('return', Promise.resolve().then(res.render('index', {
                            title: 'ExpressMVC'
                        })));

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateUsername = validateUsername;
function validateUsername(username) {
    return true;
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _proxyClient = __webpack_require__(4);

var _proxyClient2 = _interopRequireDefault(_proxyClient);

var _user = __webpack_require__(22);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = __webpack_require__(0).Router();
/* GET users listing. */
router.get('/:username', (0, _proxyClient2.default)(_user2.default.getUser, function (req, res, next) {
  return [req.params.username];
}));

router.post('/', (0, _proxyClient2.default)(_user2.default.create, function (req, res, next) {
  return [req.body];
}));

module.exports = router;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _user = __webpack_require__(23);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Get a user by username.
 * @param username a string value that represents user's username.
 * @returns A Promise, an exception or a value. It depends on the service or controller treatment.
 */
exports.getUser = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(username) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!(username === '')) {
                            _context.next = 2;
                            break;
                        }

                        return _context.abrupt('return', new Error('Username can\'t be empty'));

                    case 2:
                        _context.next = 4;
                        return (0, _user.getUser)(username);

                    case 4:
                        return _context.abrupt('return', _context.sent);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();

exports.create = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(params) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        if (!(params.username === '')) {
                            _context2.next = 2;
                            break;
                        }

                        return _context2.abrupt('return', new Error('Username can\'t be empty'));

                    case 2:
                        _context2.next = 4;
                        return (0, _user.createUser)(params);

                    case 4:
                        return _context2.abrupt('return', _context2.sent);

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function (_x2) {
        return _ref2.apply(this, arguments);
    };
}();

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUser = getUser;
exports.createUser = createUser;
exports.isPedram = isPedram;

var _User = __webpack_require__(3);

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUser(username) {
    return _User2.default.find({ username: username }).exec(); // A promise
}

function createUser(params) {
    var username = params.username,
        firstname = params.firstname,
        lastname = params.lastname,
        password = params.password;


    return _User2.default.create({
        username: username,
        firstname: firstname,
        lastname: lastname,
        password: password
    });
}

function isPedram(firstname) {
    return firstname === 'Pedram';
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ })
/******/ ]);