const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: String,
  age: Number,
  grade: String,
});

module.exports = mongoose.model('Student',StudentSchema)