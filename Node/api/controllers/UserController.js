const UserController = () => {
    const create = (req, res) => {
        console.log("CREATE")
      res.send('created a User with without es6 class syntax');
    };
   
    const secure = (req, res) => {
        console.log("secure");
        res.send('created a User with without es6 class syntax');
      };
    return {
      create,
      secure
    };
  };
   
  module.exports=UserController;