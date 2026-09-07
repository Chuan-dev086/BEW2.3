const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
  const allProducts = await Product.find({});
  res.json(allProducts);
};

exports.getProductById = async (req, res) => {
  const product_id = req.params.product_id;
  const product = await Product.find({ _id: product_id });
  res.json(product);
};

exports.getProductByType = async (req, res) => {
  const { type, sort, order = 1 } = req.query;

  const sortOptions = {};

  // Adding Sort and Order
  if (sort && order) {
    if (sort == "price") {
      sortOptions.price = Number(order);
    }
    if (sort == "name") {
      sortOptions.name = Number(order);
    }
  }
  //  Sort can be either:
  // price or name
  // order can be 1 (asc) or -1 (desc)

  const products = await Product.find({ type: type }).sort(sortOptions);
  res.json(products);
};

exports.getProductByPromotion = async (req, res) => {
  const { sort, order = 1 } = req.query;
  const sortOptions = {};

  if (sort && order) {
    if (sort == "price") {
      sortOptions.price = Number(order);
    }
    if (sort == "name") {
      sortOptions.name = Number(order);
    }
  }
  const products = await Product.find({ on_promotion: true }).sort(sortOptions);
  res.json(products);
};

exports.getProductByPriceRange = async (req, res) => {
  // 1. Get the min and max price range set in request
  const { min, max, sort, order = 1 } = req.query;

  // 2. Initialise your filter variable
  const filter = {};

  // 3. If min and max are set, put them in the object
  if (min || max) {
    filter.price = {};
    if (min) {
      filter.price.$gte = min;
    }
    if (max) {
      filter.price.$lte = max;
    }
  }

  const sortOptions = {};

  if (sort && order) {
    if (sort == "price") {
      sortOptions.price = Number(order);
    }
    if (sort == "name") {
      sortOptions.name = Number(order);
    }
  }

  // 4. Find your product with the filter range
  const products = await Product.find(filter).sort(sortOptions);

  // 5. Send your result in response
  res.json(products);
};

exports.getProductByPriceRange = async (req, res) => {
  // 1. Get the min and max price range set in request
  const { min, max, sort, order = 1 } = req.query;

  const sortOptions = {};

  // Adding Sort and Order
  if (sort && order) {
    if (sort == "price") {
      sortOptions.price = Number(order);
    }
    if (sort == "name") {
      sortOptions.name = Number(order);
    }
  }

  // 2. Initialise your filter variable
  const filter = {};

  // 3. If min and max are set, put them in the object
  if (min || max) {
    filter.price = {};
    if (min) {
      filter.price.$gte = min;
    }
    if (max) {
      filter.price.$lte = max;
    }
  }

  // 4. Find your product with the filter range
  const products = await Product.find(filter).sort(sortOptions);

  // 5. Send your result in response
  res.json(products);
};

exports.filterByParams = async (req, res) => {
  // Step 1: 获取 sort 和 order 参数
  const { type, promotion, min, max, sort, order = 1 } = req.query;

  // Step 2-4: 构建 filter 和 sortOptions
  const filter = {};
  const sortOptions = {};

  if (sort && order) {
    if (sort == "price") {
      sortOptions.price = Number(order); // ← sorting 逻辑在这里
    }
    if (sort == "name") {
      sortOptions.name = Number(order);
    }
  }

  // Step 5: 在数据库里排序
  const products = await Product.find(filter).sort(sortOptions);
  //                                          ↑
  //                                    用 .sort() 排序

  res.json(products);
};
