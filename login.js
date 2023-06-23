function switchPage(url) {
  window.location.href = url;
}

document.getElementById('btn').onclick = function() {
  var robot = document.getElementById('robot');
  var password = document.getElementById('password').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message');

  if (robot.checked && email === 'chien@richmail.com' && password === '11332244') {
    switchPage('noneedcash.html');
  } else {
    message.innerHTML = '<h4 style="color: red">帳號或密碼錯誤</h4>';
  }
}
