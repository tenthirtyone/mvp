(async function() {
  let heritage;
  let currentCampaign = {
    id: 0,
    name: 'Genesis Campaign'
  };
  let currentToken;


  if ($('.statistics').length > 0) {
    if (window.web3) {
      if (web3.version.network === '313') {
        let contract = TruffleContract(dappAbi);
        const provider = web3.currentProvider;
        contract.setProvider(provider);
        heritage = await contract.deployed();
      }
    }

    let stats = {
      totalRaised: (await heritage.totalRaised()).toNumber(),
      totalCampaigns: (await heritage.totalCampaigns()).toNumber(),
      totalSupply: (await heritage.totalSupply.call()).toNumber(),
      holders: {}
    }

    $('.totalSupply').text(`${stats.totalSupply} Donations`);
    $('.totalRaised').text(`${stats.totalRaised / 10e17} Ether`);
    $('.totalCampaigns').text(`${stats.totalCampaigns} Campaigns`);

    let displayTokenCount = 10;
    let totalTokens = stats.totalSupply;
    let blockNumber = await this.window.web3.eth.getBlockNumber((err, data) => {
        $('.currentBlock').text(data);
      })

    while (displayTokenCount && totalTokens) {
      let token = await heritage.getToken(totalTokens)
      let campaignId = token[0].toNumber();
      let tokenId = token[4].toNumber()
      let certificate = await heritage.getCertificate(campaignId, tokenId)

      $.get(`/token/${campaignId}/${tokenId}`, function (data) {
        stats.holders[token[3]] = stats.holders[token[3]] ? stats.holders[token[3]] + token[1].toNumber() : token[1].toNumber();
        let template = `<div class="post post-card single-post-card">
          <header class="post-header">
            <div class="post-thumb">

              <img src="public/uploads/${data[0].image}.jpg" width="800" height="600" alt="">

            </div>
          </header>
          <div class="post-entry">
            <h3>
            <p class="text-center">${certificate[3]}</p>
              Owner:
              <p class="owner">${token[3]}</p>
              Donated:
              <p class="donated">${token[1].toNumber() / 10e17} Ether</p>
              Issue #:
              <p class="donated">${token[2].toNumber()}</p>
            </h3>
            <div class="text-center">

            </div>
          </div>
        </div>`

        $('.donations-box').append(template);
      });

      displayTokenCount--;
      totalTokens--;
    }
/*
    let campaignsToShow = 3;
    let totalCampaigns = stats.totalCampaigns;
    while (campaignsToShow || totalCampaigns) {
      let campaign = await heritage.getCampaign(totalCampaigns);
      let balance = await heritage.getCampaignBalance(totalCampaigns);

      console.log(campaign);
      let template = `<div class="col col-xs-12 col-md-6 col-lg-4">
        <header class="heading text-center">
          <p>Campaign</p>
          <h2 class="totalCampaigns">${campaign[1]}</h2>
          <p class="campaign-subtitle">Raised</p>
          <p class="campaign-balance">${balance.toNumber()} ETH</p>

        </header>
      </div>`;
      $('.campaign-row').append(template);
      campaignsToShow--
      totalCampaigns--;
    }
*/
  }
})();