const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const First = require("../models/first.js");
const Two = require("../models/two.js");

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
  wrapAsync(async (req, res) => {
    res.render("listing/two.new.ejs");
  })
);

//two  Show route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Two.findById(id);
    res.render("listing/two.show.ejs", { listing });
  })
);

//two  crate Route
router.post(
  "/",
  wrapAsync(async (req, res) => {
    const newListing = new Two(req.body.listing);
    await newListing.save();
    res.redirect("/two");
  })
);

//two   Edit Route

router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Two.findById(id);
    res.render("listing/two.edit.ejs", { listing });
  })
);

//two   Update route
router.put(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Two.findByIdAndUpdate(id, { ...req.body.new });
    res.redirect(`/two/${id}`);
  })
);

// two  Delete ROUTE
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedlisting = await Two.findByIdAndDelete(id);
    console.log(deletedlisting);
    res.redirect("/two");
  })
);

module.exports = router;