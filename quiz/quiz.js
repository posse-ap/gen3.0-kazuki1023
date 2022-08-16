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

// 正解の表示、ここでボタンをクリックするとクラスを追加して正解、不正解が出るようにしたい！！

  // https://techmemo.biz/javascript/click-toggle-class/

  
  
//ボタン変化まとめ
// 1-1のボタン変化
  let btn11 = document.querySelector('#js_answer_11');
  // クリックする要素を取得

  let box1 = document.getElementsByClassName("js-answer1_box");
  // クラスを追加する要素を取得

  let title11 =document.querySelector('#js-answer1_incorrect_title');
  // クラスを追加する要素を取得

  let box11class = function (el) {
    el[0].classList.toggle('quetion1_answer_incorrect');
  }
  // クラスを追加・削除する動きを定義

  btn11.addEventListener('click', function(){
    box11class(box1);
  }, false);
   // ”btn”がクリックされたら”box”に対してbox11classを実行


  document.getElementById('js_answer_11').addEventListener('click', () => {
    const targetnode = document.getElementById("js_answer_11");
    targetnode.style.border = "solid 5px #0071BC";
  });

  document.getElementById('js_answer_11').addEventListener('click', () => {
    const targetnode = document.getElementById('js-answer1_incorrect_title');
    targetnode.style.display = "block";
  });
// 1-2のボタン変化
  // 1-2押された時の正解表示
  let btn12 = document.querySelector('#js_answer_12');
  let title12 = document.querySelector('#js-answer1_correct_title');
  let box12class = function (el) {
    el[0].classList.toggle('quetion1_answer_correct');
  };
  btn12.addEventListener('click', function(){
    box12class(box1);
  }, false);
  
  document.getElementById('js_answer_12').addEventListener('click', () => {
    const targetnode = document.getElementById("js_answer_12");
    targetnode.style.border = "solid 5px #0071BC";
  });
  
  document.getElementById('js_answer_12').addEventListener('click', () => {
    const targetnode = document.getElementById('js-answer1_correct_title');
    targetnode.style.display = "block";
  });
  
// 1-3のボタン変化
  let btn13 = document.querySelector('#js_answer_13');
  let title13 = document.querySelector('#js-answer1_incorrect_title');
  let box13class = function (el) {
  el[0].classList.toggle('quetion1_answer_incorrect');
   }
  btn13.addEventListener('click', function(){
    box13class(box1);
  }, false);
  document.getElementById('js_answer_13').addEventListener('click', () => {
    const targetnode = document.getElementById("js_answer_13");
  
    targetnode.style.border = "solid 5px #0071BC";
  });
  
  document.getElementById('js_answer_13').addEventListener('click', () => {
    const targetnode = document.getElementById('js-answer1_incorrect_title');
  
    targetnode.style.display = "block";
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


