(async function() {

  let heritage;
  let currentCampaign = {
    id: 0,
    name: 'Genesis Campaign'
  };

  if ($('.campaigns-eth-create').length > 0) {

    if (window.web3) {
      if (web3.version.network === '313') {
        let contract = TruffleContract(dappAbi);
        const provider = web3.currentProvider;

        contract.setProvider(provider);
        heritage = await contract.deployed();
      }
    }


    $('.btn-eth').click(async () => {
      const name = $('.campaign-name').val()
      const taxId = $('.campaign-tax-id').val();
      await heritage.createCampaign(name, taxId);
    });
  }

})();