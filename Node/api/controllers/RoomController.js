var roomService = require('../services/room.service');
const RoomController = () => {
    const getRoomById = (req, res) => {
        let id = req.params.id;
        roomService().getDeviceByRoom(id).then(function (result) {
            return res.status(200).json({ data: result });
        }, function (err) {
            res.status(400).json(err);
        })

    };

    const getAllRooms = (req, res) => {
        let userId = req.params.userId;
        roomService().getAllRooms(userId).then(function (result) {
            return res.status(200).json({ data: result });
        }, function (err) {
            res.status(400).json(err);
        })
    };

    const addRoom = (req, res) => {
        let room = req.body.room;
        console.log(room);
        roomService().addRoom(room).then(function (result) {
            console.log(result);
            room.id = result.insertId;
            return res.status(200).json({ data: room, msg: "Room added successfully" });
        }, function (err) {
            res.status(400).json(err);
        })
    };

    const deleteRoom = (req, res) => {
        let roomId = req.params.id;
        roomService().deleteRoom(roomId).then(function (result) {
            return res.status(200).json({ data: result, });
        }, function (err) {
            res.status(400).json(err);
        })
    };

    const updateRoom = (req, res) => {

    };

    return {
        getRoomById,
        getAllRooms,
        addRoom,
        deleteRoom,
        updateRoom
    };
};

module.exports = RoomController;

