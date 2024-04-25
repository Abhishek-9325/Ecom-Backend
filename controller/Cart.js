const { Cart } = require("../model/Cart");

exports.addToCart = async (req, res) => {
  try {
    const cart = new Cart(req.body);
    const doc = await cart.save();
    const result = await doc.populate("product");
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

exports.fetchCartByUserId = async (req, res) => {
  const { user } = req.query;
  console.log(user);
  try {
    const cart = await Cart.find({ user: user })
      .populate("user")
      .populate("product");
    res.status(200).send(cart);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updateCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findByIdAndUpdate(id, req.body, {
      new: true,
    })
      .populate("user")
      .populate("product");
    res.status(200).send(cart);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.deleteCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findByIdAndDelete(id, {
      new: true,
    });
    res.status(200).send(cart);
  } catch (err) {
    res.status(400).send(err);
  }
};
