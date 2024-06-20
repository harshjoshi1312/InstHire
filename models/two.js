const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const twoSchema = new Schema({
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
  applydate: String,
  stipend: String,
  mail: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Two = mongoose.model("Two", twoSchema);
module.exports = Two;
