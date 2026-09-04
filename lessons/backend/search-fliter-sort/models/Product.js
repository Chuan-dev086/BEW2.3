const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Toys", "House Appliances", "Electronics"],
    required: true,
  },
  on_promotion: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = model("Product", ProductSchema);

module.exports = Product;
