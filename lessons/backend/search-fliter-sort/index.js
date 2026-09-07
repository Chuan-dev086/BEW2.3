const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
const productRouter = require("./routes/product");

mongoose
  .connect("mongodb://localhost:27017/search-filter-sort")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

const corsHandler = cors({
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
  preflightContinue: true,
});

app.use(corsHandler);
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Our AnythingStore API!");
});

app.listen(PORT, () => [
  console.log(`Server is running at http://localhost:${PORT}`),
]);
