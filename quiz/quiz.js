// quizの解答を作成しまーす

'use strict';
// 正解の表示、ここでボタンをクリックするとクラスを追加して正解、不正解が出るようにしたい！！

  // https://techmemo.biz/javascript/click-toggle-class/

  // ボタン押したら、もう押せなくしたい
  // https://developer.mozilla.org/ja/docs/Web/API/HTMLSelectElement/disabled
  // https://web-camp.io/magazine/archives/99168
  // https://arkgame.com/2022/02/12/post-304878/
  let quizanswerbox11 = document.getElementById('#js_answer_11')
  
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
  document.getElementById('js_answer_11').addEventListener('click', () => {
    const targetnode = document.getElementById('js_answer_11');
    targetnode.style.backgroundColor = "#f6f6f6";
  });
  // 
  document.getElementById('js_answer_11').addEventListener('click', () => {
    document.getElementById('js_answer_11').setAttribute("disabled","true");
    document.getElementById('js_answer_12').setAttribute("disabled","true");
    document.getElementById('js_answer_13').setAttribute("disabled","true");
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
  document.getElementById('js_answer_12').addEventListener('click', () => {
    const targetnode = document.getElementById('js_answer_12');
    targetnode.style.backgroundColor = "#f6f6f6";
  });
  document.getElementById('js_answer_12').addEventListener('click', () => {
    document.getElementById('js_answer_11').setAttribute("disabled","true");
    document.getElementById('js_answer_12').setAttribute("disabled","true");
    document.getElementById('js_answer_13').setAttribute("disabled","true");
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
  document.getElementById('js_answer_13').addEventListener('click', () => {
    const targetnode = document.getElementById('js_answer_13');
    targetnode.style.backgroundColor = "#f6f6f6";
  });
  document.getElementById('js_answer_13').addEventListener('click', () => {
    document.getElementById('js_answer_11').setAttribute("disabled","true");
    document.getElementById('js_answer_12').setAttribute("disabled","true");
    document.getElementById('js_answer_13').setAttribute("disabled","true");
  });
// 2-1のボタン変化
  let btn21 = document.querySelector('#js_answer_21');
  let box2 = document.getElementsByClassName("js-answer2_box");
  let title21 =document.querySelector('#js-answer2_incorrect_title');
  let box21class = function (el) {
    el[0].classList.toggle('quetion2_answer_incorrect');
  }
  btn21.addEventListener('click', function(){
    box21class(box2);
  }, false);
  document.getElementById('js_answer_21').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_21");

  targetnode.style.border = "solid 5px #0071BC";
  });
  document.getElementById('js_answer_21').addEventListener('click', () => {
    const targetnode = document.getElementById('js-answer2_incorrect_title');
    targetnode.style.display = "block";
  });
  document.getElementById('js_answer_21').addEventListener('click', () => {
    const targetnode = document.getElementById('js_answer_21');
    targetnode.style.backgroundColor = "#f6f6f6";
  });
  document.getElementById('js_answer_21').addEventListener('click', () => {
    document.getElementById('js_answer_21').setAttribute("disabled","true");
    document.getElementById('js_answer_22').setAttribute("disabled","true");
    document.getElementById('js_answer_23').setAttribute("disabled","true");
  });

// 2-2のボタン変化
  let btn22 = document.querySelector('#js_answer_22');
  let title22 =document.querySelector('#js-answer2_incorrect_title');
  let box22class = function (el) {
    el[0].classList.toggle('quetion2_answer_incorrect');
  }
  btn22.addEventListener('click', function(){
    box22class(box2);
  }, false);
  document.getElementById('js_answer_22').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_22");
  targetnode.style.border = "solid 5px #0071BC";
  });
  document.getElementById('js_answer_22').addEventListener('click', () => {
    const targetnode = document.getElementById('js-answer2_incorrect_title');
    targetnode.style.display = "block";
  });
  document.getElementById('js_answer_22').addEventListener('click', () => {
    const targetnode = document.getElementById('js_answer_22');
    targetnode.style.backgroundColor = "#f6f6f6";
  });
  document.getElementById('js_answer_22').addEventListener('click', () => {
    document.getElementById('js_answer_21').setAttribute("disabled","true");
    document.getElementById('js_answer_22').setAttribute("disabled","true");
    document.getElementById('js_answer_23').setAttribute("disabled","true");
  });

// 2-3のボタン変化
  let btn23 = document.querySelector('#js_answer_23');
  let title23 = document.querySelector('#js-answer2_correct_title');
  let box23class = function (el) {
    el[0].classList.toggle('quetion2_answer_correct');
  };
  btn23.addEventListener('click', function(){
    box23class(box2);
  }, false);
  document.getElementById('js_answer_23').addEventListener('click', () => {
    const targetnode = document.getElementById("js_answer_23");
    targetnode.style.border = "solid 5px #0071BC";
  });
  document.getElementById('js_answer_23').addEventListener('click', () => {
    const targetnode = document.getElementById('js-answer2_correct_title');
    targetnode.style.display = "block";
  });
  document.getElementById('js_answer_23').addEventListener('click', () => {
    const targetnode = document.getElementById('js_answer_23');
    targetnode.style.backgroundColor = "#f6f6f6";
  });
  document.getElementById('js_answer_23').addEventListener('click', () => {
    document.getElementById('js_answer_21').setAttribute("disabled","true");
    document.getElementById('js_answer_22').setAttribute("disabled","true");
    document.getElementById('js_answer_23').setAttribute("disabled","true");
  });

// 3-1のボタン変化
  let btn31 = document.querySelector('#js_answer_31');
  let box3 = document.getElementsByClassName("js-answer3_box");
  let title31 = document.querySelector('#js-answer2_correct_title');
  let box31class = function (el) {
    el[0].classList.toggle('quetion3_answer_correct');
  };
  btn31.addEventListener('click', function(){
    box31class(box3);
  }, false);
  document.getElementById('js_answer_31').addEventListener('click', () => {
    const targetnode = document.getElementById("js_answer_31");
    targetnode.style.border = "solid 5px #0071BC";
  });
  document.getElementById('js_answer_31').addEventListener('click', () => {
    const targetnode = document.getElementById('js-answer3_correct_title');
    targetnode.style.display = "block";
  });
  document.getElementById('js_answer_31').addEventListener('click', () => {
    const targetnode = document.getElementById('js_answer_31');
    targetnode.style.backgroundColor = "#f6f6f6";
  });
  document.getElementById('js_answer_31').addEventListener('click', () => {
    document.getElementById('js_answer_31').setAttribute("disabled","true");
    document.getElementById('js_answer_32').setAttribute("disabled","true");
    document.getElementById('js_answer_33').setAttribute("disabled","true");
  });

// 3-2のボタン変化
  let btn32 = document.querySelector('#js_answer_32');
  let title32 =document.querySelector('#js-answer3_incorrect_title');
  let box32class = function (el) {
    el[0].classList.toggle('quetion3_answer_incorrect');
  }
  btn32.addEventListener('click', function(){
    box32class(box3);
  }, false);
  document.getElementById('js_answer_32').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_32");
  targetnode.style.border = "solid 5px #0071BC";
  });
  document.getElementById('js_answer_32').addEventListener('click', () => {
    const targetnode = document.getElementById('js-answer3_incorrect_title');
    targetnode.style.display = "block";
  });
  document.getElementById('js_answer_32').addEventListener('click', () => {
    const targetnode = document.getElementById('js_answer_32');
    targetnode.style.backgroundColor = "#f6f6f6";
  });
  document.getElementById('js_answer_32').addEventListener('click', () => {
    document.getElementById('js_answer_31').setAttribute("disabled","true");
    document.getElementById('js_answer_32').setAttribute("disabled","true");
    document.getElementById('js_answer_33').setAttribute("disabled","true");
  });

// 3-3のボタン変化
  let btn33 = document.querySelector('#js_answer_33');
  let title33 =document.querySelector('#js-answer3_incorrect_title');
  let box33class = function (el) {
    el[0].classList.toggle('quetion3_answer_incorrect');
  }
  btn33.addEventListener('click', function(){
    box33class(box3);
  }, false);
  document.getElementById('js_answer_33').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_33");
  targetnode.style.border = "solid 5px #0071BC";
  });
  document.getElementById('js_answer_33').addEventListener('click', () => {
    const targetnode = document.getElementById('js-answer3_incorrect_title');
    targetnode.style.display = "block";
  });
  document.getElementById('js_answer_33').addEventListener('click', () => {
    const targetnode = document.getElementById('js_answer_33');
    targetnode.style.backgroundColor = "#f6f6f6";
  });
  document.getElementById('js_answer_33').addEventListener('click', () => {
    document.getElementById('js_answer_31').setAttribute("disabled","true");
    document.getElementById('js_answer_32').setAttribute("disabled","true");
    document.getElementById('js_answer_33').setAttribute("disabled","true");
  });

// 4-1のボタン変化
  let btn41 = document.querySelector('#js_answer_41');
  let box4 = document.getElementsByClassName("js-answer4_box");
  let title41 = document.querySelector('#js-answer4_correct_title');
  let box41class = function (el) {
    el[0].classList.toggle('quetion4_answer_correct');
  };
  btn41.addEventListener('click', function(){
    box41class(box4);
  }, false);
  document.getElementById('js_answer_41').addEventListener('click', () => {
    const targetnode = document.getElementById("js_answer_41");
    targetnode.style.border = "solid 5px #0071BC";
  });
  document.getElementById('js_answer_41').addEventListener('click', () => {
    const targetnode = document.getElementById('js-answer4_correct_title');
    targetnode.style.display = "block";
  });
  document.getElementById('js_answer_41').addEventListener('click', () => {
    const targetnode = document.getElementById('js_answer_41');
    targetnode.style.backgroundColor = "#f6f6f6";
  });
  document.getElementById('js_answer_41').addEventListener('click', () => {
    document.getElementById('js_answer_41').setAttribute("disabled","true");
    document.getElementById('js_answer_42').setAttribute("disabled","true");
    document.getElementById('js_answer_43').setAttribute("disabled","true");
  });

// 4-2のボタン変化
  let btn42 = document.querySelector('#js_answer_42');
  let title42 =document.querySelector('#js-answer4_incorrect_title');
  let box42class = function (el) {
    el[0].classList.toggle('quetion4_answer_incorrect');
  }
  btn42.addEventListener('click', function(){
    box42class(box4);
  }, false);
  document.getElementById('js_answer_42').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_42");
  targetnode.style.border = "solid 5px #0071BC";
  });
  document.getElementById('js_answer_42').addEventListener('click', () => {
    const targetnode = document.getElementById('js-answer4_incorrect_title');
    targetnode.style.display = "block";
  });
  document.getElementById('js_answer_42').addEventListener('click', () => {
    const targetnode = document.getElementById('js_answer_42');
    targetnode.style.backgroundColor = "#f6f6f6";
  });
  document.getElementById('js_answer_42').addEventListener('click', () => {
    document.getElementById('js_answer_41').setAttribute("disabled","true");
    document.getElementById('js_answer_42').setAttribute("disabled","true");
    document.getElementById('js_answer_43').setAttribute("disabled","true");
  });

// 4-3のボタン変化
  let btn43 = document.querySelector('#js_answer_43');
  let title43 =document.querySelector('#js-answer4_incorrect_title');
  let box43class = function (el) {
    el[0].classList.toggle('quetion4_answer_incorrect');
  }
  btn43.addEventListener('click', function(){
    box32class(box4);
  }, false);
  document.getElementById('js_answer_43').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_43");
  targetnode.style.border = "solid 5px #0071BC";
  });
  document.getElementById('js_answer_43').addEventListener('click', () => {
    const targetnode = document.getElementById('js-answer4_incorrect_title');
    targetnode.style.display = "block";
  });
  document.getElementById('js_answer_43').addEventListener('click', () => {
    const targetnode = document.getElementById('js_answer_43');
    targetnode.style.backgroundColor = "#f6f6f6";
  });
  document.getElementById('js_answer_43').addEventListener('click', () => {
    document.getElementById('js_answer_41').setAttribute("disabled","true");
    document.getElementById('js_answer_42').setAttribute("disabled","true");
    document.getElementById('js_answer_43').setAttribute("disabled","true");
  });

// 5-1のボタン変化
  let btn51 = document.querySelector('#js_answer_51');
  let box5 = document.getElementsByClassName("js-answer5_box");
  let title51 = document.querySelector('#js-answer5_correct_title');
  let box51class = function (el) {
    el[0].classList.toggle('quetion5_answer_correct');
  };
  btn51.addEventListener('click', function(){
    box51class(box5);
  }, false);
  document.getElementById('js_answer_51').addEventListener('click', () => {
    const targetnode = document.getElementById("js_answer_51");
    targetnode.style.border = "solid 5px #0071BC";
  });
  document.getElementById('js_answer_51').addEventListener('click', () => {
    const targetnode = document.getElementById('js-answer5_correct_title');
    targetnode.style.display = "block";
  });
  document.getElementById('js_answer_51').addEventListener('click', () => {
    const targetnode = document.getElementById('js_answer_51');
    targetnode.style.backgroundColor = "#f6f6f6";
  });
  document.getElementById('js_answer_51').addEventListener('click', () => {
    document.getElementById('js_answer_51').setAttribute("disabled","true");
    document.getElementById('js_answer_52').setAttribute("disabled","true");
    document.getElementById('js_answer_53').setAttribute("disabled","true");
  });

// 5-2のボタン変化
  let btn52 = document.querySelector('#js_answer_52');
  let title52 =document.querySelector('#js-answer5_incorrect_title');
  let box52class = function (el) {
    el[0].classList.toggle('quetion5_answer_incorrect');
  }
  btn52.addEventListener('click', function(){
    box52class(box5);
  }, false);
  document.getElementById('js_answer_52').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_52");
  targetnode.style.border = "solid 5px #0071BC";
  });
  document.getElementById('js_answer_52').addEventListener('click', () => {
    const targetnode = document.getElementById('js-answer5_incorrect_title');
    targetnode.style.display = "block";
  });
  document.getElementById('js_answer_52').addEventListener('click', () => {
    const targetnode = document.getElementById('js_answer_52');
    targetnode.style.backgroundColor = "#f6f6f6";
  });document.getElementById('js_answer_52').addEventListener('click', () => {
    document.getElementById('js_answer_51').setAttribute("disabled","true");
    document.getElementById('js_answer_52').setAttribute("disabled","true");
    document.getElementById('js_answer_53').setAttribute("disabled","true");
  });

// 5-3のボタン変化
  let btn53 = document.querySelector('#js_answer_53');
  let title53 =document.querySelector('#js-answer5_incorrect_title');
  let box53class = function (el) {
    el[0].classList.toggle('quetion5_answer_incorrect');
  }
  btn53.addEventListener('click', function(){
    box53class(box5);
  }, false);
  document.getElementById('js_answer_53').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_53");
  targetnode.style.border = "solid 5px #0071BC";
  });
  document.getElementById('js_answer_53').addEventListener('click', () => {
    const targetnode = document.getElementById('js-answer5_incorrect_title');
    targetnode.style.display = "block";
  });
  document.getElementById('js_answer_53').addEventListener('click', () => {
    const targetnode = document.getElementById('js_answer_53');
    targetnode.style.backgroundColor = "#f6f6f6";
  });
  document.getElementById('js_answer_53').addEventListener('click', () => {
    document.getElementById('js_answer_51').setAttribute("disabled","true");
    document.getElementById('js_answer_52').setAttribute("disabled","true");
    document.getElementById('js_answer_53').setAttribute("disabled","true");
  });

// 6-1のボタン変化
  let btn61 = document.querySelector('#js_answer_61');
  let box6 = document.getElementsByClassName("js-answer6_box");
  let title61 =document.querySelector('#js-answer6_incorrect_title');
  let box61class = function (el) {
    el[0].classList.toggle('quetion6_answer_incorrect');
  }
  btn61.addEventListener('click', function(){
    box61class(box6);
  }, false);
  document.getElementById('js_answer_61').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_61");
  targetnode.style.border = "solid 5px #0071BC";
  });
  document.getElementById('js_answer_61').addEventListener('click', () => {
    const targetnode = document.getElementById('js-answer6_incorrect_title');
    targetnode.style.display = "block";
  });
  document.getElementById('js_answer_61').addEventListener('click', () => {
    const targetnode = document.getElementById('js_answer_61');
    targetnode.style.backgroundColor = "#f6f6f6";
  });
  document.getElementById('js_answer_61').addEventListener('click', () => {
    document.getElementById('js_answer_61').setAttribute("disabled","true");
    document.getElementById('js_answer_62').setAttribute("disabled","true");
    document.getElementById('js_answer_63').setAttribute("disabled","true");
  });

// 6-2のボタン変化
  let btn62 = document.querySelector('#js_answer_62');
  let title62 = document.querySelector('#js-answer6_correct_title');
  let box62class = function (el) {
    el[0].classList.toggle('quetion6_answer_correct');
  };
  btn62.addEventListener('click', function(){
    box62class(box6);
  }, false);
  document.getElementById('js_answer_62').addEventListener('click', () => {
    const targetnode = document.getElementById("js_answer_62");
    targetnode.style.border = "solid 5px #0071BC";
  });
  document.getElementById('js_answer_62').addEventListener('click', () => {
    const targetnode = document.getElementById('js-answer6_correct_title');
    targetnode.style.display = "block";
  });
  document.getElementById('js_answer_62').addEventListener('click', () => {
    const targetnode = document.getElementById('js_answer_62');
    targetnode.style.backgroundColor = "#f6f6f6";
  });
  document.getElementById('js_answer_62').addEventListener('click', () => {
    document.getElementById('js_answer_61').setAttribute("disabled","true");
    document.getElementById('js_answer_62').setAttribute("disabled","true");
    document.getElementById('js_answer_63').setAttribute("disabled","true");
  });

  // 6-3のボタン変化
  let btn63 = document.querySelector('#js_answer_63');
  let title63 =document.querySelector('#js-answer6_incorrect_title');
  let box63class = function (el) {
    el[0].classList.toggle('quetion6_answer_incorrect');
  }
  btn63.addEventListener('click', function(){
    box63class(box6);
  }, false);
  document.getElementById('js_answer_63').addEventListener('click', () => {
  const targetnode = document.getElementById("js_answer_63");
  targetnode.style.border = "solid 5px #0071BC";
  });
  document.getElementById('js_answer_63').addEventListener('click', () => {
    const targetnode = document.getElementById('js-answer6_incorrect_title');
    targetnode.style.display = "block";
  });
  document.getElementById('js_answer_63').addEventListener('click', () => {
    const targetnode = document.getElementById('js_answer_63');
    targetnode.style.backgroundColor = "#f6f6f6";
  });
  document.getElementById('js_answer_63').addEventListener('click', () => {
    document.getElementById('js_answer_61').setAttribute("disabled","true");
    document.getElementById('js_answer_62').setAttribute("disabled","true");
    document.getElementById('js_answer_63').setAttribute("disabled","true");
  });


