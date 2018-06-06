const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charitySchema = new Schema({
  name: String,
  identifier: String,
  shortDescription: String,
  cryptoCampaignId: Number,
  text1: String,
  text2: String,
  text3: String,
  text4: String,
  paypal: String,
  taxid: String,
  creator: String
})

charitySchema.statics.deleteCharity = async function deleteCharity(charity) {
  return await Charity.deleteOne({ _id: charity.id});
}

charitySchema.statics.saveCharity = function saveCharity(charity) {
  const Charity = this.model('Charity');

  return new Charity({
    name: charity.name,
    identifier: charity.identifier,
    shortDescription: charity.shortDescription,
    cryptoCampaignId: charity.cryptoCampaignId,
    text1: charity.text1,
    text2: charity.text2,
    text3: charity.text3,
    text4: charity.text4,
    paypal: charity.paypal,
    taxid: charity.taxid,
    creator: charity.creator
  }).save();
}

charitySchema.statics.updateCharity = async function updateCharity(charity) {
  const Charity = this.model('Charity');

  return await Charity.update(
    { '_id': charity.id },
    {
    name: charity.name,
    identifier: charity.identifier,
    shortDescription: charity.shortDescription,
    cryptoCampaignId: charity.cryptoCampaignId,
    text1: charity.text1,
    text2: charity.text2,
    text3: charity.text3,
    text4: charity.text4,
    paypal: charity.paypal,
    taxid: charity.taxid,
    creator: charity.creator
  });
}

const Charity = mongoose.model('Charity', charitySchema);

module.exports = Charity;