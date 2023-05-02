const User = require("../Model/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret_key = "codebreedprofessionr";

async function adminAuth (req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.status(401).send({status:false,message:"unauthorized, You need to login"})
  try {
    jwt.verify(token, secret_key, (err, user) => {
    if (err) return res.status(403).send({authStatus:403, status:false, message:"Token expired"})
    // console.log("token admin auth", user)
    if(user.userRole !=="admin"){
      return res.status(403).send({authStatus:403, status:false, message:"Unauthorized!"})
    }
    req.user = user
    next()
  })
  } catch (error) {
  }
}

module.exports = adminAuth;
