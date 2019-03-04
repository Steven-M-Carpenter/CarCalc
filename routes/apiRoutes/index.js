const path = require("path");
const router = require("express").Router();
const appController = require("../../controllers/appController");
const loginController = require("../../controllers/loginController");



//************************************************************************************/
// Routes for the authentication engine
router
  .route("/api/signup")
  .post(loginController.signUp);

router
  .route("/api/signin")
  .post(loginController.signIn);

router
  .route("/api/verify")
  .post(loginController.verify);

router
  .route("/api/logout")
  .post(loginController.logout);



//************************************************************************************/
//



//************************************************************************************/
// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;