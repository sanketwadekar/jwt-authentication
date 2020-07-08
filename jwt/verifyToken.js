const jwt = require("jsonwebtoken");
const fs = require('fs');

const secret = fs.readFileSync('./jwt/secret.txt', 
{encoding:'utf8', flag:'r'});

function verifyToken(req, res, next) {
  try {
    token = jwt.verify(req.cookies.token, secret);
    return next();
  }
  catch(err){
    if( err instanceof jwt.JsonWebTokenError ){
      return res.status(401).end();
    }
    return res.status(400).end();
  }
}

module.exports = verifyToken;