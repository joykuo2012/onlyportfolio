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
  "水滴終可磨損大石，不是因為它力量強大，而是由於晝夜不捨的滴墜。\n—奧維德 Ovid",
  "成功人士與其他人的區別，不是在於他們的力量或知識，而是在於他們有多堅持。\n—文斯·蘭巴迪 Vince Lombardi",
  "只有毅力才會使我們成功，而毅力的來源在於毫不動搖，堅持採取為達到成功所需要的方法。\n—車爾尼雪夫斯基 Nikolay Chernyshevsky",
  "無論什麼時候，遇到什麼困境，我都絕不允許自己有半點灰心喪氣。\n—愛迪生 Thomas A. Edison",
  "你絕不可放棄！一旦你放棄，你就和其他人一樣了。\n—克里斯·埃弗特 Chris Evert",
  "一個人做事，在動手之前，當然要詳慎考慮；但是計劃或方針已定之後，就要認定目標前進，不可再有遲疑不決的態度，這就是堅毅的態度。\n—鄒韜奮",
  "既然已踏上了這條路，任何事物都無法阻止我繼續走下去。\n—康德 Immanuel Kant",
  "只有剛強的人，才有神聖的意志。只有戰鬥的人，才能獲得勝利。\n—歌德 Johann Wolfgang van Goethe",
  "一個人只要堅持不懈的追求，他就必能達到目標。\n—司湯達 Stendhal",
  "使我們釋放最大潛能的，不是力量或知識，而是鍥而不捨的精神。\n—邱吉爾 Winston Churchill",
  "我可以接受失敗，但我不能接受放棄。\n—邁克爾·喬丹 Michael Jordan",
  "你可能會經歷多次失敗，但你絕不可被打倒。事實上，經歷失敗是人生必經之路，它們讓你更認識自己，知道自己無論陷入多艱苦的困境，也依然是可以走出來的。\n—馬婭·安傑盧 Maya Angelou",
  "第一次放棄是痛苦的；第二次放棄則較為輕鬆了；而當你放棄第三次，你就已漸漸的把它當作習慣了。\n—鄒韜奮 Lewis Gordon Pugh",
];

// 從URL中取得隨機數字
var randomNumber = getParameterByName("randomNumber");

// 從陣列中隨機挑選一段文字
var randomIndex = Math.floor(Math.random() * randomTexts.length);
var randomText = randomTexts[randomIndex];

// 將文字顯示在網頁上
document.getElementById("randomText").innerText = randomText;
