// 獲取URL中的參數
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// 定義一些隨機文字的陣列
var randomTexts = [
  "所有偉大的事，都是因為堅持才得以實現的。\n—聖凱薩琳 Catherine of Siena",
  "只有放棄嘗試的，才是失敗者。\n—愛因斯坦 Albert Einstein",
  "偉大的作品靠的不是力量，而是靠著堅持來完成的。\n—詹森 Samuel Johnson",
  "一旦你學會放棄，你就會習慣性的放棄。\n—文斯 · 蘭巴迪 Vince Lombardi",
  "就因為你失敗了一次，並不代表你將會永遠的失敗下去。\n—瑪麗蓮·夢露 Marilyn Monroe",
  "事情總是看起來非常艱難，直至你最終將它們完成。\n—曼德拉 Nelson Mandela",
];

// 從URL中取得隨機數字
var randomNumber = getParameterByName("randomNumber");

// 從陣列中隨機挑選一段文字
var randomIndex = Math.floor(Math.random() * randomTexts.length);
var randomText = randomTexts[randomIndex];

// 將文字顯示在網頁上
document.getElementById("randomText").innerText = randomText;
