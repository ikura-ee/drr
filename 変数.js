//リスト化、変数定義、数の抽出
var りほたんリスト = ["りほたん１","りほたん2","りほたん3"];
var 人数 = 0;
for (i = 0; i < りほたんリスト.length; i++) {
人数 = 人数 + 1;
  }
console.log(人数);

//変数設定、増加
var りほたん = 19;
りほたん++;
りほたん++;
りほたん++;
console.log(りほたん);

//変数設定、減少
var りほたん = 19;
りほたん--;
りほたん--;
りほたん--;
console.log(りほたん);

//変数設定、属性付与
var りほたん = {性別:"女",年齢:19,種族:"人間",職業:"JD"};
りほたん.種族 = "天使"
りほたん.趣味 = "パンチラ"
console.log(りほたん);



//if文、算出
var りほたんリスト = ["りほたん1","りほたん2","りほたん3"];
var 人数 = 0;

for ( i = 0; i < りほたんリスト.length; i++) {
  if ( i == 0) {
    人数++;
  } else {
    人数--;
  }
}

console.log(人数);

//if文　console memo
var りほたんリスト = ["りほたん1","りほたん2","りほたん3"];
var 人数 = 0;

for ( i = 0; i < りほたんリスト.length; i++) {
  console.log( i + "週目のループ開始");
  if ( i == 1 ) {
     人数++;
  } else {
     人数--;
  }
}

console.log(人数)

//if ~ else
if（条件1) {
} else if (条件2) {
} else if (条件3) {
} else {
}

// if ~ true else false
var りほたんリスト = ["りほちゃん1","りほちゃん2","りほちゃん3","りほちゃん4"];
var りほちゃんは四人 = null;

for( i = 0; i < りほたんリスト.length; i++) {
  if ( i == 3) {
    りほちゃんは四人 = true
  } else {
    りほちゃんは四人 = false
  }
}

console.log(りほちゃんは四人)


//属性でif分岐する場合
var りほたん = { 性別: "女性", 年齢:19, 種族:"天使"};
りほたん.HP = null;
りほたん.AT = null;

  if ( りほたん.種族 == "人間") {
    HP = 100;
    AT = 60;
  }
  if ( りほたん.種族 == "天使") {
    HP = 999999999;
    AT = 999999999;
  }

console.log(HP)
console.log(AT)


var りほたん = { 性別 : "女性", 年齢 : 19, 種族 : "天使", HP:9999999,AT:9999999};
var enemy = ["ケンシロウ1","ケンシロウ2","ケンシロウ3","ケンシロウ4","ケンシロウ5"];
enemy.種族 = "陰獣"
enemy.HP = 1000
enemy.AT = 600

for ( i = 0, enemy.length; i++);
console.log(りほたん）

