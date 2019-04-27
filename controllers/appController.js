const db = require("../models");
const Deal = require("../models/Deal");
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

  getMyDeals: (req, res) => {
    // console.log("email = " + req.params.email);
    let searchEmail = req.params.email;
    // console.log("searchEmail = " + searchEmail);
    Deal
      .find({ email: searchEmail })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  loadDeal: (req, res) => {
    console.log("id = " + req.params.id);
    let searchId = req.params.id;
    console.log("searchId = " + searchId);
    Deal
      .findById(searchId)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //  deal: (req, res) => {
  //     console.log("getTest Complete" + JSON.stringify(req.body));
  //   },

  saveDeal: (req, res) => {
    console.log("apiSaveDeal Targetted" + JSON.stringify(req.body));

    const { body } = req;
    //   const { password } = body;
    const {
      loanRate,
      loanTerm,
      dealPrice,
      stateTaxRate,
      localTaxRate,
      additionalCharges,
      dealerProcessing,
      titleFee,
      warrantyCost,
      tagFee,
      tradeIn,
      downPayment,
      rebates,
      discounts,
      incDealPrice,
      incStateTax,
      incAddOn,
      incLocalTax,
      incDealPro,
      incTitleFee,
      incWarranty,
      incTagFee,
      financeAmount,
      financePrice,
      financeInterest,
      financePayment,
      financeResult,
      email,
      isDeleted,
      dealName,
      dealer,
      vehicle,
      stkOrVIN,
      description
    } = body;


    const savedDeal = new Deal();
    savedDeal.loanRate = loanRate;
    savedDeal.loanTerm = loanTerm;
    savedDeal.dealPrice = dealPrice;
    savedDeal.stateTaxRate = stateTaxRate;
    savedDeal.localTaxRate = localTaxRate;
    savedDeal.additionalCharges = additionalCharges;
    savedDeal.dealerProcessing = dealerProcessing;
    savedDeal.titleFee = titleFee;
    savedDeal.warrantyCost = warrantyCost;
    savedDeal.tagFee = tagFee;
    savedDeal.tradeIn = tradeIn;
    savedDeal.downPayment = downPayment;
    savedDeal.rebates = rebates;
    savedDeal.discounts = discounts;
    savedDeal.incDealPrice = incDealPrice;
    savedDeal.incStateTax = incStateTax;
    savedDeal.incAddOn = incAddOn;
    savedDeal.incLocalTax = incLocalTax;
    savedDeal.incDealPro = incDealPro;
    savedDeal.incTitleFee = incTitleFee;
    savedDeal.incWarranty = incWarranty;
    savedDeal.incTagFee = incTagFee;
    savedDeal.financeAmount = financeAmount;
    savedDeal.financePrice = financePrice;
    savedDeal.financeInterest = financeInterest;
    savedDeal.financePayment = financePayment;
    savedDeal.financeResult = financeResult;
    savedDeal.email = email;
    savedDeal.isDeleted = isDeleted;
    savedDeal.dealName = dealName;
    savedDeal.dealer = dealer;
    savedDeal.vehicle = vehicle;
    savedDeal.stkOrVIN = stkOrVIN;
    savedDeal.description = description;
    savedDeal.save((err, card) => {
      if (err) {
        return res.send({
          success: false,
          message: 'ERROR:  Server error',
          errortext: err
        });
      }
      return res.send({
        success: true,
        message: 'Deal saved!'
      });
    });
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
