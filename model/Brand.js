const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
  value: {
    type: String,
    required: true,
    unique: true,
  },
  label: {
    type: String,
    required: true,
    unique: true,
  },
  checked: Boolean,
});

const virtual = BrandSchema.virtual("id");
virtual.get(() => this._id);
BrandSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Brand = mongoose.model("Brand", BrandSchema);

exports.Brand = Brand;
