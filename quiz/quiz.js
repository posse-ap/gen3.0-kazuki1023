// quizの解答を作成しまーす約79万人

"use strict";
const allQuiz = [
  {
    id: 1,
    questionName: "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
    img: "img-quiz01.png",
    answerName: [
      "約28万人","約79万人","約183万人"
    ],
    answerNote: "経済産業省 2019年3月 - IT 人材需給に関する調査",
    correctNumber: 1,
  },
  {
    id: 2,
    questionName: "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
    img: "img-quiz02.png",
    answerName: [
      "INTECH","BIZZECH","X-TECH"
    ],
    answerNote: "",
    correctNumber: 0,
  },
  {
    id: 3,
    questionName: "IoTとは何の略でしょう？",
    img: "img-quiz03.png",
    answerName: [
      "Internet of Things","Integrate into Technology","Information on Tool"
    ],
    answerNote: "",
    correctNumber: 0,
  },
  {
    id: 4,
    questionName: "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インター ネット」のことをなんと言うでしょう？",
    img: "img-quiz04.png",
    answerName: [
      "Society5.0","CyPhy","SDGs"
    ],
    answerNote: "Society5.0 - 科学技術政策 - 内閣府",
    correctNumber: 0,
  },
  {
    id: 5,
    questionName: "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インター ネット」のことをなんと言うでしょう？",
    img: "img-quiz05.png",
    answerName: [
      "Web3.0","NFT","メタバース"
    ],
    answerNote: "",
    correctNumber: 0,
  },
  {
    id: 6,
    questionName: "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？",
    img: "img-quiz06.png",
    answerName: [
      "約２倍","約５倍","約１１倍"
    ],
    answerNote: "Accenture Technology Vision 2021",
    correctNumber: 1,
  }
]

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
shuffleArray(allQuiz);
// これは配列のシャッフル

// function obj_array_shuffle(list) {
// 	for (var i = list.length - 1; i > 0; i--) {
// 		var j = Math.floor(Math.random() * (i + 1));
// 		if (i == j) continue;
// 		var k = list[i];
// 		list[i] = list[j];
// 		list[j] = k;
// 	}
// 	return list;
// }
// obj_array_shuffle(allQuiz.questionName);
// ↑ちなみにこれはobjectのシャッフル

for (let i = 0; i < 6; i++) {
  let index = allQuiz[i].correctNumber;
  let questionContent =
    `<section class="question${i + 1}">` +
    `<div class="question${i + 1}_quiz">` +
    `<h2 class="question${i + 1}_quiz_title">` +
    `<span class="question${i + 1}_quiz_title_label">Q${i + 1}</span>` +
    `<span class="question${i + 1}_quiz_title_text">${allQuiz[i].questionName}</span>` +
    `</h2>` +
    `<figure class="question${i + 1}_quiz_title_image">` +
    `<img src="${allQuiz[i].img}" alt="" class="question${
      i + 1
    }_quiz_title_img">` +
    ` </figure>` +
    `</div>` +
    `<div class="question${i + 1}_answer">` +
    `<span class="question${i + 1}_answer_label">A</span>` +
    `<ul class="question${i + 1}_answer_list">`;
  for (let j = 0; j < allQuiz[i].answerName.length; j++) {
    questionContent +=
      `<li class="question${allQuiz[i].id}_answer_list_item" id=${j}>` +
      `<button class="question${i + 1}_answer_list_item_button" id="js_answer_${
        i + 1
      }${j + 1}">${allQuiz[i].answerName[j]}` +
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
    `<span class="js_answer_text">${allQuiz[i].answerName[index]}</span>` +
    //１問目の場合、 quizSet[i]で[日本〜]、[1]で選択肢、[index]で[選択肢の中の正解]を出した
    `</p>` +
    `</div>` +
    `</div>` +
    `</section>`;
    document
    .getElementById("js_main")
    .insertAdjacentHTML("beforeend", questionContent);
}




let btn11 = document.querySelector("#js_answer_11");
// クリックする要素を取得
let box1 = document.getElementsByClassName("js_answer1_box");
// クラスを追加する要素を取得
let title11 = document.querySelector("#js_answer1_incorrect_title");
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
// ↑解答の外枠の色を変えてる
document.getElementById("js_answer_11").addEventListener("click", () => {
  if(allQuiz[0].id===allQuiz[0].correctNumber){
  const targetnode = document.getElementById("#js_answer1_incorrect_title");
  targetnode.style.display = "block";
}});
// 
document.getElementById("js_answer_11").addEventListener("click", () => {
  document.getElementById("js_answer_11").setAttribute("disabled", "true");
  document.getElementById("js_answer_12").setAttribute("disabled", "true");
  document.getElementById("js_answer_13").setAttribute("disabled", "true");
});
// ここは変えなくても良い
// 1-2のボタン変化
// 1-2押された時の正解表示
let btn12 = document.querySelector("#js_answer_12");
let title12 = document.querySelector("#js_answer1_correct_title");
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
  const targetnode = document.getElementById("js_answer1_correct_title");
  targetnode.style.display = "block";
});
document.getElementById("js_answer_12").addEventListener("click", () => {
  document.getElementById("js_answer_11").setAttribute("disabled", "true");
  document.getElementById("js_answer_12").setAttribute("disabled", "true");
  document.getElementById("js_answer_13").setAttribute("disabled", "true");
});
// 1-3のボタン変化
let btn13 = document.querySelector("#js_answer_13");
let title13 = document.querySelector("#js_answer1_incorrect_title");
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
  const targetnode = document.getElementById("js_answer1_incorrect_title");
  targetnode.style.display = "block";
});
document.getElementById("js_answer_13").addEventListener("click", () => {
  document.getElementById("js_answer_11").setAttribute("disabled", "true");
  document.getElementById("js_answer_12").setAttribute("disabled", "true");
  document.getElementById("js_answer_13").setAttribute("disabled", "true");
});


// ハンバーガーメニューのjs
const BurgerBtn = document.getElementById("burger_button");
const Wrapper = document.getElementById("nav-wrapper");

BurgerBtn.addEventListener("click", () => {
  BurgerBtn.classList.toggle('close');
  Wrapper.classList.toggle('fade');
})



