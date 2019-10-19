 const privateRoute = {
    'GET /room/:id': 'RoomController.getRoomById',
    'GET /rooms/:userId': 'RoomController.getAllRooms',
    'POST /room' : 'RoomController.addNewRoom',
    'DELETE /room/:id' : 'RoomController.deleteRoom',
    'POST /room' : 'RoomController.updateRoom',
    'GET /device/:roomId': 'DeviceController.getDevicesByRoom',
    'GET /device/:id'  : 'DeviceController.getDeviceById',
    'POST /device' : 'DeviceController.addDevice',
    'DELETE /device' : 'DeviceController.deleteDevice',
    'PUT /device' : 'DeviceController.updateDevice'
}
module.export = privateRoute;