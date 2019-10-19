const database = require('../../config/database');

const userService = () =>{
    const validate = (username, password) => {
        return new Promise(((resolve,reject)=>{
            database.query("SELECT * FROM user where username='" + username + "' AND password='" + password + "'", function (err, result, fields) {
                if (err) throw reject(err);
                if(result.length == 0)
                    resolve(null)
                else
                resolve(result[0]);
              });
        }));  
    }

    return {
        validate,
    };
};


module.exports = userService;