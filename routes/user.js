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
const { saveRedirectUrl } = require("../middleware.js");

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
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to Insthire");
      res.redirect("/first");
    });
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
  saveRedirectUrl,
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  (req, res) => {
    req.flash("success", "Welcome back!");
    let redirectUrl = res.locals.redirectUrl || "/first";
    res.redirect(redirectUrl); // Change '/first' to your desired redirect route after login
  }
);

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You have logged out");
    res.redirect("/login"); // Redirect to the login page after logout
  });
});

module.exports = router;
