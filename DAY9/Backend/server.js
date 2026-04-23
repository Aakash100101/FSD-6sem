const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// MongoDB connection
mongoose.connect("mongodb+srv://aakash:abes@crud.nq4q1ur.mongodb.net/?appName=CRUD")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// test route
app.get("/", (req, res) => {
  res.send("API is working");
});

// server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});