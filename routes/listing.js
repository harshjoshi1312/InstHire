const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const First = require("../models/first.js");
const Two = require("../models/two.js");

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
  wrapAsync(async (req, res) => {
    res.render("listing/new.ejs");
  })
);

//Show route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await First.findById(id);
    res.render("listing/show.ejs", { listing });
  })
);

//crate Route
router.post(
  "/",
  // validatelisting,
  wrapAsync(async (req, res, next) => {
    const newListing = new First(req.body.listing);
    await newListing.save();
    res.redirect("/first");
  })
);

// Edit Route

router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await First.findById(id);
    res.render("listing/edit.ejs", { listing });
  })
);

// Update route
router.put(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await First.findByIdAndUpdate(id, { ...req.body.new });
    res.redirect(`/first/${id}`);
  })
);

// Delete ROUTE
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedlisting = await First.findByIdAndDelete(id);
    console.log(deletedlisting);
    res.redirect("/first");
  })
);

module.exports = router;
