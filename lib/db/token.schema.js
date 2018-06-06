const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  campaignId: Number,
  tokenId: Number,
  image: String,
  shortDescription: String,
  link: String
})

tokenSchema.statics.deleteToken = async function deleteToken(token) {
  return await Token.deleteOne({ _id: token.id});
}

tokenSchema.statics.updateToken = async function updateToken(token) {
  const Token = this.model('Token');

  return await Token.update(
    {
      campaignId: token.campaignId,
      tokenId: token.tokenId
    },
    {
      campaignId: token.campaignId,
      tokenId: token.tokenId,
      image: token.image,
      shortDescription: token.shortDescription,
      link: token.link
    },
    { upsert: true});
}

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;