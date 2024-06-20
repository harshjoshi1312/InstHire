const Two = require("../models/two.js");

module.exports.index = async (req, res) => {
  const ballListings = await Two.find({});
  res.render("listing/two.index.ejs", { ballListings });
};
module.exports.newRoute = async (req, res) => {
  res.render("listing/two.new.ejs");
};
module.exports.showRoute = async (req, res) => {
  let { id } = req.params;
  const listing = await Two.findById(id).populate("owner");
  if (!listing) {
    req.flash("error", "profile you requested does not exist");
    res.redirect("/two");
  }
  console.log(listing);
  res.render("listing/two.show.ejs", { listing });
};
module.exports.createRoute = async (req, res) => {
  let url = req.file.path;
  let filename = req.file.filename;

  const newListing = new Two(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New job Created");
  res.redirect("/two");
};
module.exports.editRoute = async (req, res) => {
  let { id } = req.params;
  const listing = await Two.findById(id);
  res.render("listing/two.edit.ejs", { listing });
};
module.exports.updateRoute = async (req, res) => {
  let { id } = req.params;
  await Two.findByIdAndUpdate(id, { ...req.body.new });
  req.flash("success", "job info updated");
  res.redirect(`/two/${id}`);
};
module.exports.deleteRoute = async (req, res) => {
  let { id } = req.params;
  let deletedlisting = await Two.findByIdAndDelete(id);
  console.log(deletedlisting);
  req.flash("success", "job info deleted");
  res.redirect("/two");
};
