const path = require("path");
const router = require("express").Router();
const appController = require("../../controllers/appController");
const loginController = require("../../controllers/loginController");

//************************************************************************************/
// Routes for the authentication engine
router
  .route("/signup")
  .post(loginController.signUp);

router
  .route("/signin")
  .post(loginController.signIn);

router
  .route("/verify")
  .post(loginController.verify);


//************************************************************************************/
// Routes for the application engine
router
  .route("/saveDeal")
  .post(appController.saveDeal);

router
  .route("/getMyDeals/:email")
  .get(appController.getMyDeals);

  router
  .route("/loadDeal/:id")
  .get(appController.loadDeal);


//************************************************************************************/
// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;