const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pledgeSchema = new Schema({
  campaignId: String,
  charityId: String,
  charityName: String,
  email: String,
  displayName: String,
  msg: String,
  amount: Number
});

pledgeSchema.statics.deletePledge = async function deletePledge(pledge) {
  return await Pledge.deleteOne({ _id: pledge.id});
}

pledgeSchema.statics.updatePledge = async function updatePledge(pledge) {
  const Pledge = this.model('Pledge');

  return await Pledge.update(
    {
      campaignId: pledge.campaignId,
      charityId: pledge.charityId,
      email: pledge.email
    },
    {
      campaignId: pledge.campaignId,
      charityId: pledge.charityId,
      charityName: pledge.charityName,
      email: pledge.email,
      displayName: pledge.displayName,
      msg: pledge.msg,
      amount: pledge.amount
    },
    { upsert: true});
}

const Pledge = mongoose.model('Pledge', pledgeSchema);

module.exports = Pledge;