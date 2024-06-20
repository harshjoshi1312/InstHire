const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const firstSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  role: String,
  image: {
    url: String,
    filename: String,
  },
  description: String,
  location: String,
  country: String,
  mail: String,
  portfolio: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

firstSchema.set("strictPopulate", false);
const First = mongoose.model("First", firstSchema);
module.exports = First;
