const express = require("express");
const app = express();
const mongoose = require("mongoose");
const First = require("./models/first.model.js");

// temporaty add samll db
const MONGO_URL = "mongodb://127.0.0.1:27017/insthire";

main()
  .then(() => {
    console.log("connected to url");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("hii i am root");
});

app.get("/testlisting", async (req, res) => {
  let sampleListing = new First({
    name: "harsh",
    role: "backend",
    description: "hello i am harshjoshi",
    location: "vijapur",
    country: "ahmedabad",
  });
  await sampleListing.save();
  console.log("sample listing was saved");
  res.send("successfull");
});
app.listen(8080, () => {
  console.log("working properly port 8080");
});
