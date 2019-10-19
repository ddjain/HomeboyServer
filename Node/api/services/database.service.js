const database = require('../../config/database');

const dbservice = () =>{
    const connect = () => {
        database.connect(function(err) {
            if (err) throw err;
            console.log("Application connected to database");
        });
    }

    return {
        connect,
    };
};


module.exports = dbservice;