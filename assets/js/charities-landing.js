(async function() {
  let heritage;

  if($('.charities-landing').length > 0) {
    if (window.web3) {
      if (web3.version.network === '313') {
        let contract = TruffleContract(dappAbi);
        const provider = web3.currentProvider;
        contract.setProvider(provider);
        $('.crypto-section').show();

        heritage = await contract.deployed();
      }
    }

    let currentCampaign;

    currentCampaign = $('.crypto-tokens').attr("data-crypto-campaign");

    let certificateCount = await heritage.campaignCertificateCount(currentCampaign);
    certificateCount = certificateCount.toNumber();

    let certificate;
    while (certificateCount) {
      let currentCertificate = certificateCount - 1;
      certificate = await heritage.getCertificate(currentCampaign, currentCertificate);

      let tokenCard = $(`.token-${currentCampaign}${currentCertificate}`);


      tokenCard.find('.title').text(certificate[3]);
      tokenCard.find('.remaining').text(`${certificate[2]} Remaining`);
      tokenCard.find('.btn-donate').attr('data-token-value', certificate[4]);


      certificateCount--;
    }

    $('.btn-donate').click(async function() {
      let campaignId = $(this).attr('data-campaign-id');
      let tokenId = $(this).attr('data-token-id');

      let value = $(this).closest('.crypto-token').find('.amount').val();

      console.log(`${tokenId}-amount`)

      console.log($(`${tokenId}-amount`).val());
      console.log(value * 10e17)

      await heritage.createToken.sendTransaction(campaignId, tokenId, { value: value * 10e17 });

      window.location.href = "/pending";


    })
  }

})();