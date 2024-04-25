const { User } = require("../model/User");

exports.fetchAllUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.fetchUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const doc = await user.save();
    res.status(201).send(doc);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).send("User not found");
    } else {
      if (user.password === password) {
        res.status(200).send(user);
      } else {
        res.status(400).send("Wrong Credentials");
      }
    }
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};
