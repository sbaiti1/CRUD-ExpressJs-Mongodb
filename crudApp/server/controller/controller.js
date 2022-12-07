var Userdb = require('../model/model')
const jwt = require('jsonwebtoken');
const { default: axios } = require('axios');
let d = new Date(Date.now()) ;
let date = d.toLocaleDateString() ; 
let hour = `${d.getHours()} : ${d.getMinutes()}`
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
        status : req.body.status ,
        traitements : [ [{price : req.body.price} , {docName : req.body.docName} , {date : date , hour : hour   }] ]

    })

    //save user in the database
    user
    .save(user)
    .then(data=>{
        
        
        res.redirect('/add-user')
    })
    .catch(err =>{
        res.status(500).send({
            msg1 : err.message || "some error occured while creating a create operation"
        })
    })

}
//retrive & return all / single user(s)
exports.find =  (req,res)=>{
    
    if(req.query.id){
        const id = req.query.id 
        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({msg : "user not found"})
            }else{
                res.send(data)
            }
        })
        .catch(err=>res.status(500).send({msg : "error retriving user"}))
    }
    else{

        Userdb.find()
        .then(user=>res.send(user))
        .catch(err=>{res.status(500).send({msg2 : err.message || "error while getting data  "})})
    }
}

//update
exports.update =  (req,res)=>{
    if(!req.body){
        
        return res
        .status(400)
        .send({message : "data to update can not be empty" })
        
    }
    
    const id = req.params.id ;
    console.log(" again updatiiiing....");
    console.log(`here's the body : ${JSON.stringify(req.body)}`);
    Userdb.findByIdAndUpdate(id , req.body)
    .then(data =>
        {
            if(!data){
                console.log("data is empty");
                res.status(400).send({msg : `cannot update user ${id}` })
            }else{
                res.send(data)
                console.log("data sent" + data);
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
exports.login = (req,res)=>{
    const {email , pwd} = req.body
    if(email === 'admin@gmail.com' && pwd === 'admin'){
        const user = {email : email}
        req.session.user = user;
        req.session.save();
        return res.redirect('/home')
       
    }else{
        res.send('email or pwd not valid')
    }
}