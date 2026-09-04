const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const productRouter = require("./routes/productRoutes");
const { seedDatabase } = require("./models/Product");

// connect to mongo db 
mongoose
  .connect("mongodb://localhost:27017/online_store")
  .then(() => {
    console.log("MongoDB Connected");
    return seedDatabase();
  })
  .then(() => {
    console.log("Database seeded successfully");
  })
  .catch((err) => console.log("Connection error:", err));

// middleware
app.use(express.json());

// routes
app.use("/products", productRouter);

// root routes
app.get("/", (req, res) => {
  res.send("Welcome to our Online Store API!");
});

// start server 
app.listen(PORT, () => {
  console.log(` Server is running at http://localhost:${PORT}`);
});
