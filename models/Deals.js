const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const DealsSchema = new Schema({
  userId: { type: String, default: -1 },
  timestamp: { type: Date, default: Date.now() },
  isDeleted:  { type: Boolean, default: false },
  dealName: { type: String, required: true },
  dealer: { type: String },
  vehicle: { type: String },
  stkOrVIN: { type: String },
  description: { type: String },
  price:  { type: Number },
  tax: { type: Number },
  dealerFees: { type: Number },
  title: { type: Number },
  tags: { type: Number },
  warranty: { type: Number },
  additional: { type: Number },
  trade: { type: Number },
  downPayment: { type: Number },
  rebates: { type: Number },
  discounts: { type: Number },
  rate: { type: Number },
  term: { type: Number },
});


module.exports = mongoose.model("Deals", DealsSchema);