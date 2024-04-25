const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  discountPercentage: Number,
  rating: {
    type: Number,
    default: 0,
  },
  stock: Number,
  brand: String,
  category: {
    type: String,
    required: true,
  },
  thumbnail: String,
  images: [String],
  delete: Boolean,
});

const virtual = ProductSchema.virtual("id");
virtual.get(() => this._id);
ProductSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Product = mongoose.model("Product", ProductSchema);

exports.Product = Product;
