//新HTML・ボタン枠追加
var 新HTML = document.createElement("div");
新HTML.style.zIndex = 999999;
新HTML.style.position = "absolute";
新HTML.style.backgroundColor = "white";
新HTML.style.top = "0px";
新HTML.style.left = "0px";
新HTML.style.color = "black";
新HTML.style.padding = "5px";
document.body.prepend(新HTML);
// ↑ まだ理解しなくて大丈夫 ↑

// りほたん攻撃ボタン作成
var りほたん攻撃ボタン = document.createElement("div");
りほたん攻撃ボタン.textContent = "りほたん攻撃ボタン";
新HTML.append(りほたん攻撃ボタン);

// 大五郎HP作成
var 大五郎HP = document.createElement("div");
大五郎HP.textContent = "500";
新HTML.append(大五郎HP);

// りほたん攻撃ボタンを押した時
りほたん攻撃ボタン.addEventListener("click", () => {
    // 大五郎HPを5減らす
    大五郎HP.textContent -= 5;
});


//ボタンに属性を追加
var 新HTML = document.createElement("div");
新HTML.style.zIndex = 999999;
新HTML.style.position = "absolute";
新HTML.style.backgroundColor = "white";
新HTML.style.top = "0px";
新HTML.style.left = "0px";
新HTML.style.color = "black";
新HTML.style.padding = "5px";
document.body.prepend(新HTML);

var りほたん攻撃ボタン = document.createElement("div");
りほたん攻撃ボタン.textContent = "りほたん攻撃ボタン";
新HTML.append(りほたん攻撃ボタン);

var 種族 = document.createElement("div");
種族.textContent = "天使";
新HTML.append(種族);

var 大五郎HP = document.createElement("div");
大五郎HP.textContent = "500";
新HTML.append(大五郎HP);

りほたん攻撃ボタン.addEventListener("click", () => {
    大五郎HP.textContent -= 5;
});



//ボタン　if
var 新HTML = document.createElement("div");
新HTML.style.zIndex = 999999;
新HTML.style.position = "absolute";
新HTML.style.backgroundColor = "white";
新HTML.style.top = "0px";
新HTML.style.left = "0px";
新HTML.style.color = "black";
新HTML.style.padding = "5px";
document.body.prepend(新HTML);

var りほたん攻撃ボタン = document.createElement("div");
りほたん攻撃ボタン.textContent = "りほたん攻撃ボタン";
新HTML.append(りほたん攻撃ボタン);

var 種族 = document.createElement("div");
種族.textContent = "天使";
新HTML.append(種族);

var 大五郎HP = document.createElement("div");
大五郎HP.textContent = "堕天使";
大五郎HP.textContent = "人間";
新HTML.append(大五郎HP)

var 大五郎の種族 = document.createElement("div");
大五郎の種族.textContent = "堕天使";
大五郎の種族.setAttribute("contenteditable", true);
新HTML.append(種族);

var 大五郎HP = document.createElement("div");
if (種族.textContent === "堕天使") {
    大五郎HP.textContent = "500";
} else {
    大五郎HP.textContent = "5";
}

りほたん攻撃ボタン.addEventListener("click", () => {
    大五郎HP.textContent -= 5;
});




