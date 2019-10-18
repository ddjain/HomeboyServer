/*
Node Library
*/
const express = require('express');
const http = require('http');
const mapRoutes = require('express-routes-mapper');
const bodyParser = require('body-parser')


/*
Server Configuration 
//TODO : Move this routes to seprate file. 
*/

const publicRoutes = require('../config/routes/publicRoute');
var config = require('../config/index');
const mappedOpenRoutes = mapRoutes({'GET /user': 'UserController.create',
                                    'GET /validate/:token': 'UserController.validate',
                                    'GET /login/:username/:password' : 'UserController.login'
                                }, 'controllers/');
const mappedPrivateRoutes = mapRoutes({'GET /password': 'UserController.secure'}, 'controllers/');

const auth = require('./auth/auth.js');

/**
 * express application
 */
const app = express();
app.use('/',express.static('../static/app'))
app.all('/secure/api/*', (req, res, next) => auth(req, res, next));
app.use('/api', mappedOpenRoutes);
app.use('/secure/api', mappedPrivateRoutes);


app.listen(8080, function(){
    console.log('listening on *:8080');
});


