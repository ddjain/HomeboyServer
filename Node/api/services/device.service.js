const database = require('../../config/database');

const roomService = () => {

    const executeQuery = (sql) => {
        return new Promise(((resolve, reject) => {
            database.query(sql, function (err, result, fields) {
                if (err) throw reject(err);
                resolve(result);
            });
        }));
    }
    const getDeviceByRoom = (roomId) => {
        var sql = "SELECT * FROM devices where roomId = " + roomId;
        return executeQuery(sql)
    }

    const addDevice = (device) => {
        let sql = "INSERT INTO devices (name,status,roomId) VALUES ('" + device.name + "', '" + device.status + "','"+device.roomId+"')";
        return executeQuery(sql)
    }

    const deleteDevice = (id) => {
        let sql = "DELETE FROM DEVICES WHERE ID="+id;
        return executeQuery(sql)
    }
    return {
        getDeviceByRoom,
        addDevice,
        deleteDevice
    };
};


module.exports = roomService;