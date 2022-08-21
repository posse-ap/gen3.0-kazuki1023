// quizの解答を作成しまーす約79万人

"use strict";
// 正解の表示、ここでボタンをクリックするとクラスを追加して正解、不正解が出るようにしたい！！

// https://techmemo.biz/javascript/click-toggle-class/

// とりあえず、以下にhtmlでjsを書くをやってみて、うまく行ったらそれをコピーするという形を取りたいとおもう
const quizSet = [
  [
    "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
    ["約28万人", "約79万人", "約183万人"],
    1,
    "img-quiz01.png",
  ],
  [
    "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
    ["INTECH", "BIZZTECH", "X-TECH"],
    2,
    "img-quiz02.png",
  ],
  [
    "IoTとは何の略でしょう？",
    ["Internet of Things", "Integrate into Technology", "Information of Tool"],
    0,
    "img-quiz03.png"
  ],
  [
    "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
    ["Society 5.0", "CyPhy", "SDGs"],
    0,
    "img-quiz04.png"
  ],
  [
    "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
    ["Web3.0", "NFT", "メタバース"],
    0,
    "img-quiz05.png"
  ],
  [
    "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？",
    ["約２倍", "約５倍", "約１１倍"],
    1,
    "img-quiz06.png"
  ],
];
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
shuffleArray(quizSet);

let quizSetLength = quizSet.length;
for (let i = 0; i < quizSetLength; i++) {
  let index = quizSet[i][2];
  let questionContent =
    `<section class="question${i + 1}">` +
    `<div class="question${i + 1}_quiz">` +
    `<h2 class="question${i + 1}_quiz_title">` +
    `<span class="question${i + 1}_quiz_title_label">Q${i + 1}</span>` +
    `<span class="question${i + 1}_quiz_title_text">${quizSet[i][0]}</span>` +
    `</h2>` +
    `<figure class="question${i + 1}_quiz_title_image">` +
    `<img src="${quizSet[i][3]}" alt="" class="question${
      i + 1
    }_quiz_title_img">` +
    ` </figure>` +
    `</div>` +
    `<div class="question${i + 1}_answer">` +
    `<span class="question${i + 1}_answer_label">A</span>` +
    `<ul class="question${i + 1}_answer_list">`;
  for (let j = 0; j < quizSet[i][1].length; j++) {
    questionContent +=
      `<li class="question${i + 1}_answer_list_item">` +
      `<button class="question${i + 1}_answer_list_item_button" id="js_answer_${
        i + 1
      }${j + 1}">${quizSet[i][1][j]}` +
      ` <img src="icon-arrow.svg" ` +
      `class="question${i + 1}_answer_list_item_button_icon" ></img>` +
      `</button>` +
      `</li>`;
  }
  questionContent +=
    `</ul>` +
    `<div class="js-answer${i + 1}_box">` +
    `<p class="question${i + 1}_answer_correct_title" id="js-answer${
      i + 1
    }_correct_title">` +
    `正解！</p>` +
    ` <p class="question${i + 1}_answer_incorrect_title" ` +
    `id="js-answer${i + 1}_incorrect_title">不正解...</p>` +
    `<p class="question${i + 1}_answer_correct_content" ` +
    `id="js_answer${i + 1}_title_correct_content">` +
    `<span class="question${i + 1}_answer_correct_content_label">A</span>` +
    `<span class="js-answer_text">${quizSet[i][1][index]}</span>` +
    //１問目の場合、 quizSet[i]で[日本〜]、[1]で選択肢、[index]で[選択肢の中の正解]を出した
    `</p>` +
    `</div>` +
    `</div>` +
    `</section>`;
  document
    .getElementById("js_main")
    .insertAdjacentHTML("beforeend", questionContent);
}

//ボタン変化まとめ
// 1-1のボタン変化
let btn11 = document.querySelector("#js_answer_11");
// クリックする要素を取得
let box1 = document.getElementsByClassName("js-answer1_box");
// クラスを追加する要素を取得
let title11 = document.querySelector("#js-answer1_incorrect_title");
// クラスを追加する要素を取得
let box11class = function (el) {
  el[0].classList.toggle("question1_answer_incorrect");
};
// クラスを追加・削除する動きを定義
btn11.addEventListener(
  "click",
  function () {
    box11class(box1);
  },
  false
);
// ”btn”がクリックされたら”box”に対してbox11classを実行
document.getElementById("js_answer_11").addEventListener("click", () => {
  const targetnode = document.getElementById("js_answer_11");
  targetnode.style.border = "solid 5px #0071BC";
  targetnode.style.backgroundColor = "#f6f6f6";
});
document.getElementById("js_answer_11").addEventListener("click", () => {
  const targetnode = document.getElementById("js-answer1_incorrect_title");
  targetnode.style.display = "block";
});
document.getElementById("js_answer_11").addEventListener("click", () => {
  document.getElementById("js_answer_11").setAttribute("disabled", "true");
  document.getElementById("js_answer_12").setAttribute("disabled", "true");
  document.getElementById("js_answer_13").setAttribute("disabled", "true");
});
// ここは変えなくても良い
// 1-2のボタン変化
// 1-2押された時の正解表示
let btn12 = document.querySelector("#js_answer_12");
let title12 = document.querySelector("#js-answer1_correct_title");
let box12class = function (el) {
  el[0].classList.toggle("question1_answer_correct");
};
btn12.addEventListener(
  "click",
  function () {
    box12class(box1);
  },
  false
);
document.getElementById("js_answer_12").addEventListener("click", () => {
  const targetnode = document.getElementById("js_answer_12");
  targetnode.style.border = "solid 5px #0071BC";
  targetnode.style.backgroundColor = "#f6f6f6";
});
document.getElementById("js_answer_12").addEventListener("click", () => {
  const targetnode = document.getElementById("js-answer1_correct_title");
  targetnode.style.display = "block";
});
document.getElementById("js_answer_12").addEventListener("click", () => {
  document.getElementById("js_answer_11").setAttribute("disabled", "true");
  document.getElementById("js_answer_12").setAttribute("disabled", "true");
  document.getElementById("js_answer_13").setAttribute("disabled", "true");
});
// 1-3のボタン変化
let btn13 = document.querySelector("#js_answer_13");
let title13 = document.querySelector("#js-answer1_incorrect_title");
let box13class = function (el) {
  el[0].classList.toggle("question1_answer_incorrect");
};
btn13.addEventListener(
  "click",
  function () {
    box13class(box1);
  },
  false
);
document.getElementById("js_answer_13").addEventListener("click", () => {
  const targetnode = document.getElementById("js_answer_13");
  targetnode.style.border = "solid 5px #0071BC";
  targetnode.style.backgroundColor = "#f6f6f6";
});

document.getElementById("js_answer_13").addEventListener("click", () => {
  const targetnode = document.getElementById("js-answer1_incorrect_title");
  targetnode.style.display = "block";
});
document.getElementById("js_answer_13").addEventListener("click", () => {
  document.getElementById("js_answer_11").setAttribute("disabled", "true");
  document.getElementById("js_answer_12").setAttribute("disabled", "true");
  document.getElementById("js_answer_13").setAttribute("disabled", "true");
});
