const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
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

const virtual = CategorySchema.virtual("id");
virtual.get(() => this._id);
CategorySchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Category = mongoose.model("Category", CategorySchema);

exports.Category = Category;
