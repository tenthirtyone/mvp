(function () {
  if ($('.charities-edit').length > 0) {
    $('.btn-edit').click(function () {
      $.post("/admin/charities/edit", $("#EditCharity").serialize())
        .done(function (data) {
          location.reload();

        })
    })
  }
})();

