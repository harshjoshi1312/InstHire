const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const First = require("../models/first.js");
const Two = require("../models/two.js");
const passport = require("passport");
const { isLoggedIn, isOwner } = require("../middleware.js");
const ListingController = require("../controlers/listing.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

//validation schema
const validatelisting = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

router.route("/")
.get(wrapAsync(ListingController.index))
.post(
  isLoggedIn,
  upload.single("listing[image]"),
  // validatelisting,
  wrapAsync(ListingController.createRoute)
);
// New Route
router.get("/new", isLoggedIn, wrapAsync(ListingController.newRoute));

router
  .route("/:id")
  .get(wrapAsync(ListingController.showRoute))
  .put(isLoggedIn, isOwner, wrapAsync(ListingController.updateRoute))
  .delete(isLoggedIn, isOwner, wrapAsync(ListingController.deleteRoute));

// Edit Route

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(ListingController.editRoute)
);

// // first indexroute
// router.get("/", wrapAsync(ListingController.index));

//Show route
// router.get("/:id", wrapAsync(ListingController.showRoute));

// //crate Route
// router.post(
//   "/",
//   isLoggedIn,
//   // validatelisting,
//   wrapAsync(ListingController.createRoute)
// );

// Update route
// router.put(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   wrapAsync(ListingController.updateRoute)
// );

// Delete ROUTE
// router.delete(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   wrapAsync(ListingController.deleteRoute)
// );

module.exports = router;
