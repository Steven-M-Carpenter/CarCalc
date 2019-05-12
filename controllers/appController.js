const db = require("../models");
const Deal = require("../models/Deal");

// Defining methods for the loginController
module.exports = {

  getMyDeals: (req, res) => {
//    console.log("email = " + req.params.email);
    let searchEmail = req.params.email;
//    console.log("searchEmail = " + searchEmail);
    Deal
      .find({ email: searchEmail })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  loadDeal: (req, res) => {
//    console.log("id = " + req.params.id);
    let searchId = req.params.id;
//    console.log("searchId = " + searchId);
    Deal
      .findById(searchId)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  saveDeal: (req, res) => {
//    console.log("apiSaveDeal Targetted" + JSON.stringify(req.body));
    const { body } = req;
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
};