var Userdb = require('../model/model')

//create a new user
exports.create =  (req,res)=>{
    //validing request
    if(!req.body){
        res.status(400).send({message : "content can not be empty" })
        return ;
    }

    //new user
    const user1 = new Userdb({
        name : req.body.name , 
        email : req.body.email , 
        gender : req.body.gender , 
        status : req.body.status 

    })

    //save user in the database
    user1
    .save(user1)
    .then(data=>{
        res.send(data)
    })
    .catch(err =>{
        res.status(500).send({
            msg1 : err.message || "some error occured while creating a create operation"
        })
    })

}
//retrive & return all / single user(s)
exports.find =  (req,res)=>{
    
}

//update
exports.update =  (req,res)=>{
    
}
//delete
exports.delete =  (req,res)=>{
    
}