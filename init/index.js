const mongoose = require("mongoose");
const initData = require("./data");
const First = require("../models/first.js");

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
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6670610a6a156eb66d7bfd57",
  }));
  await First.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
