const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect(
  "mongodb+srv://feedback:mongodb@cluster0.dhcdbyg.mongodb.net/feedback",
  {}
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to database");
});

// Define a Mongoose schema for user
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

// Define a Mongoose schema for queries
const querySchema = new mongoose.Schema({
  name: String,
  email: String,
  countryCode: String,
  phone: String,
  query: String,
});
const Query = mongoose.model("Query", querySchema);

// Define a Mongoose schema for student feedback
const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  quality: String,
  recommendation: String,
  comment: String,
});
const Student = mongoose.model("Student", studentSchema);

// Define a Mongoose schema for product review
const productSchema = new mongoose.Schema({
  fName: String,
  lName: String,
  email: String,
  phoneNumber: String,
  quality: String,
  value: String,
  easyToUse: String,
  overAllUse: String,
  recProduct: String,
  feedback: String,
});
const Product = mongoose.model("Product", productSchema);

// Define a Mongoose schema for training feedback
const trainingSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  enjoyedMost: String,
  keyLearnings: String,
  confusingSubject: String,
  trainerRating: String,
  overallRating: String,
  additionalComments: String,
});
const Training = mongoose.model("Training", trainingSchema);

// Route to handle signup form data
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" }); //A status code of 409 typically indicates a conflict error. In HTTP, status code 409 (Conflict) is used to indicate that the request could not be completed due to a conflict with the current state of the resource.
    }

    // Create a new user document
    const newUser = new User({ email, password });
    // Save the user document to the database
    await newUser.save();
    // console.log('User created:', newUser);
    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Signup failed" }); //500 means server error
  }
});

// Route to handle login form data
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the password is correct
    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Login successful
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Login failed" });
  }
});

app.post("/feedback/queryform", async (req, res) => {
  const { name, email, countryCode, phone, query } = req.body; // Extracting data from req.body

  try {
    // Create a new query document
    const newQuery = new Query({ name, email, countryCode, phone, query });

    // Save the query document to the database
    await newQuery.save();

    res.status(201).json({ message: "Query submitted successfully" });
  } catch (error) {
    console.error("Error saving query:", error);
    res.status(500).json({ message: "Failed to submit query" });
  }
});

app.post("/feedback/studentfeedback", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    quality,
    recommendation,
    comment,
  } = req.body; // Extracting data from req.body

  try {
    // Create a new query document
    const newStudent = new Student({
      firstName,
      lastName,
      email,
      phone,
      quality,
      recommendation,
      comment,
    });

    // Save the query document to the database
    await newStudent.save();

    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error saving form:", error);
    res.status(500).json({ message: "Failed to submit form" });
  }
});

app.post("/feedback/productreview", async (req, res) => {
  const {
    fName,
    lName,
    email,
    phoneNumber,
    quality,
    value,
    easyToUse,
    overAllUse,
    recProduct,
    feedback,
  } = req.body; // Extracting data from req.body

  try {
    // Create a new query document
    const newProduct = new Product({
      fName,
      lName,
      email,
      phoneNumber,
      quality,
      value,
      easyToUse,
      overAllUse,
      recProduct,
      feedback,
    });

    // Save the query document to the database
    await newProduct.save();

    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error saving form:", error);
    res.status(500).json({ message: "Failed to submit form" });
  }
});

app.post("/feedback/trainingfeedback", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    enjoyedMost,
    keyLearnings,
    confusingSubject,
    trainerRating,
    overallRating,
    additionalComments,
  } = req.body; // Extracting data from req.body

  try {
    // Create a new query document
    const newTraining = new Training({
      firstName,
      lastName,
      email,
      phoneNumber,
      enjoyedMost,
      keyLearnings,
      confusingSubject,
      trainerRating,
      overallRating,
      additionalComments,
    });

    // Save the query document to the database
    await newTraining.save();

    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error saving form:", error);
    res.status(500).json({ message: "Failed to submit form" });
  }
});

app.get('/admin/queryform', async (req, res) => {
  try {
    const queries = await Query.find({});
    res.json(queries);
  } catch (err) {
    console.error('Error fetching queries:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/admin/trainingfeedback', async (req, res) => {
  try {
    const trainings = await Training.find({});
    res.json(trainings);
  } catch (err) {
    console.error('Error fetching trainings:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/admin/productreview', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.error('Error fetching queries:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/admin/studentfeedback', async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (err) {
    console.error('Error fetching queries:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/admin/queryform/count', async (req, res) => {
  try {
    const count = await Query.countDocuments({});
    res.json({ count });
  } catch (err) {
    console.error('Error fetching count:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/admin/studentfeedback/count', async (req, res) => {
  try {
    const count = await Student.countDocuments({});
    res.json({ count });
  } catch (err) {
    console.error('Error fetching count:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/admin/productreview/count', async (req, res) => {
  try {
    const count = await Product.countDocuments({});
    res.json({ count });
  } catch (err) {
    console.error('Error fetching count:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/admin/trainingfeedback/count', async (req, res) => {
  try {
    const count = await Training.countDocuments({});
    res.json({ count });
  } catch (err) {
    console.error('Error fetching count:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
