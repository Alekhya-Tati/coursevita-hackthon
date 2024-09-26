const express = require('express')
const u =require('../controller/userController.js')


const route =express.Router();

route.post("/user",u.create);
route.get("/users",u.getAllUsers);
route.get("/user/:id",u.getUserId);
route.put("/update/user/:id",u.update);
route.delete("/delete/user/:id",u.delete);

module.exports=route;
