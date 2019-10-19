const authService = require('../services/auth.service');

const UserController = () => {
      const login = (req,res)=>{
        let username = req.body.username;
        let password = req.body.password;
        //TODO: get data from database.
        if(username =="admin" && password =="admin"){
          return res.status(200).json({userId:1234,token:"ThisIsAuthToken", msg: 'User is valid.' });
        }
        else{
          return res.status(401).json({ msg: 'User is invalid.' });  
        }
      };
    return {
      login,
    };
  };
   
  module.exports=UserController;