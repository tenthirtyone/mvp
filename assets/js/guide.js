(async function () {
  let heritage = false;;

  if ($('.guide').length > 0) {
    if (window.web3) {
      if (web3.version.network === '313') {
        let contract = TruffleContract(dappAbi);
        const provider = web3.currentProvider;


        contract.setProvider(provider);
        heritage = await contract.deployed();

        $('.meta-img').click(async function() {
          await heritage.createToken(7, 1);
        })
      }
    }

    $('.meta-img').click(async function () {
      alert('You found a scavenger hunt token. Follow the instructions under "GUIDE" to claim this token');
    })

    $('.btn-check-metamask').click(async () => {
      $('.mm-connected, .mm-disconnected, .mm-not-exists, .mm-exists').hide();
      if (window.web3) {
        $('.mm-exists').show();
        if (window.web3.isConnected()) {
          $('.mm-connected').show();
        } else {
          $('.mm-disconnected').show();
        }
      } else {
        $('.mm-not-exists').show();
      }
    });

    $('.btn-check-testnet').click(async () => {
      $('.tn-connected, .tn-disconnected').hide()

      if (web3.version.network === '313') {
        $('.tn-connected').show()
      } else {
        $('.tn-disconnected').show()
      }
    });

    $('.btn-check-dapp').click(async () => {
      $('.contract-found, .contract-missing').hide();
      console.log(heritage)
      if (heritage.address === "0x1aee2a793866471f98e3e2a5bbf5d555d7e09260") {
        $('.contract-found').show();
      } else {
        $('.contract-missing').show();
      }
    });

    $('.btn-faucet').click(async () => {
      $.get(`/faucet/${web3.eth.accounts}`)
        .done(function(success) {
          if (success) {
            window.location.href = "/faucet-pending";
          } else {
            window.location.href = "/sorry";
          }
        })
    });
  }


})();