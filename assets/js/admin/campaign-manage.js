(async function () {

  let heritage;
  let currentCampaign = {
    id: 0,
    name: 'Genesis Campaign'
  };

  if ($('.campaigns-manage').length > 0) {
    console.log(window.web3)
    let totalCampaigns = 0;
    if (window.web3) {
      if (web3.version.network === '313') {
        let contract = TruffleContract(dappAbi);
        const provider = web3.currentProvider;
        contract.setProvider(provider);
        heritage = await contract.deployed();
        totalCampaigns = await heritage.totalCampaigns();
      }
    }



    let pageSize = 10;
    let campaignIdx = 0;

    $('.campaign-count').text(`${totalCampaigns} Campaigns`);

    while (totalCampaigns && pageSize) {
      campaignIdx++;
      let campaign = await heritage.getCampaign(campaignIdx);

      const cancelBtn = campaign[4] ? "Cancelled" : `<button class="btn btn-primary btn-cancel"data-campaign-name="${campaign[1]}" data-campaign-id="${campaignIdx}" >Cancel</button>`;
      const readyBtn = campaign[5] ? "Readied" : `<button class="btn btn-primary btn-ready"data-campaign-name="${campaign[1]}" data-campaign-id="${campaignIdx}" >Ready</button>`;
      const activateBtn = campaign[3] ? "Active" : `<button class="btn btn-primary btn-activate"data-campaign-name="${campaign[1]}" data-campaign-id="${campaignIdx}" >Active</button>`;

      $('.campaign-table tbody').append(`
      <tr>
        <td>
          ${campaignIdx} | ${campaign[1]}
        </td>
        <td>
          <button class="btn btn-primary btn-create-token" data-campaign-id="${campaignIdx}">Add Crypto</button>
        </td>
      </tr>`);

      totalCampaigns--;
      pageSize--;
    }


    $('.btn-USD-activate').click(function () {
      $.post("/admin/campaigns/USD/activate/" + $(this).attr('data-campaign-id'))
        .done(function (data) {
          window.location.reload(false);
        })
    })

    $('.btn-USD-cancel').click(function () {
      $.post("/admin/campaigns/USD/cancel/" + $(this).attr('data-campaign-id'))
        .done(function (data) {
          window.location.reload(false);
        })
    })

    $('.btn-USD-complete').click(function () {
      $.post("/admin/campaigns/USD/complete/" + $(this).attr('data-campaign-id'))
        .done(function (data) {
          console.log(data)
          window.location.reload(false);
        })
    })

    $('.btn-USD-notify').click(function () {
      const completed = prompt('How many miles/feet/etc did they complete?');
      $.post("/admin/campaigns/USD/sendDonationNotification/" + $(this).attr('data-campaign-id'), {completed})
        .done(function (data) {
          window.location.reload(false);
        })
    })

    $('.btn-edit').click(function () {
      const campaignId = $(this).attr("data-campaign-id");
      window.location.href = `/admin/campaigns/USD/manage/${campaignId}`;
    })
  }
})();

