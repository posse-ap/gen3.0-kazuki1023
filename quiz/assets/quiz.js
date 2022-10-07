// quizの解答を作成しまーす

'use strict';
const Quiz = [
  {
    id: 1,
    question: "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
    choices :["約28万人", "約79万人", "約183万人"],
    correctchoice :1,
    note :"経済産業省 2019年3月 ー IT 人材需給に関する調査",
  },
  {
    id: 2,
    question: "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
    choices :["INTECH", "BIZZTECH", "X-TECH"],
    correctchoice :2,
    note :"",
  },
  {
    id: 3,
    question: "IoTとは何の略でしょう？",
    choices :["Internet of Thing", "Integrate into Technology", "Information of Tool"],
    correctchoice :0,
    note :"",
  },
  {
    id: 4,
    question: "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
    choices :["Society 5.0", "CyPhy", "SDGs"],
    correctchoice :0,
    note :"Society5.0 - 科学技術政策 - 内閣府",
  },
  {
    id: 5,
    question: "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
    choices :["Web3.0", "NFT", "メタバース"],
    correctchoice :0,
    note :"",
  },
  {
    id: 6,
    question: "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？",
    choices :["約2倍", "約5倍", "約11倍"],
    correctchoice :1,
    note :"Accenture Technology Vision 2021",
  },
]

const quizContainer = document.getElementById('js-quizContainer');

const createQuizHtml = (quizItem, questionNumber) => {
  const answersHtml = quizItem.choices.map((answer, answerIndex) =>`<li class="p-quiz-box__answer__item">
  <button class="p-quiz-box__answer__button js-answer" data-answer="${answerIndex}">
    ${answer}<img class="u-icon__arrow" src="../quiz/icon/icon-arrow.svg"></img>
  </button>
</li>`,
).join('');

// note 引用テキストの作成
const noteHtml = quizItem.note ? `<cite class="p-quiz-box__note">
      <i class="u-icon__note"></i>${quizItem.note}
    </cite>` : '';

    return `<section class="p-quiz-box js-quiz" data-quiz="${questionNumber}">
      <div class="p-quiz-box__question">
        <h2 class="p-quiz-box__question__title">
          <span class="p-quiz-box__label">Q${questionNumber + 1}</span>
          <span
            class="p-quiz-box__question__title__text">${quizItem.question}</span>
        </h2>
        <figure class="p-quiz-box__question__image">
          <img src="../quiz/img/img-quiz0${quizItem.id}.png" alt="">
        </figure>
      </div>
      <div class="p-quiz-box__answer">
        <span class="p-quiz-box__label p-quiz-box__label--accent">A</span>
        <ul class="p-quiz-box__answer__list">
          ${answersHtml}
        </ul>
        <div class="p-quiz-box__answer__correct js-answerBox">
          <p class="p-quiz-box__answer__correct__title js-answerTitle"></p>
          <p class="p-quiz-box__answer__correct__content">
            <span class="p-quiz-box__answer__correct__content__label">A</span>
            <span class="js-answerText"></span>
          </p>
        </div>
      </div>
      ${noteHtml}
    </section>`
}

const shufflearray = array => {
  for(let i = array.length-1;  i > 0; i --){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
};
const quizArray= shufflearray(Quiz);



quizContainer.innerHTML = quizArray.map((quizItem, index) => {
  return createQuizHtml(quizItem, index)
}).join('')


const allQuiz  = document.querySelectorAll('.js-quiz');


const setDisabled = answers => {
  answers.forEach(answer => {
    answer.disabled = true;
  })
}


const setTitle = (target, isCorrect) => {
  target.innerText = isCorrect ? '正解！' : '不正解...';
  console.log(target);
}


const setClassName = (target, isCorrect) => {
  target.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
}


allQuiz.forEach(quiz => {
  const answers = quiz.querySelectorAll('.js-answer');
  const selectedQuiz = Number(quiz.getAttribute('data-quiz'));
  const answerBox = quiz.querySelector('.js-answerBox');
  const answerTitle = quiz.querySelector('.js-answerTitle');
  const answerText = quiz.querySelector('.js-answerText');

  answers.forEach(answer => {
    answer.addEventListener('click', () => {
      answer.classList.add('is-selected');
      const selectedAnswerNumber = Number(answer.getAttribute('data-answer'));

      // 全てのボタンを非活性化
      setDisabled(answers);

      // 正解ならtrue, 不正解ならfalseをcheckCorrectに格納
      const correctNumber = quizArray[selectedQuiz].correctchoice
      const isCorrect = correctNumber === selectedAnswerNumber;
      
      // 回答欄にテキストやclass名を付与
      // answerText.innerText = quizArray[selectedQuiz].answers[correctNumber];
      answerText.innerText = quizArray[selectedQuiz].choices[correctNumber];
      setTitle(answerTitle, isCorrect);
      setClassName(answerBox, isCorrect);
    })
  })
})






// const allquiz = document.querySelectorAll('.js-quiz');
// // ボタンの不活性化
// const setDisabled = answers => {
//   answers.forEach(answer => {
//     answer.disabled = true;
//   })
// }

// 正解の表示、ここでボタンをクリックするとクラスを追加して正解、不正解が出るようにしたい！！

  // https://techmemo.biz/javascript/click-toggle-class/

  
  
// //ボタン変化まとめ
// // 1-1のボタン変化
// let btn11 = document.querySelector('#js_answer_11');
//   // クリックする要素を取得

//   let box11 = document.getElementsByClassName("js-answer1_box");
//   // クラスを追加する要素を取得

//   let title11 =document.querySelector('#js-answer1_incorrect_title');
//   // クラスを追加する要素を取得

//   let box11class = function (el) {
//     el[0].classList.toggle('quetion1_answer_incorrect');
//   }
//   // クラスを追加・削除する動きを定義

//   btn11.addEventListener('click', function(){
//     box11class(box11);
//   }, false);
//    // ”btn”がクリックされたら”box”に対してbox11classを実行

//   title11.addEventListener('click', function(){
//     title11class(title11);
//   }, false);
// document.getElementById('js_answer_11').addEventListener('click', () => {
//   const targetnode = document.getElementById("js_answer_11");

//   targetnode.style.border = "solid 5px #0071BC";
// });

// document.getElementById('js_answer_11').addEventListener('click', () => {
//   const targetnode = document.getElementById('js-answer1_incorrect_title');

//   targetnode.style.display = "block";
// });
// // 1-2のボタン変化
//   // 1-2押された時の正解表示
//   let btn12 = document.querySelector('#js_answer_12');
//   let box12 = document.getElementsByClassName("js-answer1_box");
//   let title12 = document.querySelector('#js-answer1_correct_title');
//   let box12class = function (el) {
//   el[0].classList.toggle('quetion1_answer_correct');
//   }  
//   btn12.addEventListener('click', function(){
//     box12class(box12);
//   }, false);
//   title12.addEventListener('click', function(){
//     title12class(title12);
//   }, false);
  
//   document.getElementById('js_answer_12').addEventListener('click', () => {
//     const targetnode = document.getElementById("js_answer_12");
  
//     targetnode.style.border = "solid 5px #0071BC";
//   });
  
//   document.getElementById('js_answer_12').addEventListener('click', () => {
//     const targetnode = document.getElementById('js-answer1_correct_title');
  
//     targetnode.style.display = "block";
//   });
  
// // 1-3のボタン変化
//   let btn13 = document.querySelector('#js_answer_13');
//   let box13 = document.getElementsByClassName("js-answer1_box");
//   let title13 = document.querySelector('#js-answer1_incorrect_title');
//   let box13class = function (el) {
//   el[0].classList.toggle('quetion1_answer_incorrect');
//   }  
//   btn12.addEventListener('click', function(){
//     box12class(box12);
//   }, false);
//   title12.addEventListener('click', function(){
//     title12class(title12);
//   }, false);
//   document.getElementById('js_answer_13').addEventListener('click', () => {
//     const targetnode = document.getElementById("js_answer_13");
  
//     targetnode.style.border = "solid 5px #0071BC";
//   });
  
//   document.getElementById('js_answer_13').addEventListener('click', () => {
//     const targetnode = document.getElementById('js-answer1_incorrect_title');
  
//     targetnode.style.display = "block";
//   });
// // 2-1のボタン変化
// document.getElementById('js_answer_21').addEventListener('click', () => {
//   const targetnode = document.getElementById("js_answer_21");

//   targetnode.style.border = "solid 5px #0071BC";
// });
// // 2-2のボタン変化
// document.getElementById('js_answer_22').addEventListener('click', () => {
//   const targetnode = document.getElementById("js_answer_22");

//   targetnode.style.border = "solid 5px #0071BC";
// });
// // 2-3のボタン変化
// document.getElementById('js_answer_23').addEventListener('click', () => {
//   const targetnode = document.getElementById("js_answer_23");

//   targetnode.style.border = "solid 5px #0071BC";
// });
// // 3-1のボタン変化
// document.getElementById('js_answer_31').addEventListener('click', () => {
//   const targetnode = document.getElementById("js_answer_31");

//   targetnode.style.border = "solid 5px #0071BC";
// });
// // 3-2のボタン変化
// document.getElementById('js_answer_32').addEventListener('click', () => {
//   const targetnode = document.getElementById("js_answer_32");

//   targetnode.style.border = "solid 5px #0071BC";
// });
// // 3-3のボタン変化
// document.getElementById('js_answer_33').addEventListener('click', () => {
//   const targetnode = document.getElementById("js_answer_33");

//   targetnode.style.border = "solid 5px #0071BC";
// });
// // 4-1のボタン変化
// document.getElementById('js_answer_41').addEventListener('click', () => {
//   const targetnode = document.getElementById("js_answer_41");

//   targetnode.style.border = "solid 5px #0071BC";
// });
// // 4-2のボタン変化
// document.getElementById('js_answer_42').addEventListener('click', () => {
//   const targetnode = document.getElementById("js_answer_42");

//   targetnode.style.border = "solid 5px #0071BC";
// });
// // 4-3のボタン変化
// document.getElementById('js_answer_43').addEventListener('click', () => {
//   const targetnode = document.getElementById("js_answer_43");

//   targetnode.style.border = "solid 5px #0071BC";
// });
// // 5-1のボタン変化
// document.getElementById('js_answer_51').addEventListener('click', () => {
//   const targetnode = document.getElementById("js_answer_51");

//   targetnode.style.border = "solid 5px #0071BC";
// });
// // 5-2のボタン変化
// document.getElementById('js_answer_52').addEventListener('click', () => {
//   const targetnode = document.getElementById("js_answer_52");

//   targetnode.style.border = "solid 5px #0071BC";
// });
// // 5-3のボタン変化
// document.getElementById('js_answer_53').addEventListener('click', () => {
//   const targetnode = document.getElementById("js_answer_53");

//   targetnode.style.border = "solid 5px #0071BC";
// });
// // 6-1のボタン変化
// document.getElementById('js_answer_61').addEventListener('click', () => {
//   const targetnode = document.getElementById("js_answer_61");

//   targetnode.style.border = "solid 5px #0071BC";
// });
// // 6-2のボタン変化
// document.getElementById('js_answer_62').addEventListener('click', () => {
//   const targetnode = document.getElementById("js_answer_62");

//   targetnode.style.border = "solid 5px #0071BC";
// });
// // 6-3のボタン変化
// document.getElementById('js_answer_63').addEventListener('click', () => {
//   const targetnode = document.getElementById("js_answer_63");

//   targetnode.style.border = "solid 5px #0071BC";
// });


