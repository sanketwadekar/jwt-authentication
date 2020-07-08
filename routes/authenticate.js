const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const generateToken = require("../jwt/generateToken");
const Users = require("../models/Users");
const e = require("express");

router.post("/login", (req, res, next) => {
  if (Object.keys(req.body).length === 2) {
    const { username, password } = req.body;
    if (username && password) {
      const user = Users.find((element) => element.username === username);
      if (user) {
        bcrypt.compare(password, user.password).then((match) => {
          if (match) {
            const token = generateToken({ username });
            res.cookie("token", token, { maxAge: require('../jwt/options').expiresIn * 1000 });
            res
              .status(200)
              .send(JSON.stringify({ message: "Operation successful" }));
          } else {
            res
              .status(404)
              .send(JSON.stringify({ message: "Invalid credentials" }));
          }
        });
      }
    }
  } else {
    res.status(400).send(JSON.stringify({ message: "Bad request" }));
  }
});

router.post("/register", (req, res, next) => {
  if (Object.keys(req.body).length === 2) {
    const { username, password } = req.body;
    if (username && password) {
      if (Users.find((element) => element.username === username)) {
        return res.status(400).send(JSON.stringify({ message: "Bad request" }));
      } else {
        Users.push({ username, password: bcrypt.hashSync(password, 10) });
        return res.status(200).send(JSON.stringify({ message: "Operation successful" }));
      }
    }
  } else {
    return res.status(400).send(JSON.stringify({ message: "Bad request" }));
  }
});

module.exports = router;
