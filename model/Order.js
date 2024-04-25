const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  items: { type: [Schema.Types.Mixed] },
  selectedAddress: { type: Schema.Types.Mixed },
  paymentMode: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  totalItems: { type: Number, required: true },
  orderStatus: { type: String, default: "pending" },
});

const virtual = OrderSchema.virtual("id");
virtual.get(() => this._id);
OrderSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Order = mongoose.model("Order", OrderSchema);

exports.Order = Order;
