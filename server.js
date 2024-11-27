const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("./config");
const app = express();
const PORT = 4000; // Change the port to your desired port number

const User = require('./models/User');

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static("public")); // Serve static files first

app.use(bodyParser.json());

// Your routes for signup and login will go here

const authRoutes = require("./routes/auth");

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const app = express();
// const PORT = 4000;

// mongoose.connect('mongodb://localhost/myapp', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// app.use(bodyParser.json());

// // User model (assuming you have one)
// const User = require('./models/User');

// // Registration route
// app.post('/auth/signup', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Check if the user with the same email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already in use' });
//     }

//     // Hash the password before saving it
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({ name, email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Login route
// app.post('/auth/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find the user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     // Compare the provided password with the hashed password
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     // Create and return a JWT token
//     const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
