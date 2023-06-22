var ran = 0
var count = 0
console.log(document.getElementById('word'));

function getrandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

document.getElementById('id').onclick = function() {
  count = count + 1
  let ran = getrandom(1, 100);
  if (ran == 1) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>成功並不是最終目的，失敗也不是致命的。重要的是繼續前進。</p></li>'
  }
  else if (ran == 2) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>只有努力不懈，才能實現自己的夢。</p></li>'
  }
  else if (ran == 3) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>不管你現在在哪裡，重要的是你朝著你想去的方向前進。</p></li>'
  }
  else if (ran == 4) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>沒有任何事情比堅持更重要。</p></li>'
  }
  else if (ran == 5) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>每一個失敗都是一次重新開始的機會。</p></li>'
  }
  else if (ran == 6) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>當你想要放棄的時候，請記得一開始你為了什麼而努力。</p></li>'
  }
  else if (ran == 7) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>做一個改變世界的人，而不是一個被世界改變的人。</p></li>'
  }
  else if (ran == 8) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>珍惜每一個機會，因為它可能是你成功的唯一機會。</p></li>'
  }
  else if (ran == 9) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>你所需要的不是一個更好的機會，而是利用你所擁有的機會。</p></li>'
  }
  else if (ran == 10) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>當你的動力超越困難，勝利就在不遠處。</p></li>'
  }
  else if (ran == 11) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>成功的關鍵不在於從未失敗，而是在於從失敗中學習並再次嘗試。</p></li>'
  }
  else if (ran == 12) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>每一個挑戰都是成長的機會，不要害怕迎接它們。</p></li>'
  }
  else if (ran == 13) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>相信自己的能力，你可以做到你想做的任何事情。</p></li>'
  }
  else if (ran == 14) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>堅持不懈的努力是實現夢想的鑰匙。</p></li>'
  }
  else if (ran == 15) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>不要害怕改變，因為它可能帶來更好的機會。</p></li>'
  }
  else if (ran == 16) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>成功不是偶然的，它是由毅力和奮鬥所塑造出來的。</p></li>'
  }
  else if (ran == 17) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>只要你相信自己，你就能超越任何限制。</p></li>'
  }
  else if (ran == 18) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>每一次失敗都是一次重新開始的機會。</p></li>'
  }
  else if (ran == 19) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>不要將自己局限在舒適區，勇敢追尋你的夢想。</p></li>'
  }
  else if (ran == 21) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>努力不會背叛你，它將引領你走向成功的道路。</p></li>'
  }
  else if (ran == 22) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>逆境是成長的機會，踏上挑戰的征程，你將變得更加堅強。</p></li>'
  }
  else if (ran == 23) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>成功不僅取決於智力，還取決於毅力和耐心。</p></li>'
  }
  else if (ran == 24) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>勇敢面對恐懼，它是成長的關鍵。</p></li>'
  }
  else if (ran == 25) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>不要等待機會，而是創造機會。</p></li>'
  }
  else if (ran == 26) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>堅持信念，你將超越自己的極限。</p></li>'
  }
  else if (ran == 27) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>每一步都是向成功邁進的機會。</p></li>'
  }
  else if (ran == 28) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>挑戰自己，你將發現你的潛力無限。</p></li>'
  }
  else if (ran == 29) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>不要輕易放棄，因為下一刻就是突破的契機。</p></li>'
  }
  else if (ran == 30) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>失敗不代表結束，它只是成功路上的一個里程碑。</p></li>'
  }
  else if (ran == 31) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>相信自己的選擇，並為之全力以赴。</p></li>'
  }
  else if (ran == 32) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>成功需要時間，不要急於見成效，耐心等待並堅持下去。</p></li>'
  }
  else if (ran == 33) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>追求卓越，你將成就非凡。</p></li>'
  }
  else if (ran == 34) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>做你相信是對的事情，不要在意他人的評價。</p></li>'
  }
  else if (ran == 35) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>每一個夢想都值得追求，因為它們是你內心的聲音。</p></li>'
  }
  else if (ran == 36) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>相信自己的能力，你將成為你所想成為的人。</p></li>'
  }
  else if (ran == 37) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>讓你的努力成為你的驕傲。</p></li>'
  }
  else if (ran == 38) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>不要停下來，直到你達到你的目標。</p></li>'
  }
  else if (ran == 39) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>克服困難，你將變得無堅不摧。</p></li>'
  }
  else if (ran == 40) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>害怕失敗，因為失敗是成功的必經之路。</p></li>'
  }
  else if (ran == 41) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>用行動來證明自己，而不僅僅是說出口。</p></li>'
  }
  else if (ran == 42) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>擁抱變化，因為變化是成長的機會。</p></li>'
  }
  else if (ran == 43) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>做自己喜歡的事情，這樣你將無愧於心。</p></li>'
  }
  else if (ran == 44) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>成功不是終點，而是一個不斷追求的過程。</p></li>'
  }
  else if (ran == 45) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>相信自己的直覺，它往往是正確的。</p></li>'
  }
  else if (ran == 46) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>每一天都是一個新的開始，充滿無限可能。</p></li>'
  }
  else if (ran == 47) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>付出努力，即使沒有立即的回報。</p></li>'
  }
  else if (ran == 48) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>用心去感激生活中的每一個細節。</p></li>'
  }
  else if (ran == 49) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>擁抱挑戰，因為它們將使你更強大。</p></li>'
  }
  else if (ran == 50) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>用愛心對待他人，你將收穫更多的愛。</p></li>'
  }
  else if (ran == 51) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>相信自己的價值，不要讓他人的評價左右你的自信。</p></li>'
  }
  else if (ran == 52) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>每一個小的進步都是向大目標邁進的重要一步。</p></li>'
  }
  else if (ran == 53) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>追求卓越不是為了取悅他人，而是為了成為更好的自己。</p></li>'
  }
  else if (ran == 54) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>將困難視為成長的機會，它們將使你更加堅韌。</p></li>'
  }
  else if (ran == 55) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>不要害怕犯錯，因為錯誤是學習和成長的機會。</p></li>'
  }
  else if (ran == 56) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>追求夢想，即使路途艱難，也不要放棄。</p></li>'
  }
  else if (ran == 57) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>相信自己的能力，你將成為生活的贏家。</p></li>'
  }
  else if (ran == 58) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>尋找快樂的源泉，它往往在你內心深處。</p></li>'
  }
  else if (ran == 59) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>享受當下的每一刻，生活即使短暫也是美好的。</p></li>'
  }
  else if (ran == 60) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>克服恐懼，你將發現自己的無限潛能。</p></li>'
  }
  else if (ran == 61) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>不要局限於舒適區，勇於追求成長和新的挑戰。</p></li>'
  }
  else if (ran == 62) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>每一個努力都是在為未來的自己打下基石。</p></li>'
  }
  else if (ran == 63) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>相信自己的選擇，即使他人不理解。</p></li>'
  }
  else if (ran == 64) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>不要忘記感恩，感謝身邊的人和事。</p></li>'
  }
  else if (ran == 65) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>永不停止學習，持續增長知識和技能。</p></li>'
  }
  else if (ran == 66) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>堅持做正確的事情，即使沒有人在看。</p></li>'
  }
  else if (ran == 67) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>尊重他人的差異，這樣你才能擁抱多元世界。</p></li>'
  }
  else if (ran == 68) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>相信自己的直覺，它是你內心的指南針。</p></li>'
  }
  else if (ran == 69) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>活出真實的自己，不要為了取悅他人而做出變化。</p></li>'
  }
  else if (ran == 70) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>在失敗中找到教訓，在成功中找到滿足。</p></li>'
  }
  else if (ran == 71) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>勇於追求自己的夢想，即使周圍的人不理解。</p></li>'
  }
  else if (ran == 72) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>堅持信念，即使路途艱辛。</p></li>'
  }
  else if (ran == 73) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>努力工作，但也不要忘記休息和放鬆。</p></li>'
  }
  else if (ran == 74) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>不要讓過去的錯誤阻礙你前進，把它們當作學習的機會。</p></li>'
  }
  else if (ran == 75) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>追求內心的平靜，這是真正的富有。</p></li>'
  }
  else if (ran == 76) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>與他人合作，共同成就更大的目標。</p></li>'
  }
  else if (ran == 78) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>相信自己的創造力，你可以創造美好的事物。</p></li>'
  }
  else if (ran == 79) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>每一次嘗試都是成長的機會，不要害怕錯誤。</p></li>'
  }
  else if (ran == 80) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>追求平衡，照顧好身心健康。</p></li>'
  }
  else if (ran == 81) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>堅持自己的價值觀，不被他人的觀點所左右。</p></li>'
  }
  else if (ran == 82) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>不要停下來，直到你實現自己的理想。</p></li>'
  }
  else if (ran == 83) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>讓愛成為你行動的指引，並將其傳遞給他人。</p></li>'
  }
  else if (ran == 84) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>做一個積極的改變者，而不是被動的旁觀者。</p></li>'
  }
  else if (ran == 85) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>相信生活的魔力，你將發現無盡的可能性。</p></li>'
  }
  else if (ran == 86) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>挑戰自己，超越自我，成就非凡的人生。</p></li>'
  }
  else if (ran == 87) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>每一個人都擁有獨特的價值和使命，發掘並發揮你的潛力。</p></li>'
  }
  else if (ran == 88) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>不要讓困難和挫折擊垮你的信心，堅持走下去。</p></li>'
  }
  else if (ran == 89) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>學會感激身邊的人和事，感恩是一種美麗的心態。</p></li>'
  }
  else if (ran == 90) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>懷著感恩之心，用愛心回饋社會，讓世界變得更美好。</p></li>'
  }
  else if (ran == 91) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>相信自己的能力，你有無限的可能性。</p></li>'
  }
  else if (ran == 92) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>抓住每個機會，探索新的領域，不斷成長和學習。</p></li>'
  }
  else if (ran == 93) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>用愛心對待自己和他人，愛是最強大的力量。</p></li>'
  }
  else if (ran == 94) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>堅持自己的原則和價值觀，不要輕易妥協。</p></li>'
  }
  else if (ran == 95) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>追求卓越，做到最好，不斷挑戰自己的極限。</p></li>'
  }
  else if (ran == 96) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>不要懼怕失敗，它是通往成功的必經之路。</p></li>'
  }
  else if (ran == 97) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>勇敢面對改變，改變帶來成長和新的機會。</p></li>'
  }
  else if (ran == 98) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>擁抱多元性和包容心態，這將豐富你的人生經驗。</p></li>'
  }
  else if (ran == 99) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>相信自己的直覺和內心聲音，它們是你的指引。</p></li>'
  }
  else if (ran == 100) {
    wordl.innerHTML = wordl.innerHTML + '<li><p>珍惜時間，用它來實現自己的夢想和目標。</p></li>'
  };
  counter.innerHTML = '計數：' + count
  if (count >= 50) {
    btn.innerHTML = '<a href="cash.html"><button class="button">欲使用請付費</button></a>'
  }
}
