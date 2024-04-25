const { Product } = require("../model/Product");

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const doc = await product.save();
    res.status(201).send(doc);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

exports.fetchProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).send(product);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.fetchAllProducts = async (req, res) => {
  let condition = {};
  const { admin } = req.query;
  if (!admin) {
    condition.delete = { $ne: true };
  }
  let query = Product.find(condition);
  let totalDocsQuery = Product.find(condition);
  if (req.query.category) {
    query = query.find({ category: req.query.category });
    totalDocsQuery = totalDocsQuery.find({ category: req.query.category });
  }
  if (req.query.brand) {
    query = query.find({ brand: req.query.brand });
    totalDocsQuery = totalDocsQuery.find({ brand: req.query.brand });
  }
  if (req.query._sort && req.query._order) {
    query = query.sort({ [req.query._sort]: req.query._order });
    totalDocsQuery = totalDocsQuery.sort({
      [req.query._sort]: req.query._order,
    });
  }
  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
  }
  const totalDocs = await totalDocsQuery.count().exec();
  // console.log(totalDocs);
  try {
    const products = await query.exec();
    res.set("X-Total-Count", totalDocs);
    res.status(200).send(products);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send(product);
  } catch (err) {
    res.status(400).send(err);
  }
};
