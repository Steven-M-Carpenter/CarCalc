const path = require("path");
const router = require("express").Router();
const appController = require("../../controllers/appController");
// const loginController = require("../../controllers/loginController");


// Test Route
router
  .route("/getTest")
  .get(appController.getTest);


// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;