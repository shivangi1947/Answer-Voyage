const mongoose = require("mongoose");

const QuesSchema = new mongoose.Schema({
    user:{type: String, required: true},
    question: { type: String, required: true, unique: true },
    category:{type:String ,default:"other"},
    answer:{type: String,default:"Not Answered Yet"}
  });
  
  const Question = mongoose.model("Question", QuesSchema);
  module.exports = Question;