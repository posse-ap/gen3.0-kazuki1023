'use strict';
/**
   * @description 問題と回答の定数
   * @type {QUIZ[]}
   */
  const ALL_QUIZ = [
  {
    id: 1,
    question: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
    answers: ['約28万人', '約79万人', '約183万人'],
    correctNumber: 1,
    note: '経済産業省 2019年3月 － IT 人材需給に関する調査'
  },
  {
    id: 2,
    question: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
    answers: ['INTECH', 'BIZZTECH', 'X-TECH'],
    correctNumber: 2,
  },
  {
    id: 3,
    question: 'IoTとは何の略でしょう？',
    answers: ['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
    correctNumber: 0,
  },
  {
    id: 4,
    question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    answers: ['Society 5.0', 'CyPhy', 'SDGs'],
    correctNumber: 0,
    note: 'Society5.0 - 科学技術政策 - 内閣府'
  },
  {
    id: 5,
    question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    answers: ['Web3.0', 'NFT', 'メタバース'],
    correctNumber: 0,
  },
  {
    id: 6,
    question: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
    answers: ['約2倍', '約5倍', '約11倍'],
    correctNumber: 1,
    note: 'Accenture Technology Vision 2021'
  }
  ];

  /**
   * @description 配列の並び替え
   * @param arrays {Array}
   * @returns {Array}
   */
  // const shuffle = arrays => {
  //   const array = arrays.slice();
  //   for (let i = array.length - 1; i >= 0; i--) {
  //     const randomIndex = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  //   }
  //   return array
  // }

  // const quizArray = shuffle(ALL_QUIZ);


  /**
   * @type {NodeListOf<Element>}
   * @description すべての問題を取得
   */
    const allQuiz  = document.querySelectorAll('.js-quiz');

  /**
     * @description buttonタグにdisabledを付与
     * @param answers {NodeListOf<Element>}
     */
  const setDisabled = answers => {
    answers.forEach(answer => {
      answer.disabled = true;
    })
  }

  /**
     * @description trueかfalseで出力する文字列を出し分ける
     * @param target {Element}
     * @param isCorrect {boolean}
     */
  const setTitle = (target, isCorrect) => {
    target.innerText = isCorrect ? '正解！' : '不正解...';
  }

  /**
   * @description trueかfalseでクラス名を付け分ける
   * @param target {Element}
   * @param isCorrect {boolean}
   */
    const setClassName = (target, isCorrect) => {
      target.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
    }

    /**
   * 各問題の中での処理
   */
  allQuiz.forEach(quiz => {
    const answers = quiz.querySelectorAll('.js-answer');
    const selectedQuiz = Number(quiz.getAttribute('data-quiz'));
    const answerBox = quiz.querySelector('.js-answerBox');
    const answerTitle = quiz.querySelector('.js-answerTitle');
    const answerText = quiz.querySelector('.js-answerText');

    const quizArray =ALL_QUIZ;
    // console.log(quizArray);
    console.log(selectedQuiz);

    answers.forEach(answer => {
      answer.addEventListener('click', () => {
        answer.classList.add('is-selected');
        const selectedAnswerNumber = Number(answer.getAttribute('data-answer'));

        // console.log(selectedAnswerNumber);

        // 全てのボタンを非活性化
        setDisabled(answers);

        // 正解ならtrue, 不正解ならfalseをcheckCorrectに格納
        const correctNumber = quizArray[selectedQuiz].correctNumber
        const isCorrect = correctNumber === selectedAnswerNumber;

        // 回答欄にテキストやclass名を付与
        answerText.innerText = quizArray[selectedQuiz].answers[correctNumber];
        console.log(quizArray[selectedQuiz])
        console.log(quizArray[selectedQuiz].answers)
        console.log(quizArray[selectedQuiz].answers[correctNumber])
        setTitle(answerTitle, isCorrect);
        setClassName(answerBox, isCorrect);
      })
    })
  })