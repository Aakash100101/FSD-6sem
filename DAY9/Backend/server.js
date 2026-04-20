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
mongoose.connect("mongodb://127.0.0.1:27017/crudApp")
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