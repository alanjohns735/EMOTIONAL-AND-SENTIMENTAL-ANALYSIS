
const User = require('../models/FormData')
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken');

var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])[A-Za-z\d\S]{8,}$/;




const test = (req, res) => {
    res.json('test is workinggggg')
}

const registerUser = async (req, res) => {
    try {
        const {name, email, password, age, gender} = req.body;
        if(!name) {
            return res.json({
                error: 'Name is required'
            })
        };
        if(!age) {
            return res.json({
                error: 'Age is required'
            })
        };
        if(age<13) {
            return res.json({
                error: 'User must be atleast 13 years old'
            })
        };
        if(age>100) {
            return res.json({
                error: 'Age should be maximum 100'
            })
        };
        if(!gender) {
            return res.json({
                error: 'Gender is required'
            })
        };
        if(!email) {
            return res.json({
                error: 'Email is required'
            })
        };
        if(!password) {
            return res.json({
                error: 'Password required'
            })
        };
        if(!(pattern.test(password))) {
            return res.json({
                error: "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long."
            })
        };
        const exist = await User.findOne({email});
        if(exist) {
            return res.json({
                error: 'Email already registered'
            })
        }

        const hashedPassword = await hashPassword(password)

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            age,
            gender,
        })
        return res.json(user)
    } catch (error) {
        console.log(error)   
    }
}


const loginUser = async ( req, res) => {
    try {
        const {email, password} = req.body;
        if(!email) {
            return res.json({
                error: 'Email is required'
            })
        };
        const user = await User.findOne({email});
        if(!user) {
            return res.json({
                error: 'Use not found'
            })
        }
        if(!password) {
            return res.json({
                error: 'Password required'
            })
        };
        const match = await comparePassword(password, user.password)
        if(match) {
           jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err,token) => {
            if(err) throw err;
            res.cookie('token',token).json(user)
           })
        }
        if(!match) {
            res.json({
                error: 'Incorrect password'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const getProfile =(req, res) => {
    const {token} =req.cookies
    if(token) {
        jwt.verify(token,process.env.JWT_SECRET,{}, (err,user) => {
            if(err) throw err;
            res.json(user)
        })
    }else {
        res.json(null)
    }
}



module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}