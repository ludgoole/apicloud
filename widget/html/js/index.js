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
  textArea.style['bottom'] = '0'
  textArea.style['left'] = '-100%'
  textArea.style['zIndex'] = -1
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    return document.execCommand('copy');
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
  if (!isInWechat()) {
    $('.landing-page-container-mask').show()
    $('#mask').show()
  }

  var callLib = new CallApp(androidOptions);

  callLib.open({
    param: {},
    path: '',
  });
}
function iosDownload() {
  var callLib = new CallApp(iphoneOptions);

  callLib.open({
    param: {},
    path: '',
  });
}

$(function() {
  // 置顶
  window.scrollTo(0,0)

  // 赋值bonusCode
  $('#bonusCode').val(bonusCode)
  
  // 复制bonusCode
  $('#copyBtn').on('click', function() {
    var text = $('#bonusCode').val()
    var success = copyText(text)
    toast(success ? '复制成功' : '复制失败')
  })
  
  // 下载应用
  $('.download-btn').on('click', function() {
    window.scrollTo(0,0)
    if (isAndroid()) {
      androidDownload()
    } else {
      iosDownload()
    }
  })
  
  // 微信引导
  $('#mask').on('click', function() {
    $('.landing-page-container-mask').hide()
    $('#mask').hide()
  })
  
  // 关闭
  $('#close').on('click', function() {
    $('.landing-page-container-mask').hide()
    $('.landing-page-bonus ').hide()
  })
})