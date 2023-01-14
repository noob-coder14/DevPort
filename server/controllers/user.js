const Profile = require("../models/profile");
const User = require("../models/user");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function postUser(req, res) {
    try {
        const salt = await bcrypt.genSalt(10)   
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const user = new Profile({
            'basicInfo.email': req.body.email,
            password: hashedPassword
        })

        const userPass = new User({
            email: req.body.email,
            password: hashedPassword
        })

        res.send(await user.save())
        res.send(await userPass.save())
    //   console.log("Request Body : ",req.body.basicInfo.skillsData)
    //   const result = await Profile.create(req.body);
    //   console.log("Response Body : ",result.basicInfo)
    //   res.status(201);
    //   res.send(result);
    } catch (error) {
      res.status(500);
      console.log(error);
    }

  }

  async function loginUser(req,res){
    try{
        const user = await Profile.findOne({"basicInfo.email": req.body.email})
        const userPass = await User.findOne({email: req.body.email})
        console.log(user)
        if(!user){
            return res.status(404).send({
                message: 'User not found'
            })
        }
        if(!await bcrypt.compare(req.body.password, userPass.password)){
            return res.status(400).send({
                message: 'Invalid password'
            })
        }
        // const token = jwt.sign({_id:user_id}, "secret")
        // console.log(token)
        // res.send(token)
    }
    catch(error){
    res.status(500);
    console.log(error)
    }
  }



module.exports = { postUser,loginUser }