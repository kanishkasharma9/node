const express=require('express')
const router=express.Router();
const logincontroller=require('../controllers/logincontroller')

router.use(express.urlencoded({ extended:false }))

router.get('/',(req,res)=>{
    res.render('home')
    
})



router.get('/login',(req,res)=>{
    logincontroller.login(req,res)
})

router.get('/users',(req,res)=>{//ye users.Foreach vala hai
    logincontroller.getUsers(req,res)
})

router.post('/add/user',(req,res)=>{
    logincontroller.login(req,res)
})
router.post('/login/user',(req,res)=>{
    logincontroller.loginUser(req,res)
})
router.get('/registeration',(req,res)=>{
    logincontroller.register(req,res)
})

module.exports=router