const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')

/** 
*@description root Route
*@method GET /
*/
route.get('/' , services.login )

route.get('/add-user' , services.add_user)

route.get('/update' , services.update )
route.get('/home' , services.homeRoutes )

//API
route.post("/api/users" , controller.create)
route.get("/api/users" , controller.find)
route.put("/api/users/:id" , controller.update)
route.delete("/api/users/:id" , controller.delete)

module.exports = route