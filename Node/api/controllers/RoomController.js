 
const RoomController = () => {
    const getRoomById = (req, res) => {
        return res.status(200).json({id:req.params.id, name:"My Room",userId:83});
    };
  
    const getAllRooms = (req, res) => {
        var rooms =[];
        for(var i=0;i<10;i++){
            rooms.push({id:i+132,name:"My Room "+i,userId:req.params.userId})
        }
        return res.status(200).json({data:rooms });
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

