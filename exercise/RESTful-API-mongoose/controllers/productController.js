const { Product } = require("../models/Product");

// create product
exports.createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.status(201).json(newProduct);
};

// get all product with category filter
exports.getAllProducts = async (req, res) => {
  const { category } = req.query;
  const query = category ? { category } : {};
  const allProducts = await Product.find(query);
  res.json(allProducts);
};

// get product by ID
exports.getProductById = async (req, res) => {
  const p_id = req.params.id;
  const product = await Product.findOne({ _id: p_id });
  res.json(product);
};

// update product
exports.updateProduct = async (req, res) => {
  const p_id = req.params.id;
  const updatedProduct = await Product.findOneAndUpdate(
    { _id: p_id },
    req.body,
    { new: true },
  );
  res.json(updatedProduct);
};

// delete product
exports.deleteProduct = async (req, res) => {
  const p_id = req.params.id;
  const deletedProduct = await Product.findOneAndDelete({ _id: p_id });
  res.status(204).send("Deleted Successfully");
};
