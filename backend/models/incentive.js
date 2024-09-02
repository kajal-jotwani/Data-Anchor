const mongoose = require('mongoose');

const incentiveSchema = new mongoose.Schema({
  state: String,
  central: String,
  taxBenefits: String,
  subsidies: String,
  dateUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Incentive', incentiveSchema);
