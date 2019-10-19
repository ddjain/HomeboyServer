var mysql = require('mysql');
const path = require('path');
const connection = require('./connection');

const database = mysql.createConnection({
  host: connection.host,
  user: connection.username,
  password: connection.password,
  database: connection.db
});

module.exports = database;
