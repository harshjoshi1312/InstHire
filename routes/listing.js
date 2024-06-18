const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const First = require("../models/first.js");
const Two = require("../models/two.js");
const passport = require("passport");
const { isLoggedIn, isOwner } = require("../middleware.js");

//validation schema
const validatelisting = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

// first indexroute
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await First.find({});
    res.render("listing/index.ejs", { allListings });
  })
);

// New Route
router.get(
  "/new",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    res.render("listing/new.ejs");
  })
);

//Show route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await First.findById(id).populate("owner");
    if (!listing) {
      req.flash("error", "profile you requested does not exist");
      res.redirect("/first");
    }
    console.log(listing);
    res.render("listing/show.ejs", { listing });
  })
);

//crate Route
router.post(
  "/",
  isLoggedIn,
  // validatelisting,
  wrapAsync(async (req, res, next) => {
    const newListing = new First(req.body.listing);
    console.log(req.user);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/first");
  })
);

// Edit Route

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await First.findById(id);
    res.render("listing/edit.ejs", { listing });
  })
);

// Update route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await First.findByIdAndUpdate(id, { ...req.body.new });
    req.flash("success", "your profile updated");
    res.redirect(`/first/${id}`);
  })
);

// Delete ROUTE
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedlisting = await First.findByIdAndDelete(id);
    console.log(deletedlisting);
    req.flash("success", "New Listing Deleted");
    res.redirect("/first");
  })
);

module.exports = router;
