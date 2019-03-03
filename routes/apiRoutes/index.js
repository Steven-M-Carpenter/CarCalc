const path = require("path");
const router = require("express").Router();
const appController = require("../../controllers/appController");


// Matches with "/api/moveCard"
// router
// .route("/api/moveCard")
// .post(cardController.advanceCard);

router
  .route("/getTest")
  .get(appController.apiGetTest);




// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;