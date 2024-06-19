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
const UserController = require("../controlers/users.js");

router.get("/signup", UserController.Rendersignupform);

router.post("/signup", UserController.signup);

router.get("/login", UserController.RenderLoginform);

router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  UserController.Login
);

router.get("/logout",UserController.Logout );

module.exports = router;
