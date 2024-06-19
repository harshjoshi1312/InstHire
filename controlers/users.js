const User = require("../models/user");

module.exports.Rendersignupform = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signup = async (req, res) => {
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
};

module.exports.RenderLoginform = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.Login = (req, res) => {
  req.flash("success", "Welcome back!");
  let redirectUrl = res.locals.redirectUrl || "/first";
  res.redirect(redirectUrl); // Change '/first' to your desired redirect route after login
};

module.exports.Logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You have logged out");
    res.redirect("/login"); // Redirect to the login page after logout
  });
};
