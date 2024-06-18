const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const twoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  role: String,
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        : v,
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
