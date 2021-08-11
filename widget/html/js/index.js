function isInWechat() {
  var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
  }
}

$('#android').on('click', function() {
  if (isInWechat()) {
    $('#mask').show()
  }
  const callLib = new CallApp(androidOptions);

  callLib.open({
    param: {},
    path: '',
  });
})

$('#iphone').on('click', function() {
  const callLib = new CallApp(iphoneOptions);

  callLib.open({
    param: {},
    path: '',
  });
})

$('#mask').on('click', function() {
  $('#mask').hide()
})