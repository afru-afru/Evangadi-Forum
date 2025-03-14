const express = require("express");
const router = express.Router();
const dbConnection = require("../db/dbConfige");

const { askquestion,readAllQuestion,readQuestion,editQuestion,deleteQuestion,myQuestion} = require("../controller/questionController");


// insert question
router.post("/ask-questions", askquestion);

// red all question
router.get("/all-questions", readAllQuestion);


// read single question
  router.get('/all-questions/:questionid', readQuestion);


// update single question
router.patch('/edit-questions/:id', editQuestion);

  // Delete single question
router.delete('/all-questions/:id', deleteQuestion)

// my questions
router.get('/my-questions/:userid', myQuestion);


module.exports = router;
