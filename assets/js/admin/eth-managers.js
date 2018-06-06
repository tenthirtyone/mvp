(async function () {



  let heritage;


  if ($('.eth-managers').length > 0) {
    if (window.web3) {
      if (web3.version.network === '313') {
        let contract = TruffleContract(dappAbi);
        const provider = web3.currentProvider;
        contract.setProvider(provider);
        heritage = await contract.deployed();
      }
    }

    $('.btn-add-manager').click(async () => {

      const address = $('.manager-address').val();
      await heritage.addManager(address);
    });
  }

})();