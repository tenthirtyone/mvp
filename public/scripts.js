(async function(){let a;if(0<$('.about').length)if(!window.web3)$('.profile-photo').first().click(async function(){alert('You found a scavenger hunt token. Follow the instructions under "GUIDE" to claim this token')});else if('313'===web3.version.network){let b=TruffleContract(dappAbi);const c=web3.currentProvider;b.setProvider(c),a=await b.deployed(),$('.profile-photo').first().click(async function(){await a.createToken(7,0)})}})(),function(){0<$('.admin-login').length&&$('.btn-login').click(function(){const a=$('.password').val();if(sjcl){let b=sjcl.hash.sha256.hash(a),c=sjcl.codec.hex.fromBits(b);$.post('/admin/login',{data:c},function(a){console.log(a),a?window.location.href='/admin':window.reload(!1)})}})}(),function(){0<$('.campaigns-create').length&&($('.btn-USD').click(function(){$.post('/admin/campaigns/USD/create',$('#CreateCampaign').serialize()).done(function(){window.location.href='/admin/campaigns/USD/manage'})}),$(':file').on('change',function(){var a=this.files[0];a.size>10240000?alert('max upload size is 1M'):$.ajax({url:'/admin/campaigns/create/upload',type:'POST',data:new FormData($('form')[0]),cache:!1,contentType:!1,processData:!1,xhr:function(){var a=$.ajaxSettings.xhr();return a.upload&&a.upload.addEventListener('progress',function(a){a.lengthComputable&&$('progress').attr({value:a.loaded,max:a.total})},!1),a},success:function(a){$('.mini-image').attr('src','/public/uploads/'+a+'.jpg'),$('.image1').val(a)}})}))}(),function(){0<$('.campaigns-edit').length&&($('.btn-update-campaign').click(function(){const a=$('.btn-update-campaign').attr('data-campaign-id');let b=$('#EditCampaign').serialize()+`&campaignId=${a}`;$.post('/admin/campaigns/USD/edit',b).done(function(){window.location.href='/admin/campaigns/USD/manage'})}),$(':file').on('change',function(){var a=this.files[0];a.size>10240000?alert('max upload size is 1M'):$.ajax({url:'/admin/campaigns/create/upload',type:'POST',data:new FormData($('form')[0]),cache:!1,contentType:!1,processData:!1,xhr:function(){var a=$.ajaxSettings.xhr();return a.upload&&a.upload.addEventListener('progress',function(a){a.lengthComputable&&$('progress').attr({value:a.loaded,max:a.total})},!1),a},success:function(a){$('.mini-image').attr('src','/public/uploads/'+a+'.jpg'),$('.image1').val(a)}})}))}(),async function(){let a;if(0<$('.campaigns-eth-create').length){if(window.web3&&'313'===web3.version.network){let b=TruffleContract(dappAbi);const c=web3.currentProvider;b.setProvider(c),a=await b.deployed()}$('.btn-eth').click(async()=>{const b=$('.campaign-name').val(),c=$('.campaign-tax-id').val();await a.createCampaign(b,c)})}}(),async function(){async function a(a,e){d={id:a,name:e},$('.modal-table-certificates').find('tbody').empty(),$('.modal .title').text(d.name);let f=await b.campaignCertificateCount(d.id);f=f.toNumber();for(let c;f;){let a=f-1;c=await b.getCertificate(d.id,a),$('.modal-table-certificates').find('tbody').append(`
          <tr>
            <td>
              ${c[3]}
            </td>
            <td>
              ${c[2]}
            </td>
            <td>
              ${c[1]}
            </td>
            <td>
              ${c[4]}
            </td>
            <td>
              <button class="btn btn-primary btn-edit-token-data" data-token-id=${a}>Edit</button>
            </td>
          </tr>`),f--}$('.btn-edit-token-data').click(async function(){c=$(this).attr('data-token-id'),$.get(`/token/${d.id}/${c}`,function(a){0<a.length&&($('.token-description').text(a[0].shortDescription),$('.token-link').val(a[0].link),$('.mini-image').attr('src',`/public/uploads/${a[0].image}.jpg`)),$('.token-data').toggle(),$('.token-list').toggle()})}),$('.btn-save-token-data').click(function(){let a=$('#AddTokenData').serialize();a+=`&tokenId=${c}&campaignId=${d.id}`,$.post('/admin/token',a).done(function(){$('#AddTokenData')[0].reset(),$('.token-data').hide(),$('.token-list').show()})}),$('.close').click(function(){$('.token-data').hide(),$('.token-list').show()}),$('.btn-cancel-token-data').click(function(){$('.token-data').toggle(),$('.token-list').toggle()}),$(':file').on('change',function(){var a=this.files[0];a.size>10240000?alert('max upload size is 1M'):$.ajax({url:'/admin/campaigns/create/upload',type:'POST',data:new FormData($('form')[0]),cache:!1,contentType:!1,processData:!1,xhr:function(){var a=$.ajaxSettings.xhr();return a.upload&&a.upload.addEventListener('progress',function(a){a.lengthComputable&&$('progress').attr({value:a.loaded,max:a.total})},!1),a},success:function(a){$('.mini-image').attr('src','/public/uploads/'+a+'.jpg'),$('.image1').val(a)}})})}let b,c,d={id:0,name:'Genesis Campaign'};if(0<$('.campaigns-eth-manage').length){if(window.web3&&'313'===web3.version.network){let a=TruffleContract(dappAbi);const c=web3.currentProvider;a.setProvider(c),b=await a.deployed()}let c=await b.totalCampaigns(),e=20,f=0;for($('.campaign-count').text(`${c} Campaigns`);c&&e;){f++;let a=await b.getCampaign(f);const d=a[4]?'Cancelled':`<button class="btn btn-primary btn-cancel"data-campaign-name="${a[1]}" data-campaign-id="${f}" >Cancel</button>`,g=a[5]?'Readied':`<button class="btn btn-primary btn-ready"data-campaign-name="${a[1]}" data-campaign-id="${f}" >Ready</button>`,h=a[3]?'Active':`<button class="btn btn-primary btn-activate"data-campaign-name="${a[1]}" data-campaign-id="${f}" >Active</button>`;$('.campaign-table tbody').append(`
      <tr>
        <td>
          ${f} | ${a[1]}
        </td>
        <td>
          <button class="btn btn-primary btn-create-token" data-campaign-name="${a[1]}" data-campaign-id="${f}" data-toggle="modal" href="#cmpltadminModal-1">Tokens</button>
        </td>
        <td>
          ${h}
        </td>
        <td>
          ${d}
        </td>
        <td>
          ${g}
        </td>
      </tr>`),c--,e--}$('.btn-create-token').click(async function(){const b=$(this).attr('data-campaign-id'),c=$(this).attr('data-campaign-name');a(b,c)}),$('.btn-add-token').click(async function(){$('.token-name').empty(),$('.token-supply').empty(),$('.token-price').empty();const c={name:$('.token-name').val(),supply:$('.token-supply').val(),price:$('.token-price').val()};await b.createCertificate(d.id,c.supply,c.name,c.price),a(d.id,d.name)}),$('.btn-cancel').click(async function(){const a=$(this).attr('data-campaign-id');await b.vetoCampaign(a)}),$('.btn-ready').click(async function(){const a=$(this).attr('data-campaign-id');await b.readyCampaign(a)}),$('.btn-activate').click(async function(){const a=$(this).attr('data-campaign-id');await b.activateCampaign(a)})}}(),async function(){let a;if(0<$('.campaigns-eth-view').length){if(window.web3&&'313'===web3.version.network){let b=TruffleContract(dappAbi);const c=web3.currentProvider;b.setProvider(c),a=await b.deployed()}for(let b=await a.totalCampaigns(),c=10,d=0;b&&c;){b--,c--;let e=await a.getCampaign(d);d++,$('tbody').append(`
      <tr>
        <td>
          ${e[1]}
        </td>
        <td>
          ${e[0]}
        </td>
        <td>
          ${e[2]}
        </td>
        <td>
          ${e[3]}
        </td>
        <td>
          ${e[4]}
        </td>
        <td>
          ${e[5]}
        </td>
      </tr>`)}}}(),async function(){let a;if(0<$('.campaigns-manage').length){console.log(window.web3);let b=0;if(window.web3&&'313'===web3.version.network){let c=TruffleContract(dappAbi);const d=web3.currentProvider;c.setProvider(d),a=await c.deployed(),b=await a.totalCampaigns()}let c=10,d=0;for($('.campaign-count').text(`${b} Campaigns`);b&&c;){d++;let e=await a.getCampaign(d);const f=e[4]?'Cancelled':`<button class="btn btn-primary btn-cancel"data-campaign-name="${e[1]}" data-campaign-id="${d}" >Cancel</button>`,g=e[5]?'Readied':`<button class="btn btn-primary btn-ready"data-campaign-name="${e[1]}" data-campaign-id="${d}" >Ready</button>`,h=e[3]?'Active':`<button class="btn btn-primary btn-activate"data-campaign-name="${e[1]}" data-campaign-id="${d}" >Active</button>`;$('.campaign-table tbody').append(`
      <tr>
        <td>
          ${d} | ${e[1]}
        </td>
        <td>
          <button class="btn btn-primary btn-create-token" data-campaign-id="${d}">Add Crypto</button>
        </td>
      </tr>`),b--,c--}$('.btn-USD-activate').click(function(){$.post('/admin/campaigns/USD/activate/'+$(this).attr('data-campaign-id')).done(function(){window.location.reload(!1)})}),$('.btn-USD-cancel').click(function(){$.post('/admin/campaigns/USD/cancel/'+$(this).attr('data-campaign-id')).done(function(){window.location.reload(!1)})}),$('.btn-USD-complete').click(function(){$.post('/admin/campaigns/USD/complete/'+$(this).attr('data-campaign-id')).done(function(a){console.log(a),window.location.reload(!1)})}),$('.btn-USD-notify').click(function(){const a=prompt('How many miles/feet/etc did they complete?');$.post('/admin/campaigns/USD/sendDonationNotification/'+$(this).attr('data-campaign-id'),{completed:a}).done(function(){window.location.reload(!1)})}),$('.btn-edit').click(function(){const a=$(this).attr('data-campaign-id');window.location.href=`/admin/campaigns/USD/manage/${a}`})}}(),function(){if(0<$('.campaigns-view').length&&window.web3&&'313'===web3.version.network){const a=TruffleContract(dappAbi),b=web3.currentProvider;a.setProvider(b),a.deployed().then(function(a){a.getCampaign(0).then(function(){})})}}(),function(){0<$('.charities-create').length&&$('.btn-charity').click(function(){$.post('/admin/charities/create',$('#CreateCharity').serialize()).done(function(){window.location.href='/admin/charities/manage'})})}(),function(){0<$('.charities-edit').length&&$('.btn-edit').click(function(){$.post('/admin/charities/edit',$('#EditCharity').serialize()).done(function(){location.reload()})})}(),function(){0<$('.charities-manage').length&&$('.btn-delete').click(function(){$.post('/admin/charities/delete/'+$(this).attr('data-charity-id')).done(function(){window.location.href='/admin/charities/manage'})})}(),async function(){let a;if(0<$('.eth-managers').length){if(window.web3&&'313'===web3.version.network){let b=TruffleContract(dappAbi);const c=web3.currentProvider;b.setProvider(c),a=await b.deployed()}$('.btn-add-manager').click(async()=>{const b=$('.manager-address').val();await a.addManager(b)})}}(),async function(){if(0<$('.campaign-page').length){let c;if(window.web3&&'313'===web3.version.network){let a=TruffleContract(dappAbi);const b=web3.currentProvider;a.setProvider(b),c=await a.deployed(),$('.btn-pledge-crypto').show();let d=$('.campaign-tokens').attr('data-crypto-id'),e=await c.getCampaign(d),f=await c.getCertificate(d,0);$.get(`/token/${d}/0`,function(a){console.log(a);let b=`<div class="post post-card single-post-card">
          <header class="post-header">
            <div class="post-thumb">

              <img src="/public/uploads/${a[0].image}.jpg" width="800" height="600" alt="">

            </div>
          </header>
          <div class="post-entry">
            <h3>
            <p class="text-center">${e[1]}</p>
            <p class="text-center">${f[3]}</p>
            </h3>
            <div class="text-center">

            </div>
            <div class="form-group">
              <input type="number" class="form-control amount" value="1" name="donationAmt">
            </div>
            <div class="text-center">
              <button class="btn btn-primary btn-donate-eth" data-campaign-id="${d}" data-certificate-id="${f[4]}">Donate ETH</button>
            </div>
          </div>
        </div>`;$('.campaign-tokens').append(b),$('.btn-donate-eth').click(async function(){let a=$(this).attr('data-campaign-id'),b=$(this).attr('data-certificate-id'),d=$('.amount').val();await c.createToken.sendTransaction(a,b,{value:1e18*d}),window.location.href='/pending'})})}var a=[{name:'Airline Ambassadors',identifier:'ambassadors',img:'/public/images/cause-photo-1.jpg'},{name:'The MADE',identifier:'made',img:'/public/images/cause-photo-2.jpg'},{name:'Hartsong Ranch',identifier:'hartsong',img:'/public/images/cause-photo-3.jpg'}],b=0;$('.btn-pledge').click(function(){$('.modal-pledge').find('button.pledge').show(),$('.modal-pledge').find('button.donate').hide(),$('.modal-pledge').modal('show')}),$('.btn-donate').click(function(){$('.modal-pledge').find('button.pledge').hide(),$('.modal-pledge').find('button.donate').show(),$('.modal-pledge').modal('show')}),$('.nav-button.left').click(function(){0==b?b=a.length-1:b--,$('.pledge-img').attr('src',a[b].img)}),$('.nav-button.right').click(function(){b==a.length-1?b=0:b++,$('.pledge-img').attr('src',a[b].img)}),$('button.pledge').click(function(){let c=a[b].identifier,d=a[b].name,e=$(this).attr('data-campaign-id'),f=$('.amount').val(),g=$('.pledge-msg').val();$.post('/pledge',{charityId:c,campaignId:e,charityName:d,pledgeAmount:f,pledgeMsg:g}).done(function(a){a&&window.location.reload(!1)})})}}(),async function(){let a;if(0<$('.charities-landing').length){if(window.web3&&'313'===web3.version.network){let b=TruffleContract(dappAbi);const c=web3.currentProvider;b.setProvider(c),$('.crypto-section').show(),a=await b.deployed()}let b=$('.crypto-tokens').attr('data-crypto-campaign');let c=await a.campaignCertificateCount(b);c=c.toNumber();for(let d;c;){let e=c-1;d=await a.getCertificate(b,e);let f=$(`.token-${b}${e}`);f.find('.title').text(d[3]),f.find('.remaining').text(`${d[2]} Remaining`),f.find('.btn-donate').attr('data-token-value',d[4]),c--}$('.btn-donate').click(async function(){let b=$(this).attr('data-campaign-id'),c=$(this).attr('data-token-id'),d=$(this).closest('.crypto-token').find('.amount').val();console.log(`${c}-amount`),console.log($(`${c}-amount`).val()),console.log(1e18*d),await a.createToken.sendTransaction(b,c,{value:1e18*d}),window.location.href='/pending'})}}(),async function(){if(0<$('.demo-header').length)if(!window.web3)$('.main-nav .blockchain').hide(),$('.brand-img').click(async function(){alert('You found a scavenger hunt token. Follow the instructions under "GUIDE" to claim this token')});else if('313'===web3.version.network){let a=TruffleContract(dappAbi);const b=web3.currentProvider;a.setProvider(b);let c=await a.deployed();$('.main-nav .blockchain').show(),$('.brand-img').click(async function(){await c.createToken(7,3)})}}(),async function(){let a=!1;if(0<$('.guide').length){if(window.web3&&'313'===web3.version.network){let b=TruffleContract(dappAbi);const c=web3.currentProvider;b.setProvider(c),a=await b.deployed(),$('.meta-img').click(async function(){await a.createToken(7,1)})}$('.meta-img').click(async function(){alert('You found a scavenger hunt token. Follow the instructions under "GUIDE" to claim this token')}),$('.btn-check-metamask').click(async()=>{$('.mm-connected, .mm-disconnected, .mm-not-exists, .mm-exists').hide(),window.web3?($('.mm-exists').show(),window.web3.isConnected()?$('.mm-connected').show():$('.mm-disconnected').show()):$('.mm-not-exists').show()}),$('.btn-check-testnet').click(async()=>{$('.tn-connected, .tn-disconnected').hide(),'313'===web3.version.network?$('.tn-connected').show():$('.tn-disconnected').show()}),$('.btn-check-dapp').click(async()=>{$('.contract-found, .contract-missing').hide(),console.log(a),'0x1aee2a793866471f98e3e2a5bbf5d555d7e09260'===a.address?$('.contract-found').show():$('.contract-missing').show()}),$('.btn-faucet').click(async()=>{$.get(`/faucet/${web3.eth.accounts}`).done(function(a){window.location.href=a?'/faucet-pending':'/sorry'})})}}(),async function(){if(0<$('.my-donations').length){let a;if(window.web3&&'313'===web3.version.network){let b=TruffleContract(dappAbi);const c=web3.currentProvider;b.setProvider(c),$('.crypto-section').show(),a=await b.deployed()}let b=(await a.totalSupply.call()).toNumber();for(console.log(b);b;){let c=await a.getToken(b),d=c[3];if(d===web3.eth.accounts[0]){$('.donations-box').show(),$('.no-donations').hide();let b=c[0],d=await a.getCampaign(b),e=c[4],f=await a.getCertificate(b,e),g=c[1].toNumber()/1e18;$.get(`/token/${b}/${e}`,function(a){let b=`<div class="post post-card single-post-card">
          <header class="post-header">
            <div class="post-thumb">

              <img src="public/uploads/${a[0].image}.jpg" width="800" height="600" alt="">

            </div>
          </header>
          <div class="post-entry">
            <h3>
            <p class="text-center">${d[1]}</p>
            <p class="text-center">${f[3]}</p>
            <p class="text-center">${g} ETH</p>
            </h3>
            <div class="text-center">

            </div>
            <div class="text-center">
              <button class="btn btn-primary btn-certificate" data-ein="${d[2]}" data-charity="${d[1]}" data-campaign="${f[3]}" data-value="${g}" data->Get 501c3</button>
            </div>
          </div>
        </div>`;$('.donations-box').append(b)})}b--}$('.btn-certificate').click(function(){$(this).text(''),$(this).addClass('spinner');let a=$(this).attr('data-value'),b=$(this).attr('data-charity'),c=$(this).attr('data-campaign'),d=$(this).attr('data-ein'),e={name:web3.eth.accounts[0],fileName:1e19*Math.random(),donationString:`${a} ETH`,donationSubTitle:c,charityName:b,charityEIN:d};$.post('/certificate',e,function(a){window.location.href=a})})}}(),async function(){}(),async function(){let a;if(0<$('.statistics').length){if(window.web3&&'313'===web3.version.network){let b=TruffleContract(dappAbi);const c=web3.currentProvider;b.setProvider(c),a=await b.deployed()}let b={totalRaised:(await a.totalRaised()).toNumber(),totalCampaigns:(await a.totalCampaigns()).toNumber(),totalSupply:(await a.totalSupply.call()).toNumber(),holders:{}};$('.totalSupply').text(`${b.totalSupply} Donations`),$('.totalRaised').text(`${b.totalRaised/1e18} Ether`),$('.totalCampaigns').text(`${b.totalCampaigns} Campaigns`);for(let c=10,d=b.totalSupply,e=await this.window.web3.eth.getBlockNumber((a,b)=>{$('.currentBlock').text(b)});c&&d;){let e=await a.getToken(d),f=e[0].toNumber(),g=e[4].toNumber(),h=await a.getCertificate(f,g);$.get(`/token/${f}/${g}`,function(a){b.holders[e[3]]=b.holders[e[3]]?b.holders[e[3]]+e[1].toNumber():e[1].toNumber();let c=`<div class="post post-card single-post-card">
          <header class="post-header">
            <div class="post-thumb">

              <img src="public/uploads/${a[0].image}.jpg" width="800" height="600" alt="">

            </div>
          </header>
          <div class="post-entry">
            <h3>
            <p class="text-center">${h[3]}</p>
              Owner:
              <p class="owner">${e[3]}</p>
              Donated:
              <p class="donated">${e[1].toNumber()/1e18} Ether</p>
              Issue #:
              <p class="donated">${e[2].toNumber()}</p>
            </h3>
            <div class="text-center">

            </div>
          </div>
        </div>`;$('.donations-box').append(c)}),c--,d--}}}();