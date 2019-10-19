const database = require('../../config/database');

const dbservice = () =>{
    const connect = () => {
        database.connect(function(err) {
        if (err) throw err;
        console.log("Connected to database successfully");
        });
    }

    return {
        connect,
    };
};


module.exports = dbservice;