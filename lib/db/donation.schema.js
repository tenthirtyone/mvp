const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema({
  campaignId: String,
  pledgeId: String,
  email: String,
  amount: Number
});

donationSchema.statics.saveDonation = function saveDonation(donation) {
  const Donation = this.model('Donation');

  return new Donation({
    campaignId: donation.campaignId,
    pledgeId: donation.pledgeId,
    email: donation.email,
    amount: donation.amount
  }).save();
}

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;