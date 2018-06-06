const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const faucetSchema = new Schema({
  email: String,
  address: String
});

faucetSchema.statics.saveFaucet = function saveFaucet(faucet) {
  const Faucet = this.model('Faucet');

  return new Faucet({
    email: faucet.email,
    address: faucet.address
  }).save();
}

const Faucet = mongoose.model('Faucet', faucetSchema);

module.exports = Faucet;