const { Brand } = require("../model/Brand");

exports.fetchBrands = async (req, res) => {
  try {
    const brands = await Brand.find({});
    res.status(200).send(brands);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.createBrand = async (req, res) => {
  try {
    const brand = new Brand(req.body);
    const doc = await brand.save();
    res.status(201).send(doc);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};
