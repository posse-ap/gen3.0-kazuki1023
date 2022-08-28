// quizの解答を作成しまーす約79万人

"use strict";
// 正解の表示、ここでボタンをクリックするとクラスを追加して正解、不正解が出るようにしたい！！

// https://techmemo.biz/javascript/click-toggle-class/

// とりあえず、以下にhtmlでjsを書くをやってみて、うまく行ったらそれをコピーするという形を取りたいとおもう

// const quizSet= [
//     問題文,
//     選択肢,
//     正解、不正解の選択肢
//     画像のurlをとってきた
//     ”正解！”の文字をとってきた。これで解答に”正解！”って出したい
//     "不正解..."の文字をとってきた。これで解答に”不正解！”って出したい。これ上のを使えばこれなくしてもできそうだけど、やり方わからんから、とりま放置
// ]
// const quizSet1 = {
//   questionName:[
//     '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？'
//   ],
//   img:[
//     "img-quiz01.png"
//   ],
//   answerName: [
//     "約28万人","約79万人","約183万人"
//   ],
//   answerNote: [
//     "経済産業省 2019年3月 - IT 人材需給に関する調査"
//   ],
// }

// const quizSet2 = {
//   questionName:[
//     '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？'
//   ],
//   img:[
//     "img-quiz02.png"
//   ],
//   answerName: [
//     "INTECH","BIZZECH","X-TECH"
//   ],
// }

// const quizSet3 = {
//   questionName:[
//     'IoTとは何の略でしょう？'
//   ],
//   img:[
//     "img-quiz03.png"
//   ],
//   answerName: [
//     "Internet of Things","Integrate into Technology","Information on Tool"
//   ],
// }

// const quizSet4 = {
//   questionName:[
//     'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？'
//   ],
//   img:[
//     "img-quiz04.png"
//   ],
//   answerName: [
//     "Society5.0","CyPhy","SDGs"
//   ],
//   answerNote: [
//     "Society5.0 - 科学技術政策 - 内閣府"
//   ],
// }

// const quizSet5 = {
//   questionName:[
//     'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？'
//   ],
//   img:[
//     "img-quiz05.png"
//   ],
//   answerName: [
//     "Web3.0","NFT","メタバース"
//   ],
// }

// const quizSet6 = {
//   questionName:[
//     '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？'
//   ],
//   img:[
//     "img-quiz6.png"
//   ],
//   answerName: [
//     "約２倍","約５倍","約１１倍"
//   ],
//   answerNote: [
//     "Accenture Technology Vision 2021"
//   ]
// }

const allQuiz = {
  questionName: [
    '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
    '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
    'IoTとは何の略でしょう？',
    'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？'
  ],
  img: [
    "img-quiz01.png",
    "img-quiz02.png",
    "img-quiz03.png",
    "img-quiz04.png",
    "img-quiz05.png",
    "img-quiz06.png"
  ],
  // 画像、番号変わるだけだから、ここをfor文で回せばいい感じになる気がする。まぁ、forでいい感じにいけたら、ここ消す！！
  answerName: [
     [
      "約28万人","約79万人","約183万人"
     ],
     [
      "INTECH","BIZZECH","X-TECH"
     ],
     [
      "Internet of Things","Integrate into Technology","Information on Tool"
     ],
     [
      "Society5.0 - 科学技術政策 - 内閣府"
     ],
     [
      "Web3.0","NFT","メタバース"
     ],
     [
      "約２倍","約５倍","約１１倍"
     ]
  ],
  answerNote: [
    "経済産業省 2019年3月 - IT 人材需給に関する調査",
    "",
    "",
    "Society5.0 - 科学技術政策 - 内閣府",
    "",
    "Accenture Technology Vision 2021"
  ]
}


// let allQuizLength = allQuiz.length;
for (let i = 0; i < 6; i++) {
  let questionContent =
    `<section class="question${i + 1}">` +
    `<div class="question${i + 1}_quiz">` +
    `<h2 class="question${i + 1}_quiz_title">` +
    `<span class="question${i + 1}_quiz_title_label">Q${i + 1}</span>` +
    `<span class="question${i + 1}_quiz_title_text">${allQuiz.questionName[i]}</span>` +
    `</h2>` +
    `<figure class="question${i + 1}_quiz_title_image">` +
    `<img src="${allQuiz.img[i]}" alt="" class="question${
      i + 1
    }_quiz_title_img">` +
    ` </figure>` +
    `</div>` +
    `<div class="question${i + 1}_answer">` +
    `<span class="question${i + 1}_answer_label">A</span>` +
    `<ul class="question${i + 1}_answer_list">`;
  for (let j = 0; j < allQuiz.answerName[0].length; j++) {
    questionContent +=
      `<li class="question${i + 1}_answer_list_item">` +
      `<button class="question${i + 1}_answer_list_item_button" id="js_answer_${
        i + 1
      }${j + 1}">${allQuiz.answerName[i][j]}` +
      ` <img src="icon-arrow.svg" ` +
      `class="question${i + 1}_answer_list_item_button_icon" ></img>` +
      `</button>` +
      `</li>`;
  }
  questionContent +=
    `</ul>` +
    `<div class="js_answer${i + 1}_box">` +
    `<p class="question${i + 1}_answer_correct_title" id="js_answer${
      i + 1
    }_correct_title">` +
    `"正解！"</p>` +
    ` <p class="question${i + 1}_answer_incorrect_title" ` +
    `id="js_answer${i + 1}_incorrect_title">"不正解..."</p>` +
    `<p class="question${i + 1}_answer_correct_content" ` +
    `id="js_answer${i + 1}_title_correct_content">` +
    // ここをif (正解が押された時){<p class="question${i + 1}_answer_correct_title" id="js_answer${i + 1 }_correct_title">` +`正解！</p>}else... ってやれば上手くいく？？？
    `<span class="question${i + 1}_answer_correct_content_label">A</span>` +
    `<span class="js_answer_text">${allQuiz.answerName[i][1]}</span>` +
    //１問目の場合、 quizSet[i]で[日本〜]、[1]で選択肢、[index]で[選択肢の中の正解]を出した
    `</p>` +
    `</div>` +
    `</div>` +
    `</section>`;
    document
    .getElementById("js_main")
    .insertAdjacentHTML("beforeend", questionContent);
}



// let btn11 = document.querySelector("#js_answer_11");
// // クリックする要素を取得
// let box1 = document.getElementsByClassName("js_answer1_box");
// // クラスを追加する要素を取得
// let title11 = document.querySelector("#js_answer1_incorrect_title");
// // クラスを追加する要素を取得
// let box11class = function (el) {
//   el[0].classList.toggle("question1_answer_incorrect");
// };
// // クラスを追加・削除する動きを定義
// btn11.addEventListener(
//   "click",
//   function () {
//     box11class(box1);
//   },
//   false
// );
// // ”btn”がクリックされたら”box”に対してbox11classを実行
// document.getElementById("js_answer_11").addEventListener("click", () => {
//   const targetnode = document.getElementById("js_answer_11");
//   targetnode.style.border = "solid 5px #0071BC";
//   targetnode.style.backgroundColor = "#f6f6f6";
// });
// // ↑解答の外枠の色を変えてる
// document.getElementById("js_answer_11").addEventListener("click", () => {
//   const targetnode = document.getElementById("js_answer1_incorrect_title");
//   targetnode.style.display = "block";
// });
// // 
// document.getElementById("js_answer_11").addEventListener("click", () => {
//   document.getElementById("js_answer_11").setAttribute("disabled", "true");
//   document.getElementById("js_answer_12").setAttribute("disabled", "true");
//   document.getElementById("js_answer_13").setAttribute("disabled", "true");
// });
// // ここは変えなくても良い
// // 1-2のボタン変化
// // 1-2押された時の正解表示
// let btn12 = document.querySelector("#js_answer_12");
// let title12 = document.querySelector("#js_answer1_correct_title");
// let box12class = function (el) {
//   el[0].classList.toggle("question1_answer_correct");
// };
// btn12.addEventListener(
//   "click",
//   function () {
//     box12class(box1);
//   },
//   false
// );
// document.getElementById("js_answer_12").addEventListener("click", () => {
//   const targetnode = document.getElementById("js_answer_12");
//   targetnode.style.border = "solid 5px #0071BC";
//   targetnode.style.backgroundColor = "#f6f6f6";
// });
// document.getElementById("js_answer_12").addEventListener("click", () => {
//   const targetnode = document.getElementById("js_answer1_correct_title");
//   targetnode.style.display = "block";
// });
// document.getElementById("js_answer_12").addEventListener("click", () => {
//   document.getElementById("js_answer_11").setAttribute("disabled", "true");
//   document.getElementById("js_answer_12").setAttribute("disabled", "true");
//   document.getElementById("js_answer_13").setAttribute("disabled", "true");
// });
// // 1-3のボタン変化
// let btn13 = document.querySelector("#js_answer_13");
// let title13 = document.querySelector("#js_answer1_incorrect_title");
// let box13class = function (el) {
//   el[0].classList.toggle("question1_answer_incorrect");
// };
// btn13.addEventListener(
//   "click",
//   function () {
//     box13class(box1);
//   },
//   false
// );
// document.getElementById("js_answer_13").addEventListener("click", () => {
//   const targetnode = document.getElementById("js_answer_13");
//   targetnode.style.border = "solid 5px #0071BC";
//   targetnode.style.backgroundColor = "#f6f6f6";
// });

// document.getElementById("js_answer_13").addEventListener("click", () => {
//   const targetnode = document.getElementById("js_answer1_incorrect_title");
//   targetnode.style.display = "block";
// });
// document.getElementById("js_answer_13").addEventListener("click", () => {
//   document.getElementById("js_answer_11").setAttribute("disabled", "true");
//   document.getElementById("js_answer_12").setAttribute("disabled", "true");
//   document.getElementById("js_answer_13").setAttribute("disabled", "true");
// });



