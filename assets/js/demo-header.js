(async function() {
  if ($('.demo-header').length >0) {
    if (window.web3) {
      if (web3.version.network === '313') {
        let contract = TruffleContract(dappAbi);
        const provider = web3.currentProvider;
        contract.setProvider(provider);
        let heritage = await contract.deployed();
        $('.main-nav .blockchain').show();
        $('.brand-img').click(async function () {
          await heritage.createToken(7, 3);
        })
      }
    } else {
      $('.main-nav .blockchain').hide();
      $('.brand-img').click(async function () {
        alert('You found a scavenger hunt token. Follow the instructions under "GUIDE" to claim this token');
      })
    }
  }
})();