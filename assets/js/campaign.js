(async function () {


  if ($('.campaign-page').length > 0) {
    let heritage;
    if (window.web3) {
      if (web3.version.network === '313') {
        let contract = TruffleContract(dappAbi);
        const provider = web3.currentProvider;


        contract.setProvider(provider);
        heritage = await contract.deployed();
        $('.btn-pledge-crypto').show();

        let campaignId = $('.campaign-tokens').attr('data-crypto-id');
        let campaign = await heritage.getCampaign(campaignId);
        let certificate = await heritage.getCertificate(campaignId, 0);


        $.get(`/token/${campaignId}/0`, function (data) {
          console.log(data);
          let template = `<div class="post post-card single-post-card">
          <header class="post-header">
            <div class="post-thumb">

              <img src="/public/uploads/${data[0].image}.jpg" width="800" height="600" alt="">

            </div>
          </header>
          <div class="post-entry">
            <h3>
            <p class="text-center">${campaign[1]}</p>
            <p class="text-center">${certificate[3]}</p>
            </h3>
            <div class="text-center">

            </div>
            <div class="form-group">
              <input type="number" class="form-control amount" value="1" name="donationAmt">
            </div>
            <div class="text-center">
              <button class="btn btn-primary btn-donate-eth" data-campaign-id="${campaignId}" data-certificate-id="${certificate[4]}">Donate ETH</button>
            </div>
          </div>
        </div>`

          $('.campaign-tokens').append(template);

          $('.btn-donate-eth').click(async function () {
            let campaignId = $(this).attr('data-campaign-id');
            let tokenId = $(this).attr('data-certificate-id');
            let value = $('.amount').val();

            await heritage.createToken.sendTransaction(campaignId, tokenId, { value: value * 10e17 });
            window.location.href = "/pending";
          })

        })

      }
    }
    var charityImages = [
      {
        name: "Airline Ambassadors",
        identifier: "ambassadors",
        img: '/public/images/cause-photo-1.jpg'
      },
      {
        name: "The MADE",
        identifier: "made",
        img: '/public/images/cause-photo-2.jpg'
      },
      {
        name: "Hartsong Ranch",
        identifier: "hartsong",
        img: '/public/images/cause-photo-3.jpg'
      }
    ];
    var currentImage = 0;


    $('.btn-pledge').click(function() {
      $('.modal-pledge').find('button.pledge').show()
      $('.modal-pledge').find('button.donate').hide();
      $('.modal-pledge').modal('show');
    })
    $('.btn-donate').click(function() {
      $('.modal-pledge').find('button.pledge').hide()
      $('.modal-pledge').find('button.donate').show();
      $('.modal-pledge').modal('show');
    })

    $('.nav-button.left').click(function() {
      if (currentImage === 0) {
        currentImage = charityImages.length -1;
      } else {
        currentImage--;
      }
      $('.pledge-img').attr('src', charityImages[currentImage].img);
    })

    $('.nav-button.right').click(function() {
      if (currentImage === charityImages.length - 1) {
        currentImage = 0;
      } else {
        currentImage++;
      }
      $('.pledge-img').attr('src', charityImages[currentImage].img);
    })

    $('button.pledge').click(function() {
      let charityId = charityImages[currentImage].identifier;
      let charityName = charityImages[currentImage].name;
      let campaignId = $(this).attr("data-campaign-id");
      let pledgeAmount = $('.amount').val();
      let pledgeMsg = $('.pledge-msg').val();
      let data = {
        charityId,
        campaignId,
        charityName,
        pledgeAmount,
        pledgeMsg
      }

      $.post("/pledge", data)
        .done(function (success) {
          if (success) {
            window.location.reload(false);
          }
        })
    })
  }
})();
