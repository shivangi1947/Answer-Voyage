const mongoose = require("mongoose");

const AnsSchema = new mongoose.Schema({
    
    question:{type: String, required: true},
    answer:{type: String, required: true}
    
  });
  
  const Answer = mongoose.model("Answer", AnsSchema);
  module.exports = Answer;