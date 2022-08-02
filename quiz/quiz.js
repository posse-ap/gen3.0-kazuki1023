// quizの解答を作成しまーす

'use strict';
const correctanswer = [
  {
    index: 1,
    value: "約79万人"
  },
  {
    index: 2,
    value: "X-TECH"
  },
  {
    index: 0,
    value: "3.0"
  },
  {
    index: 0,
    value: "Society 5.0"
  },
  {
    index: 0,
    value: "Web3.0"
  },
  {
    index: 1,
    value: "約５倍"
  }
];
// これでクラス名を集めた
const allquiz = document.querySelectorAll('.js-quiz');
// ボタンの不活性化
const setDisabled = answers => {
  answers.forEach(answer => {
    answer.disabled = true;
  })
}

// 正解の表示
{
  document.getElementById('js_answer_11').addEventListener('click', () => {
    const incollectanswer = document.createElement("div");
    incollectanswer.textcontent = "不正解";
    let js_answer1;
    const ul =document.getElementById(js_answer1);
    js_answer1.appendChild();
  });
}
//ボタン変化まとめ
// 1-1のボタン変化
document.getElementById('js_answer_11').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_11");

  targetnode.style.border = "solid 5px #0071BC";
});
// 1-2のボタン変化
document.getElementById('js_answer_12').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_12");

  targetnode.style.border = "solid 5px #0071BC";
});
// 1-3のボタン変化
document.getElementById('js_answer_13').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_13");

  targetnode.style.border = "solid 5px #0071BC";
});
// 2-1のボタン変化
document.getElementById('js_answer_21').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_21");

  targetnode.style.border = "solid 5px #0071BC";
});
// 2-2のボタン変化
document.getElementById('js_answer_22').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_22");

  targetnode.style.border = "solid 5px #0071BC";
});
// 2-3のボタン変化
document.getElementById('js_answer_23').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_23");

  targetnode.style.border = "solid 5px #0071BC";
});
// 3-1のボタン変化
document.getElementById('js_answer_31').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_31");

  targetnode.style.border = "solid 5px #0071BC";
});
// 3-2のボタン変化
document.getElementById('js_answer_32').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_32");

  targetnode.style.border = "solid 5px #0071BC";
});
// 3-3のボタン変化
document.getElementById('js_answer_33').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_33");

  targetnode.style.border = "solid 5px #0071BC";
});
// 4-1のボタン変化
document.getElementById('js_answer_41').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_41");

  targetnode.style.border = "solid 5px #0071BC";
});
// 4-2のボタン変化
document.getElementById('js_answer_42').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_42");

  targetnode.style.border = "solid 5px #0071BC";
});
// 4-3のボタン変化
document.getElementById('js_answer_43').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_43");

  targetnode.style.border = "solid 5px #0071BC";
});
// 5-1のボタン変化
document.getElementById('js_answer_51').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_51");

  targetnode.style.border = "solid 5px #0071BC";
});
// 5-2のボタン変化
document.getElementById('js_answer_52').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_52");

  targetnode.style.border = "solid 5px #0071BC";
});
// 5-3のボタン変化
document.getElementById('js_answer_53').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_53");

  targetnode.style.border = "solid 5px #0071BC";
});
// 6-1のボタン変化
document.getElementById('js_answer_61').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_61");

  targetnode.style.border = "solid 5px #0071BC";
});
// 6-2のボタン変化
document.getElementById('js_answer_62').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_62");

  targetnode.style.border = "solid 5px #0071BC";
});
// 6-3のボタン変化
document.getElementById('js_answer_63').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_63");

  targetnode.style.border = "solid 5px #0071BC";
});


