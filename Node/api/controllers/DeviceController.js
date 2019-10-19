var deviceService = require('../services/device.service');
const DeviceController = () => {
    const getDevicesByRoom = (req, res) => {
        let roomId = req.params.roomId;
        deviceService().getDeviceByRoom(roomId).then(function (result) {
            return res.status(200).json({ data: result, });
        }, function (err) {
            res.status(400).json(err);
        })
    };
  
    const getDeviceById = (req, res) => {
        res.send('DeviceController :  getAllRooms');
    };

    const addDevice = (req, res) => {
            let device = req.body.device;
            console.log(device);
            deviceService().addDevice(device).then(function (result) {
                console.log(result);
                device.id = result.insertId;
                return res.status(200).json({ data: device, msg: "device added successfully" });
            }, function (err) {
                res.status(400).json(err);
            })
    };  

    const updateDevice = (req, res) => {
        res.send('DeviceController   updateDevice');
    }; 

    const deleteDevice = (req, res) => {
        let deviceId = req.params.id;
        deviceService().deleteDevice(deviceId).then(function (result) {
            return res.status(200).json({ data: result, msg: "device deleted successfully" });
        }, function (err) {
            res.status(400).json(err);
        })
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

  