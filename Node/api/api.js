/*
Node Library
*/
const express = require('express');
const http = require('http');
const mapRoutes = require('express-routes-mapper');
const bodyParser = require('body-parser')
const cors = require('cors');

/*
Server Configuration 
//TODO : Move this routes to seprate file. 
*/
var config = require('../config/index');
var dbService = require('./services/database.service');
var roomService = require('./services/room.service');

/*
Route Configuration 
//TODO : Move this routes to seprate file. 
*/
const mappedOpenRoutes = mapRoutes(config.publicRoutes, 'controllers/');
const mappedPrivateRoutes = mapRoutes(config.privateRoute, 'controllers/');
const auth = require('./auth/auth.js');


/**
 * express application
 */
const app = express();
app.use('/*', cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/', express.static('../static/app'))
app.all('/api/auth/*', (req, res, next) => auth(req, res, next));
app.use('/api', mappedOpenRoutes);
app.use('/api/auth/', mappedPrivateRoutes);

app.listen(8080, function () {
    console.log('listening on *:8080');
});

