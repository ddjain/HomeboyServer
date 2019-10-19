const database = require('../../config/database');

const roomService = () =>{
    const getAllRooms = (userId) => {
        return new Promise(((resolve,reject)=>{
            database.query("SELECT * FROM rooms where userId = " + userId , function (err, result, fields) {
                if (err) throw reject(err);
                    resolve(result);
              });
        }));  
    }

    return {
        getAllRooms,
    };
};


module.exports = roomService;