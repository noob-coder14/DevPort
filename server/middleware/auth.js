const jwt = require('jsonwebtoken');
const User = require('../models/user');
const secret = 'shuhat3231';


const authMiddleware = async (req, res, next) => {
  const authHeaders = req.headers['authorization'];
  console.log(req.headers['Authorization'])
  if (!authHeaders) {
    return res
            .status(403)
            .send("You are not authorized!");
  }

  const token = authHeaders.split(' ')[1];
  try {
    const { _id } = jwt.verify(token, secret);
    const user = await User.findOne({ _id });
    if (user){
      req.user = user;
      next();
    } else {
      return res
              .status(401)
              .send('You are not logged in!')
    }
  
  } catch (error) {
    if(error instanceof jwt.TokenExpiredError) {
      res
        .status(401)
        .send('Access token has expired.');
    }
    res.status(500);
  }
};

module.exports = authMiddleware;