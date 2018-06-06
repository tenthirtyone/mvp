(function() {
  if ($('.charities-manage').length > 0) {
    $('.btn-delete').click(function () {
      $.post("/admin/charities/delete/" + $(this).attr('data-charity-id'))
        .done(function (data) {
          window.location.href = "/admin/charities/manage";
        })
    })
  }
})();
