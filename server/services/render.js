const axios = require('axios')
const { json } = require('body-parser')
const jwt = require('jsonwebtoken');



exports.homeRoutes =  (req ,res)=>{
    //make get request to the api/users
    if(req.session.user){
        axios.get("http://localhost:3000/api/users")
        .then(function(response){
            res.render("index" , {users : response.data} )
        })
        .catch(err=>{
            res.send(err)
        })
    }else{
        res.redirect('/')
    }
}
    
    


exports.add_user =  (req, res)=>{
    //make post request to the api/users
     res.render("add-user")
     
}

exports.update = (req, res)=>{
    axios.get("http://localhost:3000/api/users" , {params : {id : req.query.id}})
    .then(function(infos){
        res.render("update" , {user : infos.data})
    })
    .catch(err=>{
        res.send(err)
    })
}
exports.traitements = (req , res)=>{
    axios.get("http://localhost:3000/api/users")
    .then(function(response){
        res.render("traitements" , {users : response.data} )
    })
    .catch(err=>{
        res.send(err)
    })
}
exports.login = (req , res)=>{
   
    res.render("login")
}