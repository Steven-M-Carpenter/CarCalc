const db = require("../models");
// const Card = require("../models/Card");
// const Column = require("../models/Column");
// const UserSession = require("../models/UserSession")

// Defining methods for the loginController
module.exports = {

  getTest: (req, res) => {
    console.log("getTest Complete" + JSON.stringify(req.body));
  },


  apiGetTest: (req, res) => {
    console.log("apiGetTest Complete" + JSON.stringify(req.body));
  },

  //************************************************************/
  //* Add a new card the the database
  //************************************************************/
  // addCard: (req, res) => {
  //   console.log("body = " + JSON.stringify(req.body));

  //   const { body } = req;
  //   const {
  //     title,
  //     desc,
  //     start,
  //     end,
  //     steps,
  //     lane,
  //     column,
  //   } = body;


  //   if (!title) {
  //     return res.send({
  //       success: false,
  //       message: 'ERROR: You must specify a title for the event.'
  //     });
  //   };
  //   if (!start) {
  //     return res.send({
  //       success: false,
  //       message: 'ERROR: You must specify a start date/time.'
  //     });
  //   };
  //   if (!end) {
  //     return res.send({
  //       success: false,
  //       message: 'ERROR: You must specify an end date/time.'
  //     });
  //   };
  //   if (!lane) {
  //     return res.send({
  //       success: false,
  //       message: 'ERROR: You must include the assigned lane.'
  //     });
  //   };
  //   if (!column) {
  //     return res.send({
  //       success: false,
  //       message: 'ERROR: You must include the assigned column.'
  //     });
  //   };

  //   console.log("passed all the checks and trying to add...");
  //   const newCard = new Card();
  //   newCard.title = title;
  //   newCard.desc = desc;
  //   newCard.start = start;
  //   newCard.end = end;
  //   newCard.steps = steps;
  //   newCard.lane = lane;
  //   newCard.column = column;
  //   newCard.save((err, card) => {
  //     if (err) {
  //       return res.send({
  //         success: false,
  //         message: 'ERROR:  Server error'
  //       });
  //     }
  //     return res.send({
  //       success: true,
  //       message: 'Card saved!'
  //     });
  //   });
  // },


};
