const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const First = require("../models/first.js");
const Two = require("../models/two.js");
const { isLoggedIn, isOwned } = require("../middleware.js");

// two indexroute
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const ballListings = await Two.find({});
    res.render("listing/two.index.ejs", { ballListings });
  })
);

//two  New Route
router.get(
  "/new",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    res.render("listing/two.new.ejs");
  })
);

//two  Show route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Two.findById(id).populate("owner");
    if (!listing) {
      req.flash("error", "profile you requested does not exist");
      res.redirect("/two");
    }
    console.log(listing);
    res.render("listing/two.show.ejs", { listing });
  })
);

//two  crate Route
router.post(
  "/",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const newListing = new Two(req.body.listing);
    console.log(req.user);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New job Created");
    res.redirect("/two");
  })
);

//two   Edit Route

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwned,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Two.findById(id);
    res.render("listing/two.edit.ejs", { listing });
  })
);

//two   Update route
router.put(
  "/:id",
  isLoggedIn,
  isOwned,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Two.findByIdAndUpdate(id, { ...req.body.new });
    req.flash("success", "job info updated");
    res.redirect(`/two/${id}`);
  })
);

// two  Delete ROUTE
router.delete(
  "/:id",
  isLoggedIn,
  isOwned,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedlisting = await Two.findByIdAndDelete(id);
    console.log(deletedlisting);
    req.flash("success", "job info deleted");
    res.redirect("/two");
  })
);

module.exports = router;
