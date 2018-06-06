(async function () {
  let heritage;

  if ($('.about').length > 0) {
    if (window.web3) {
      if (web3.version.network === '313') {
        let contract = TruffleContract(dappAbi);
        const provider = web3.currentProvider;
        contract.setProvider(provider);
        heritage = await contract.deployed();

        $('.profile-photo').first().click(async function() {
          await heritage.createToken(7, 0);
        })
      }
    } else {
      $('.profile-photo').first().click(async function () {
        alert('You found a scavenger hunt token. Follow the instructions under "GUIDE" to claim this token');
      })
    }
  }

})();