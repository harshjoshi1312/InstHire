const express = require("express");
const app = express();
const mongoose = require("mongoose");
const First = require("./models/first.js");
const Two = require("./models/two.js");
const path = require("path");
const methodOverride = require("method-Override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAync.js");
const ExpressError = require("./utils/ExpressError.js");

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

// first indexroute
app.get("/first",wrapAsync (async (req, res) => {
  const allListings = await First.find({});
  res.render("listing/index.ejs", { allListings });
}));

// New Route
app.get("/first/new",wrapAsync (async (req, res) => {
  res.render("listing/new.ejs");
}));

//Show route
app.get("/first/:id", wrapAsync (async (req, res) => {
  let { id } = req.params;
  const listing = await First.findById(id);
  res.render("listing/show.ejs", { listing });
}));

//crate Route
app.post(
  "/first",
  wrapAsync(async (req, res, next) => {
    if(!req.body.listing){
      throw new ExpressError(400,"send valid data for lsiting")
    }
    const newListing = new First(req.body.listing);
    await newListing.save();
    res.redirect("/first");
  })
);

// Edit Route

app.get("/first/:id/edit",wrapAsync (async (req, res) => {
  let { id } = req.params;
  const listing = await First.findById(id);
  res.render("listing/edit.ejs", { listing });
}));

// Update route
app.put("/first/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  await First.findByIdAndUpdate(id, { ...req.body.new });
  res.redirect(`/first/${id}`);
}));

// Delete ROUTE
app.delete("/first/:id",wrapAsync (async (req, res) => {
  let { id } = req.params;
  let deletedlisting = await First.findByIdAndDelete(id);
  console.log(deletedlisting);
  res.redirect("/first");
}));

// these are the job listings route

// two indexroute
app.get("/two",wrapAsync (async (req, res) => {
  const ballListings = await Two.find({});
  res.render("listing/two.index.ejs", { ballListings });
}));

//two  New Route
app.get("/two/new", wrapAsync(async (req, res) => {
  res.render("listing/two.new.ejs");
}));

//two  Show route
app.get("/two/:id",wrapAsync (async (req, res) => {
  let { id } = req.params;
  const listing = await Two.findById(id);
  res.render("listing/two.show.ejs", { listing });
}));

//two  crate Route
app.post("/two",wrapAsync (async (req, res) => {
  const newListing = new Two(req.body.listing);
  await newListing.save();
  res.redirect("/two");
}));

//two   Edit Route

app.get("/two/:id/edit", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Two.findById(id);
  res.render("listing/two.edit.ejs", { listing });
}));

//two   Update route
app.put("/two/:id",wrapAsync (async (req, res) => {
  let { id } = req.params;
  await Two.findByIdAndUpdate(id, { ...req.body.new });
  res.redirect(`/two/${id}`);
}));

// two  Delete ROUTE
app.delete("/two/:id",wrapAsync (async (req, res) => {
  let { id } = req.params;
  let deletedlisting = await Two.findByIdAndDelete(id);
  console.log(deletedlisting);
  res.redirect("/two");
}));

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
  let { statuscode=500, message="wow" } = err;
  // res.status(statuscode).send(message);
  res.render("error.ejs",{message});
});

// PORT
app.listen(8080, () => {
  console.log("working properly port 8080");
});

//port is listing to 8080;
