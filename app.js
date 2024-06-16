const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-Override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listings = require("./routes/listing.js");
const hearing = require("./routes/hearing.js");
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

// ENGINE SETUP
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
// ROUTES

// basicall these are the developers routes
// the main root
app.get("/", (req, res) => {
  res.send(" i am hrzx root");
});

// this validate listing make errors in code thats why its not using write now cause joi validation not used in all strings

app.use("/first", listings);
app.use("/two", hearing);

// these are the job listings route

//sample db store

// app.get("/testlisting", async (req, res) => {
//   let sampleListing = new First({
//     name: "harsh",
//     role: "backend",
//     description: "hello i am harshjoshi",
//     location: "vijapur",
//     country: "ahmedabad",
//   });
//   await sampleListing.save();
//   console.log("sample listing was saved");
//   res.send("successfull");
// });
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "page not found"));
});

app.use((err, req, res, next) => {
  let { statuscode = 500, message = "wow" } = err;
  // res.status(statuscode).send(message);
  res.render("error.ejs", { message });
});

// PORT
app.listen(8080, () => {
  console.log("working properly port 8080");
});

//port is listing to 8080;
//change
