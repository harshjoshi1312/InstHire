const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-Override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listings = require("./routes/listing.js");
const hearing = require("./routes/hearing.js");
const session = require("express-session");
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

// session
//session implementation
// 1-npm session
// 2-session require
// 3-session object
// 4- pass in app.use route

const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));

// the main root
app.get("/", (req, res) => {
  res.send(" i am hrzx root");
});

// this is router objects
app.use("/first", listings);
app.use("/two", hearing);

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
