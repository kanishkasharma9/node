const Users = require('../models/Users')

const addUser = async (req, res) => {
    try {
        let user = new Users(req.body);
        await user.save()
        console.log('added sucessfully');
        res.render('login')
    } catch (err) {
        console.log("error : ", err);
    }
}
const getUsers = async (req, res) => {
    try { 
        let users = await Users.find({})
        res.render('entrydetails', {
            users: users
        }) 
    } catch (err) {
        console.log("error : ", err);
    }
}

const login = async (req, res) => {
    try {
        res.render('login')
    } catch (err) {
        console.log("error : ", err);
    }
}
const loginUser = async (req, res) => {
    try {
        let email = req.body.email
        let pwd = req.body.password
        console.log(pwd);
        
        let check = await Users.findOne({ email: email })
        if (check.password===pwd) {
            let users = await Users.find({})
            res.render('entrydetails', {
                users: users
            })
        }else{
            res.render('login')
        }
    } catch (err) {
        console.log("error : ", err);
    }
}
const register = async (req, res) => {
    try {
        res.render('registeration')
    } catch (err) {
        console.log("error : ", err);
    }
}

module.exports = {
    addUser,
    getUsers,
    loginUser,
    login,
    register
}