const connection = {
  db: process.argv[2],
  username: process.argv[3],
  password: process.argv[4],
  host: process.argv[5],
  port:process.argv[6],
};
module.exports = connection;