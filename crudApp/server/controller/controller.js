var Userdb = require('../model/model')

//create a new user
exports.create =  (req,res)=>{
    //validing request
    if(!req.body){
        res.status(400).send({message : "content can not be empty" })
        return ;
    }

    //new user
    const user = new Userdb({
        name : req.body.name , 
        email : req.body.email , 
        gender : req.body.gender , 
        status : req.body.status 

    })

    //save user in the database
    user
    .save(user)
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
    Userdb.find()
    .then(user=>res.send(user))
    .catch(err=>{res.status(500).send({msg2 : err.message || "error while getting data  "})})
}

//update
exports.update =  (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message : "data to update can not be empty" })
        
    }

    const id = req.params.id ;
    Userdb.findByIdAndUpdate(id , req.body)
    .then(data =>
        {
            if(!data){
                res.status(400).send({msg : `cannot update user ${id}` })
            }else{
                res.send(data)
            }
        })
    .catch(err=>{
        res.status(500).send({msg : "error update user"})
    })
    
}
//delete
exports.delete =  (req,res)=>{
    const id = req.params.id ;
    Userdb.findByIdAndDelete(id)
    .then(data =>
        {
            if(!data){
                res.status(400).send({msg : `cannot delete user ${id}` })
            }else{
                res.send("user was deleted successfully !")
            }
        })
    .catch(err=>{
        res.status(500).send({msg : "error delete user"})
    })

}