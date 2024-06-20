const First = require("../models/first.js");

module.exports.index = async (req, res) => {
  const allListings = await First.find({});
  res.render("listing/index.ejs", { allListings });
};

module.exports.newRoute = async (req, res) => {
  res.render("listing/new.ejs");
};

module.exports.showRoute = async (req, res) => {
  let { id } = req.params;
  const listing = await First.findById(id).populate("owner");
  if (!listing) {
    req.flash("error", "profile you requested does not exist");
    res.redirect("/first");
  }
  console.log(listing);
  res.render("listing/show.ejs", { listing });
};

module.exports.createRoute = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;


  const newListing = new First(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image={url,filename}
  await newListing.save();
  req.flash("success", "New Listing Created");
  res.redirect("/first");
};

module.exports.editRoute = async (req, res) => {
  let { id } = req.params;
  const listing = await First.findById(id);
  res.render("listing/edit.ejs", { listing });
};

module.exports.updateRoute = async (req, res) => {
  let { id } = req.params;
  await First.findByIdAndUpdate(id, { ...req.body.new });
  req.flash("success", "your profile updated");
  res.redirect(`/first/${id}`);
};

module.exports.deleteRoute = async (req, res) => {
  let { id } = req.params;
  let deletedlisting = await First.findByIdAndDelete(id);
  console.log(deletedlisting);
  req.flash("success", "New Listing Deleted");
  res.redirect("/first");
};
