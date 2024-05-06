const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://feedback:mongodb@cluster0.dhcdbyg.mongodb.net/feedback', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to database');
});

// Define a Mongoose schema for user
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});
const User = mongoose.model('User', userSchema);

// Define a Mongoose schema for queries
const querySchema = new mongoose.Schema({
  name: String,
  email: String,
  countryCode: String,
  phone: String,
  query: String
});
const Query = mongoose.model('Query', querySchema);

// Route to handle signup form data
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' }); //A status code of 409 typically indicates a conflict error. In HTTP, status code 409 (Conflict) is used to indicate that the request could not be completed due to a conflict with the current state of the resource.
    }

    // Create a new user document
    const newUser = new User({ email, password });
    // Save the user document to the database
    await newUser.save();
    // console.log('User created:', newUser);
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Signup failed' }); //500 means server error
  }
});

// Route to handle login form data
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password is correct
    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Login successful
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Login failed' });
  }
});

app.post('/feedback/queryform', async (req, res) => {
  const { name, email, countryCode,phone, query } = req.body; // Extracting data from req.body

  try {
    // Create a new query document
    const newQuery = new Query({ name, email,countryCode, phone, query });

    // Save the query document to the database
    await newQuery.save();

    res.status(201).json({ message: 'Query submitted successfully' });
  } catch (error) {
    console.error('Error saving query:', error);
    res.status(500).json({ message: 'Failed to submit query' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
