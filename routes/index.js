const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const htmlRoutes = require("./htmlRoutes");


// API Routes
// Matches with "/api/signup"
router
  .route("/api/signup")
  .post(loginController.signUp);


// Matches with "/api/signin"
router
  .route("/api/signin")
  .post(loginController.signIn);


// Matches with "/api/verify"
router
  .route("/api/verify")
  .post(loginController.verify);


// Matches with "/api/logout"
router
  .route("/api/logout")
  .post(loginController.logout);


// Matches with "/api/saveDeal"
router
  .route("/saveDeal")
  .post(appController.saveDeal);


// Matches with "/api/saveDeal"
// router
//   .route("/getMyDeals")
//   .get(appController.getMyDeals);

  
//HTML Routes
// router.use("/", htmlRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;