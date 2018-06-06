(function () {
  if ($('.campaigns-create').length > 0) {
    $('.btn-USD').click(function() {
      $.post("/admin/campaigns/USD/create", $("#CreateCampaign").serialize())
        .done(function(data) {
          window.location.href="/admin/campaigns/USD/manage";
        })
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

