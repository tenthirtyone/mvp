(function () {
  if ($('.charities-create').length > 0) {

    $('.btn-charity').click(function() {
      $.post("/admin/charities/create", $("#CreateCharity").serialize())
        .done(function(data) {
          window.location.href="/admin/charities/manage";
        })
      })
  }
})();

