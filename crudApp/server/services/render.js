const axios = require('axios')


exports.homeRoutes =  (req ,res)=>{
    //make get request to the api/users
    axios.get("http://localhost:3000/api/users")
    .then(function(response){
        res.render("index" , {users : response.data} )
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.add_user =  (req, res)=>{
    //make post request to the api/users
    res.render("add-user")
}

exports.update = (req, res)=>{
    //make put request to api/users
    res.render("update")
}