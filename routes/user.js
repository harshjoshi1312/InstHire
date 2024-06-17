// const express = require("express");
// const router = express.Router();
// const User = require("../models/user.js");

// router.get("/signup", (req, res) => {
//   res.render("users/signup.ejs");
// });

// router.post("/signup", async (req, res) => {
//   let { username, email, password } = req.body;
//   const newUser = new User({ email, password });
//   const registeredUser = await User.register(newUser, password);
//   console.log(registeredUser);
//   req.flash("success", "wellcome to Insthire");
//   res.redirect("/first");
// });
// module.exports = router;
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");

router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

router.post("/signup", async (req, res) => {
  let { username, email, password } = req.body;

  // Ensure username is included in the newUser object
  const newUser = new User({ username, email });

  try {
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.flash("success", "Welcome to Insthire");
    res.redirect("/first");
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
});

router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  (req, res) => {
    req.flash("success", "Welcome back!");
    res.redirect("/first"); // Change '/first' to your desired redirect route after login
  }
);

module.exports = router;
