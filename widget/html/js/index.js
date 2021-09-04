function isAndroid() {
  var ua = navigator.userAgent
  return ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
}
function isiOS() {
  var ua = navigator.userAgent
  return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
function isInWechat() {
  var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
  }
}
function copyText (text) {
  var textArea = document.createElement("textarea");
  textArea.style['position'] = 'absolute'
  textArea.style['top'] = '0'
  textArea.style['left'] = '0'
  textArea.style['display'] = 'none'
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    // console.log('success to copy', msg);
    return msg
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
};

function toast(msg) {
  $('#toast').text(msg)
  $('#toast').show()
  setTimeout(function() {
    $('#toast').hide()
  }, 2000)
}

function androidDownload() {
  console.log(123)
  if (!isInWechat()) {
    $('#mask').show()
  }

  const callLib = new CallApp(androidOptions);

  callLib.open({
    param: {},
    path: '',
  });
}
function iosDownload() {
  const callLib = new CallApp(iphoneOptions);

  callLib.open({
    param: {},
    path: '',
  });
}

// 复制
$('#copyBtn').on('click', function() {
  var text = $('#bonusCode').val()
  var msg = copyText(text)
  toast(msg === 'successful' ? '复制成功' : '复制失败')
})

// 下载
$('#downloadBtn').on('click', function() {
  if (isAndroid()) {
    androidDownload()
  } else {
    iosDownload()
  }
})

// 微信引导
$('#mask').on('click', function() {
  $('#mask').hide()
})

// 关闭
$('#close').on('click', function() {
  $('.landing-page-bonus ').hide()
})
