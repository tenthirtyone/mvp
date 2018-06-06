(async function () {
  let heritage;

  if ($('.campaigns-eth-view').length > 0) {
    if (window.web3) {
      if (web3.version.network === '313') {
        let contract = TruffleContract(dappAbi);
        const provider = web3.currentProvider;
        contract.setProvider(provider);
        heritage = await contract.deployed();
      }
    }

    let totalCampaigns = await heritage.totalCampaigns();
    let pageSize = 10;
    let campaignIdx = 0;



    while (totalCampaigns && pageSize) {
      totalCampaigns--;
      pageSize--;

      let campaign = await heritage.getCampaign(campaignIdx);
      campaignIdx++;

      $('tbody').append(`
      <tr>
        <td>
          ${campaign[1]}
        </td>
        <td>
          ${campaign[0]}
        </td>
        <td>
          ${campaign[2]}
        </td>
        <td>
          ${campaign[3]}
        </td>
        <td>
          ${campaign[4]}
        </td>
        <td>
          ${campaign[5]}
        </td>
      </tr>`)
    }
  }
})();