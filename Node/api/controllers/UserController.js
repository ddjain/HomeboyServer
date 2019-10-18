const authService = require('../services/auth.service');

const UserController = () => {
    const create = (req, res) => {
      res.send('created a User with without es6 class syntax');
    };
   
    const secure = (req, res) => {
        res.send('created a User with without es6 class syntax');
      };

      const login = (req,res)=>{
        //TODO: Send data through body, validate user in DB, if user valid return JWT Token
      }

      const validate = (req,res)=>{
       //TODO: Validate JWT Token came over Authorization Header
      }

    return {
      create,
      secure,
      login,
      validate
    };
  };
   
  module.exports=UserController;