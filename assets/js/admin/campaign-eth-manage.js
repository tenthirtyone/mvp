(async function () {
  let heritage;
  let currentCampaign = {
    id: 0,
    name: 'Genesis Campaign'
  };
  let currentToken;


  if ($('.campaigns-eth-manage').length > 0) {

    if (window.web3) {
      if (web3.version.network === '313') {
        let contract = TruffleContract(dappAbi);
        const provider = web3.currentProvider;
        contract.setProvider(provider);
        heritage = await contract.deployed();
      }
    }

    let totalCampaigns = await heritage.totalCampaigns();
    let pageSize = 20;
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
          <button class="btn btn-primary btn-create-token" data-campaign-name="${campaign[1]}" data-campaign-id="${campaignIdx}" data-toggle="modal" href="#cmpltadminModal-1">Tokens</button>
        </td>
        <td>
          ${activateBtn}
        </td>
        <td>
          ${cancelBtn}
        </td>
        <td>
          ${readyBtn}
        </td>
      </tr>`);

      totalCampaigns--;
      pageSize--;
    }

    $('.btn-create-token').click(async function () {
      const id = $(this).attr('data-campaign-id')
      const name = $(this).attr('data-campaign-name')
      setupCreateTokenForm(id, name);
    })

    $('.btn-add-token').click(async function () {
      $('.token-name').empty();
      $('.token-supply').empty();
      $('.token-price').empty();

      const token = {
        name: $('.token-name').val(),
        supply: $('.token-supply').val(),
        price: $('.token-price').val()
      }

      await heritage.createCertificate(currentCampaign.id, token.supply, token.name, token.price);
      setupCreateTokenForm(currentCampaign.id, currentCampaign.name);
    });

    $('.btn-cancel').click(async function() {
      const id = $(this).attr('data-campaign-id');
      await heritage.vetoCampaign(id);
    })

    $('.btn-ready').click(async function() {
      const id = $(this).attr('data-campaign-id');
      await heritage.readyCampaign(id);
    })

    $('.btn-activate').click(async function() {
      const id = $(this).attr('data-campaign-id');
      await heritage.activateCampaign(id);
    })
  }

  async function setupCreateTokenForm(id, name) {
    currentCampaign = {
      id,
      name
    }

    $('.modal-table-certificates').find('tbody').empty();
    $('.modal .title').text(currentCampaign.name);

    let certificateCount = await heritage.campaignCertificateCount(currentCampaign.id);
    certificateCount = certificateCount.toNumber();

    let certificate;
    while (certificateCount) {
      let currentCertificate = certificateCount - 1;
      certificate = await heritage.getCertificate(currentCampaign.id, currentCertificate);

      $('.modal-table-certificates').find('tbody').append(`
          <tr>
            <td>
              ${certificate[3]}
            </td>
            <td>
              ${certificate[2]}
            </td>
            <td>
              ${certificate[1]}
            </td>
            <td>
              ${certificate[4]}
            </td>
            <td>
              <button class="btn btn-primary btn-edit-token-data" data-token-id=${currentCertificate}>Edit</button>
            </td>
          </tr>`)


      certificateCount--;
    }

    $('.btn-edit-token-data').click(async function () {
      currentToken = $(this).attr("data-token-id");

      $.get(`/token/${currentCampaign.id}/${currentToken}`, function(data) {
        if (data.length > 0) {
          $('.token-description').text(data[0].shortDescription);
          $('.token-link').val(data[0].link);
          $('.mini-image').attr("src", `/public/uploads/${data[0].image}.jpg`);
        }
        $('.token-data').toggle();
        $('.token-list').toggle();
      })
    })

    $('.btn-save-token-data').click(function() {
      let postData = $("#AddTokenData").serialize();
      postData += `&tokenId=${currentToken}&campaignId=${currentCampaign.id}`;
      $.post("/admin/token", postData)
        .done(function (data) {
          $("#AddTokenData")[0].reset();
          $('.token-data').hide();
          $('.token-list').show();
        })
    })

    $('.close').click(function() {
      $('.token-data').hide();
      $('.token-list').show();
    })

    $('.btn-cancel-token-data').click(function() {
      $('.token-data').toggle();
      $('.token-list').toggle();
    })

    $(':file').on('change', function () {
      var file = this.files[0];
      if (file.size > 1024 * 10e3) {
        // Change to Toast
        alert('max upload size is 1M')
      } else {
        $.ajax({
          // Your server script to process the upload
          url: '/admin/campaigns/create/upload',
          type: 'POST',

          // Form data
          data: new FormData($('form')[0]),

          // Tell jQuery not to process data or worry about content-type
          // You *must* include these options!
          cache: false,
          contentType: false,
          processData: false,

          // Custom XMLHttpRequest
          xhr: function () {
            var myXhr = $.ajaxSettings.xhr();
            if (myXhr.upload) {
              // For handling the progress of the upload
              myXhr.upload.addEventListener('progress', function (e) {
                if (e.lengthComputable) {
                  $('progress').attr({
                    value: e.loaded,
                    max: e.total,
                  });
                }
              }, false);
            }
            return myXhr;
          },
          success: function (data) {
            $('.mini-image').attr("src", "/public/uploads/" + data + ".jpg")
            $('.image1').val(data);
          }
        });
      }
    });

  }
})();