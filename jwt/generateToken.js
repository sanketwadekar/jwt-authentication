const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

// const secret = fs.readFileSync(path.join(__dirname,'/secret.txt'));
const secret = fs.readFileSync('./jwt/secret.txt', 
{encoding:'utf8', flag:'r'});

function generateToken(payload){
  try{
  const token = jwt.sign({username: payload.username}, secret, require('./options'));
  return token;
  } catch(err){
    console.log(err);
  }
}

module.exports = generateToken;