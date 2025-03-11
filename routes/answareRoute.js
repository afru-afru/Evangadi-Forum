const express = require("express");
const router = express.Router();

const { giveAnswer, readAllAnswer, singleAnswer, editAnswer, deleteAnswer, myAnswer} = require("../controller/answerController");

// give/post answer
router.post("/giveanswer/:questionid", giveAnswer);

// read all answer
router.get("/getanswers/:questionid", readAllAnswer);

// read single answer
router.get("/getanswer/:answerid", singleAnswer);

// updet single answer
router.patch("/updateAnswer/:answerid", editAnswer);

// delete single answer
router.delete("/deleteanswer/:answerid", deleteAnswer);

// red my answer
router.get("/my-answer/:userid", myAnswer);
module.exports = router;