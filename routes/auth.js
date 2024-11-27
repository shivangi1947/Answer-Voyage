const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/User");
const Question = require("../models/Question");
const Answer = require("../models/Answers");
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));


var use;
// router.get('/', (req, res) => {
//   res.sendFile(__dirname + '/auth/login.html'); // Replace 'login.html' with your actual HTML file
// });

// router.get("/home",async(req,res)=>{
//   try {

//     const limit = 6; // Number of documents to retrieve at a time
//     // const response = await fetch('http://localhost:4000/home');
//     //const data = await response.json();
//     // res.json(data);
//     //const filteredData = await User.findOne();
//     const filteredData = await User.find().limit(limit).exec();
//     console.log(filteredData)

//     console.log({User:filteredData.username});
//     return res.json({User:filteredData.username});
    
//   } catch (error) {
//     console.error('Error:', error);
//     return res.status(500).json({ message: 'Server Error' }); // Handle errors and send a response
//   }

    
// });

router.get("/home", async (req, res) => {
  try {
    const limit = 6; // Number of documents to retrieve at a time

    // Fetch up to 6 user documents from the User collection
    const filteredData = await Question.find().sort({_id:-1}).limit(limit).exec();
    const filter = await Question.find().sort({_id:-1}).limit(limit).exec();
    console.log(filteredData);

    // Create an array of usernames from the filtered data
    const usernames = filteredData.map((user) => user.question);
    const userId = filteredData.map((user) => user.user);
    const uses = filter.map((users) => users.answer);
    const cat = filter.map((users) => users.cat);
    console.log({ Question: usernames });
    console.log({Answer: userId});
    console.log({Ans: uses});

    // Send the array of usernames as JSON response
    return res.json({ Question: usernames ,Answer:userId ,Ans: uses,Catogery: cat});
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Server Error' });
  }
});
router.get("/profile", async (req, res) => {
  try {
    const filteredData = await Question.findOne(use);
    
    console.log(filteredData);
    const usernames = filteredData.map((user) => user.username);
    const userId = filteredData.map((user) => user.email);
    
    console.log({ Question: usernames });
    console.log({Answer: userId});
    

    // Send the array of usernames as JSON response
    return res.json({ User: usernames ,Email:userId });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Server Error' });
  }
});


router.post('/signup', async (req, res) => {
    try {
      const {username,email, password } = req.body;
      console.log(email);
      // Check if the user with the same email already exists
      const existingUser = await User.findOne({email});
      use=email;
      console.log(existingUser);
      if (existingUser===email) {
        return res.status(400).json({ message: 'Email already in use' });
      }
  
      // Hash the password before saving it
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({username,email, password: hashedPassword });
      await newUser.save();
      res.redirect('/home');

      //res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// router.post('/auth/login', (req, res) => {
//   let  username = req.body.username;
//     let password =req.body.password;
//     console.log(username);
//     console.log(password);
//   // Perform authentication logic here, e.g., check credentials in a database.
//   // If authentication is successful, return a success response.
//   // If authentication fails, return an error response.
// });
// Login Route
router.post("/login", async (req, res) => {
    console.log(req.body);
  try {
    let  username = req.body.username;
    let  email = req.body.email;
    let password =req.body.password;
    use=email;
    console.log(username);
    console.log(password);
    // Find the user by username in the database
    
    const user = await User.find({email});
    console.log(user);
    
    
    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user[0].password);
    console.log(user[0].password);
    console.log(passwordMatch);
    if (!passwordMatch) {
        //return res.status(401).json({ message: "Invalid password" });
        res.redirect('/');
      }
    
    if(passwordMatch ){
        console.log("success");
        
        // res.send(__dirname + '/../public/login.html');
        //res.sendFile(__dirname + '/auth/zindex');
        //res.sendFile(dirname__+'http://localhost:4000/zindex.html');
        res.redirect('/home');
        
        
        
    }
    //Create a JWT token
    //const token = jwt.sign({ userId: user._id }, config.JWT_SECRET);
    // //res.sendFile(__dirname + '/zindex.html');
    // res.json({ token });
  
    
    } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post("/home/register", async (req, res) => {
  console.log(req.body);
  try {
    const user=use;
    console.log(user)
    let question =req.body.question;
    console.log(question);
    
    const newQuestion = new Question({user,question});
    await newQuestion.save();
    res.redirect('/home'); 
    //Create a JWT token
    //const token = jwt.sign({ userId: user._id }, config.JWT_SECRET);
    // //res.sendFile(__dirname + '/zindex.html');
    // res.json({ token });

  } catch (error) {
  res.status(404).json({ error: error.message });
}
});

router.post("/home/answer", async (req, res) => {
  console.log(req.body);
  try {
   
    let question =req.body.question;
    let category =req.body.category;
    let answer =req.body.answer;
    console.log(question);
    const existingUser = await Question.findOne({question});
    existingUser.answer=answer;
    existingUser.category=category;
    await existingUser.save();
    res.redirect('/home'); 
    //Create a JWT token
    //const token = jwt.sign({ userId: user._id }, config.JWT_SECRET);
    // //res.sendFile(__dirname + '/zindex.html');
    // res.json({ token });

  } catch (error) {
  res.status(404).json({ error: error.message });
}
});
module.exports = router;