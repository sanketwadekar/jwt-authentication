const express = require("express");
const questions = require("../questions");
const router = express.Router();
const verifyToken = require('../jwt/verifyToken');

router.get("/questions", verifyToken, (req, res, next) => {
  res.status(200).send(
    JSON.stringify( 
      questions.map((q) => {
        return {text:q.text, id:q.id, choices:q.choices};
      }).sort(() => 0.5 - Math.random())
    )
  );
});

router.post("/result", verifyToken, (req, res, next) => {
  const answers = req.body;
  let score = 0;
  questions.forEach((question) => {
    if (question.correct === answers[question.id]) {
      score++;
    }
  });
  res.status(200).send(JSON.stringify({ score }));
});

module.exports = router;
