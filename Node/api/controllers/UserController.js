const authService = require('../services/auth.service');
const userService =require('../services/user.service')
const UserController = () => {
      const login = (req,res)=>{
        let username = req.body.username;
        let password = req.body.password;
        userService().validate(username,password).then(function(result){
          if(result != null){
            return res.status(200).json({userId:result.id,token:"ThisIsAuthToken", msg: 'User is valid.' });
          }
          else{
            return res.status(401).json({ msg: 'User is invalid.' });  
          }
        })
      };
    return {
      login,
    };
  };
   
  module.exports=UserController;
