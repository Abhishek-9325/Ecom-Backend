const { Order } = require("../model/Order");

exports.fetchOrdersByUser = async (req, res) => {
  const { user } = req.query;
  try {
    const order = await Order.find({ user: user });
    res.status(200).send(order);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    const doc = await order.save();
    res.status(201).send(doc);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

exports.fetchAllOrders = async (req, res) => {
  let query = Order.find({});
  let totalDocsQuery = Order.find({});
  if (req.query._sort && req.query._order) {
    query = query.sort({ [req.query._sort]: req.query._order });
  }
  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
  }
  const totalDocs = await totalDocsQuery.count().exec();
  // console.log(totalDocs);
  try {
    const orders = await query.exec();
    res.set("X-Total-Count", totalDocs);
    res.status(200).send(orders);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send(order);
  } catch (err) {
    res.status(400).send(err);
  }
};
