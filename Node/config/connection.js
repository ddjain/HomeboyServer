const development = {
    database: 'mydb-dev',
    username: 'root-dev',
    password: 'root-dev',
    host: 'localhost',
    dialect: 'mysql',
  };
  
  const testing = {
    database: 'mydb-test',
    username: 'root-test',
    password: 'root-test',
    host: 'localhost',
    dialect: 'sqlite',
  };
  
  const production = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST || 'localhost',
    dialect: 'sqlite',
  };
  
  module.exports = {
    development,
    testing,
    production,
  };
  