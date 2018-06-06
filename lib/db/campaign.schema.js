const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
  name: String,
  employee: String,
  image: String,
  youtube: String,
  description: String,
  pledged: Number,
  donations: Number,
  raised: Number,
  measure: String,
  goal: Number,
  completeCount: Number,
  startDate: Date,
  active: Boolean,
  cancelled: Boolean,
  complete: Boolean,
  cryptoId: Number,
  creator: String
})

campaignSchema.statics.updateCampaign = async function updateCampaign(campaign) {
  const Campaign = this.model('Campaign');
  return await Campaign.update(
    {
      _id: campaign.campaignId,
    },
    {
      name: campaign.name,
      employee: campaign.employee,
      image: campaign.image,
      youtube: campaign.youtube,
      description: campaign.description,
      measure: campaign.measure,
      goal: campaign.goal,
      cryptoId: campaign.cryptoId,
      completeCount: campaign.completeCount
    },
    { upsert: false });
}

campaignSchema.statics.saveCampaign = function saveCampaign(campaign) {
  const Campaign = this.model('Campaign');

  return new Campaign({
    name: campaign.name,
    employee: campaign.employee,
    image: campaign.image,
    youtube: campaign.youtube,
    description: campaign.description,
    measure: campaign.measure,
    goal: campaign.goal,
    cryptoId: campaign.cryptoId,
    startDate: campaign.startDate,
    active: campaign.active,
    creator: campaign.creator
  }).save();
}

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;