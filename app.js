const express = require("express");
const app = express();
const mongoose = require("mongoose");
const First = require("./models/first.js");
const path = require("path");
const methodOverride = require("method-Override");
const ejsMate = require("ejs-mate");
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
// the main root
app.get("/", (req, res) => {
  res.send(" i am hrzx root");
});

// first indexroute
app.get("/first", async (req, res) => {
  const allListings = await First.find({});
  res.render("listing/index.ejs", { allListings });
});

// New Route
app.get("/first/new", async (req, res) => {
  res.render("listing/new.ejs");
});

//Show route
app.get("/first/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await First.findById(id);
  res.render("listing/show.ejs", { listing });
});

//crate Route
app.post("/first", async (req, res) => {
  const newListing = new First(req.body.listing);
  await newListing.save();
  res.redirect("/first");
});

// Edit Route

app.get("/first/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listing = await First.findById(id);
  res.render("listing/edit.ejs", { listing });
});

// Update route
app.put("/first/:id", async (req, res) => {
  let { id } = req.params;
  await First.findByIdAndUpdate(id, { ...req.body.new });
  res.redirect(`/first/${id}`);
});

// Delete ROUTE
app.delete("/first/:id", async (req, res) => {
  let { id } = req.params;
  let deletedlisting = await First.findByIdAndDelete(id);
  console.log(deletedlisting);
  res.redirect("/first");
});
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

// PORT
app.listen(8080, () => {
  console.log("working properly port 8080");
});
