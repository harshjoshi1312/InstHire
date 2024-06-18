const First = require("./models/first")
const Two = require("./models/two");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "you must be login to create profile");
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await First.findById(id);
  if (!listing.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "you dont have permisson to edit");
    res.redirect(`/first/${id}`);
  }
  next();
};
module.exports.isOwned = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Two.findById(id);
  if (!listing.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "you dont have permisson to edit");
    res.redirect(`/two/${id}`);
  }
  next();
};
