(async function() {
  if ($('.my-donations').length >0) {
    let heritage;
    let tokenCount = 0;

    if (window.web3) {
      if (web3.version.network === '313') {
        let contract = TruffleContract(dappAbi);
        const provider = web3.currentProvider;
        contract.setProvider(provider);
        $('.crypto-section').show();

        heritage = await contract.deployed();
      }
    }

    // Move this to server, listen for contract event and save to db

    let totalTokens = (await heritage.totalSupply.call()).toNumber()

    console.log(totalTokens)

    while(totalTokens) {
      let token = await heritage.getToken(totalTokens);

      let purchaser = token[3];

      if (purchaser === web3.eth.accounts[0]) {

        $('.donations-box').show();
        $('.no-donations').hide();


        let campaignId = token[0];
        let campaign = await heritage.getCampaign(campaignId);
        let certificateIdx = token[4];
        let certificate = await heritage.getCertificate(campaignId, certificateIdx);
        let value = token[1].toNumber() / 10e17;

        $.get(`/token/${campaignId}/${certificateIdx}`, function (data) {
          //console.log(data);
          let template = `<div class="post post-card single-post-card">
          <header class="post-header">
            <div class="post-thumb">

              <img src="public/uploads/${data[0].image}.jpg" width="800" height="600" alt="">

            </div>
          </header>
          <div class="post-entry">
            <h3>
            <p class="text-center">${campaign[1]}</p>
            <p class="text-center">${certificate[3]}</p>
            <p class="text-center">${value} ETH</p>
            </h3>
            <div class="text-center">

            </div>
            <div class="text-center">
              <button class="btn btn-primary btn-certificate" data-ein="${campaign[2]}" data-charity="${campaign[1]}" data-campaign="${certificate[3]}" data-value="${value}" data->Get 501c3</button>
            </div>
          </div>
        </div>`

          $('.donations-box').append(template);

        })
      }

      totalTokens--;
    }

    $('.btn-certificate').click(function () {
      $(this).text('');
      $(this).addClass('spinner');
      let value = $(this).attr("data-value");
      let charity = $(this).attr("data-charity");
      let campaign = $(this).attr("data-campaign");
      let ein = $(this).attr('data-ein');

      let data = {
        name: web3.eth.accounts[0],
        fileName: Math.random() * 10e18,
        donationString: `${value} ETH`,
        donationSubTitle: campaign,
        charityName: charity,
        charityEIN: ein
      }
      $.post('/certificate', data, function(data) {
        window.location.href = data;
      })
    })
  }
})();