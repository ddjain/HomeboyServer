const database = require('../../config/database');

const dbservice = () =>{
    const connect = () => {
        database.connect(function(err) {
        if (err){
            console.log("fail to connect database.")
            return;
        }
        else{
         console.log("Connected to database successfully");
        }
        });
    }

    return {
        connect,
    };
};


module.exports = dbservice;