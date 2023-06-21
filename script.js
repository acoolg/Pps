function switchPage(url) {
    window.location.href = url;
}

var money = document.getElementById('money');
var message = document.getElementById('message');
var meta = document.getElementById('meta');

document.getElementById('btn').onclick = function() {
    var amount = parseInt(money.value);

    if (amount < 50) {
        message.innerHTML = '金額不足';
    } else if (amount >= 50 && meta.value === '1897-2513-4832') {
        switchPage('noneedcash.html');
    } else {
        message.innerHTML = '帳戶餘額不足';
    }
};
