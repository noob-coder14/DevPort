const Profile = require("../models/profile");
const User = require("../models/user");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { response } = require("express");
const secret = "shuhat3231"
async function postUser(req, res) {
const email = ""
    try {
        console.log("postuser")
        const salt = await bcrypt.genSalt(10)   
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser){
            console.log('Got an error in the register controller')
            return res
                    .status(400)
                    .send({ error: '401', message: 'User already exists' });
        }
        const user = new Profile({
            'basicInfo.email': req.body.email,
            // password: hashedPassword
        })

        const userPass = new User({
            email: req.body.email,
            password: hashedPassword
        })

        await user.save()
        const {_id} = await userPass.save()
        
        const accessToken = jwt.sign({ _id }, secret, { expiresIn: "7d" });
        res.setHeader("Authorization","Bearer "+accessToken)
        res.send("Successfully added user")
    //   console.log("Request Body : ",req.body.basicInfo.skillsData)
    //   const result = await Profile.create(req.body);
    //   console.log("Response Body : ",result.basicInfo)
    //   res.status(201);
    //   res.send(result);
    } catch (error) {
      res.status(500);
      console.log(error);
      res.send("Can't create users")
    }

  }

//   async function loginUser(req,res){
//     try{
//         const user = await Profile.findOne({"basicInfo.email": req.body.email})
//         const userPass = await User.findOne({email: req.body.email})
//         console.log(user)
//         if(!user){
//             return res.status(404).send({
//                 message: 'User not found'
//             })
//         }
//         if(!await bcrypt.compare(req.body.password, userPass.password)){
//             return res.status(400).send({
//                 message: 'Invalid password'
//             })
//         }
//         // const token = jwt.sign({_id:user_id}, "secret")
//         // console.log(token)
//         // res.send(token)
//     }
//     catch(error){
//     res.status(500);
//     console.log(error)
//     }
//   }

async function loginUser (req, res){
  try {
    console.log("into login route")
    const { email, password } = req.body;
    if (!email) {
      res
        .status(401)
        .send("Invalid email!");
    } else if (!password)  {
      res
        .status(401)
        .send("Invalid password!");
    } 
    
    const user = await User.findOne({ email: email }); 
    if(user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        const accessToken = jwt.sign({ _id: user._id }, secret, { expiresIn: "7d" });
        res
          .setHeader("Authorization", "Bearer " + accessToken)
          .status(200)
          .send({ status: '200', message: 'Successfully LOGGED IN',user});
      } else {
        res
          .status(401)
          .send("Incorrect credentials.");
    }
    } else {
      res
        .status(403)
        .send("You are not registered yet.");
    }
    
  } catch (error) {
    res
      .status(401)
      .send({ error: '401', message: 'Incorrect username or password' });
  }
};



module.exports = { postUser,loginUser }