
const DeviceController = () => {
    const getDevicesByRoom = (req, res) => {
      res.send('DeviceController === > getDevicesByRoom ');
    };
  
    const getDeviceById = (req, res) => {
        res.send('DeviceController :  getAllRooms');
    };

    const addDevice = (req, res) => {
        res.send('DeviceController: addNewRoom');
    };  

    const updateDevice = (req, res) => {
        res.send('DeviceController   deleteRoom');
    }; 

    const deleteDevice = (req, res) => {
        res.send('DeviceController  updateRoom');
    }; 
  
    return {
        getDevicesByRoom,
        getDeviceById,
        addDevice,
        updateDevice,
        deleteDevice
    };
  };
   
  module.exports=DeviceController;

  