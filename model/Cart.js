const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  quantity: { type: Number, required: true },
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const virtual = CartSchema.virtual("id");
virtual.get(() => this._id);
CartSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Cart = mongoose.model("Cart", CartSchema);

exports.Cart = Cart;
