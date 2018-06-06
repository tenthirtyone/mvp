(function() {
  if ($('.campaigns-view').length > 0) {
    if (window.web3) {
      if (web3.version.network === '313') {
        const contract = TruffleContract(dappAbi);
        const provider = web3.currentProvider;

        contract.setProvider(provider);

        contract.deployed().then(function (instance) {

          instance.getCampaign(0).then(function (campaign) {

          })
        });
      }
    }
  }
})();

