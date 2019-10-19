module.exports = (req,res,next) =>{
    if (req.header('Authorization') && req.header('Authorization')=="ThisIsAuthToken") {
        next();
    } else{
        return res.status(401).json({ msg: 'No Authorization was found' });
    }

};