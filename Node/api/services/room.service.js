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
    const getRoomById = (id) => {
        var sql = "SELECT * FROM rooms where id = " + id;
        return executeQuery(sql)
    }

    const getAllRooms = (userId) => {
        var sql = "SELECT * FROM rooms where userId = " + userId;
        return executeQuery(sql)
    }

    const addRoom = (room) => {
        let sql = "INSERT INTO rooms (name, userId) VALUES ('" + room.name + "', '" + room.userId + "')";
        return executeQuery(sql)
    }

    const deleteRoom = (roomId) => {
        let sql = "DELETE FROM rooms WHERE id=" + roomId;
        return executeQuery(sql);
    }

    return {
        getRoomById,
        getAllRooms,
        addRoom,
        deleteRoom
    };
};


module.exports = roomService;