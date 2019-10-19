const authService = require('../services/auth.service');

module.exports = (req,res,next) =>{
    if (req.header('Authorization')!=null){
        var token = req.header('Authorization');
        authService().verify(token,(err, thisToken) => {
            if (err) return res.status(401).json({ err });
            req.token = thisToken;
            return next();
        })
       
    } else{
        return res.status(401).json({ msg: 'No Authorization was found' });
    }

};