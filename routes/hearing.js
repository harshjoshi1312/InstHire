const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const First = require("../models/first.js");
const Two = require("../models/two.js");
const { isLoggedIn, isOwned } = require("../middleware.js");

const HearingController = require("../controlers/hearing.js");

router
  .route("/")
  .get(wrapAsync(HearingController.index))
  .post(isLoggedIn, wrapAsync(HearingController.createRoute));

//two  New Route
router.get("/new", isLoggedIn, wrapAsync(HearingController.newRoute));

router
  .route("/:id")
  .get(wrapAsync(HearingController.showRoute))
  .put(isLoggedIn, isOwned, wrapAsync(HearingController.updateRoute))
  .delete(isLoggedIn, isOwned, wrapAsync(HearingController.deleteRoute));

//two   Edit Route

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwned,
  wrapAsync(HearingController.editRoute)
);

// // two indexroute
// router.get("/", wrapAsync(HearingController.index));

// //two  Show route
// router.get("/:id", wrapAsync(HearingController.showRoute));

// //two  crate Route
// router.post("/", isLoggedIn, wrapAsync(HearingController.createRoute));

//

// //two   Update route
// router.put(
//   "/:id",
//   isLoggedIn,
//   isOwned,
//   wrapAsync(HearingController.updateRoute)
// );

// // two  Delete ROUTE
// router.delete(
//   "/:id",
//   isLoggedIn,
//   isOwned,
//   wrapAsync(HearingController.deleteRoute)
// );

module.exports = router;
