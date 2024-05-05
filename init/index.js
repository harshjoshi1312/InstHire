const mongoose = require("mongoose");
const initData = require("./data");
const First = require("../models/first.model.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/insthire";

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("err");
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await First.deleteMany({});
  await First.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
