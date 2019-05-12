const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DealsSchema = new Schema({
  email: { type: String },
  timestamp: { type: Date, default: Date.now() },
  isDeleted:  { type: Boolean, default: false },
  dealName: { type: String, required: true },
  dealer: { type: String },
  vehicle: { type: String },
  stkOrVIN: { type: String },
  description: { type: String },
  loanRate: { type: String },
  loanTerm: { type: String },
  dealPrice: { type: String },
  stateTaxRate: { type: String },
  localTaxRate: { type: String },
  additionalCharges: { type: String },
  dealerProcessing: { type: String },
  titleFee: { type: String },
  warrantyCost: { type: String },
  tagFee: { type: String },
  tradeIn: { type: String },
  downPayment: { type: String },
  rebates: { type: String },
  discounts: { type: String },
  incDealPrice: { type: Boolean },
  incStateTax: { type: Boolean },
  incAddOn: { type: Boolean },
  incLocalTax: { type: Boolean },
  incDealPro: { type: Boolean },
  incTitleFee: { type: Boolean },
  incWarranty: { type: Boolean },
  incTagFee: { type: Boolean },
  financeAmount: { type: String },
  financePrice: { type: String },
  financeInterest: { type: String },
  financePayment: { type: String },
  financeResult: { type: String }
});

module.exports = mongoose.model("Deals", DealsSchema);