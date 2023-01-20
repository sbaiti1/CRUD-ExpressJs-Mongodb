
exports.auth = (req,res,next)=>{
    //GET Auth Header Value
    const bearerHeader = req.headers['authorization']
    //check if bearer if undefined
    if(typeof bearerHeader !=='undefined'){
        //split at the space
        const bearer = bearerHeader.split(' ')
        //get token from array
        const bearerToken = bearer[1]
        //set the token
        req.token = bearerToken
        //Next middleware
        console.log('middleware...');
        console.log(req.headers);

        next()
    }else{
        //forbiden
        res.sendStatus(403)
        
    }
}