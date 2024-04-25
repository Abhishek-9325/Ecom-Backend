const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  addresses: {
    type: [Schema.Types.Mixed],
  },
  name: {
    type: String,
  },
  orders: {
    type: [Schema.Types.Mixed],
  },
});

const virtual = UserSchema.virtual("id");
virtual.get(() => this._id);
UserSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const User = mongoose.model("User", UserSchema);

exports.User = User;
