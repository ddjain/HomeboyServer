var roomService = require('../services/room.service');
const RoomController = () => {
    const getRoomById = (req, res) => {
        return res.status(200).json({id:req.params.id, name:"My Room",userId:83});
    };
  
    const getAllRooms = (req, res) => {
        let userId = req.params.userId;
        roomService().getAllRooms(userId).then(function(result){
            console.log(result);
            return res.status(200).json({data:result });
        },function(err){
            res.status(400).json(err);
        })
    };

    const addRoom = (req, res) => {
        res.send('RoomController :  deleteRoom');
    }; 

    const deleteRoom = (req, res) => {
        res.send('RoomController   deleteRoom');
    }; 
    
    const updateRoom = (req, res) => {
        res.send('RoomController: addNewRoom');
    };  

    return {
        getRoomById,
        getAllRooms,
        addRoom,
        deleteRoom,
        updateRoom
    };
  };
  
  module.exports=RoomController;

