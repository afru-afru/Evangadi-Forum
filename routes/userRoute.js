const express=require("express");
const router=express.Router()
const authMiddleware=require('../middleware/authMiddleware')

//userControllers
const {register,login,check}=require('../controller/userController')

//register route
router.post('/register',register)

//login
router.post('/login',login);


//checck user
router.get('/check',authMiddleware,check)

module.exports=router