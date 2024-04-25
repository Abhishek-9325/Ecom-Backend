const { Category } = require("../model/Category");

exports.fetchCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).send(categories);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    const doc = await category.save();
    res.status(201).send(doc);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};
