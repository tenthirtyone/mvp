(function() {
  if($('.admin-login').length > 0) {
    $('.btn-login').click(function() {
      const loginData = $('.password').val();
      if (sjcl) {
        let bits = sjcl.hash.sha256.hash(loginData);
        let hexString = sjcl.codec.hex.fromBits(bits);
        $.post('/admin/login', {data: hexString}, function (loggedIn) {
          console.log(loggedIn);
          if (loggedIn) {
            window.location.href = "/admin";
          } else {
            window.reload(false);
          }
        });
      }
    })
  }
})();