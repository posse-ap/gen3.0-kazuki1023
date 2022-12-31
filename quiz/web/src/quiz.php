<?php
// データベースの読み込み
include_once ('./dbconnect.php');
// print_r("<pre>");
// print_r($questions);
// print_r("</pre>");
?>

<?php
// 問題のシャッフル
shuffle($questions);
?>

<!DOCTYPE html >
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ITクイズ | POSSE 初めてのWeb制作</title>
  <!-- スタイルシート読み込み -->
  <link rel="stylesheet" href="../assets/styles/common.css">
  <!-- Google Fonts読み込み -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Plus+Jakarta+Sans:wght@400;700&display=swap"
    rel="stylesheet">
  <script src="../assets/scripts/common.js" defer></script>
  <!-- <script src="../assets/scripts/quiz3.js" defer></script> -->
  <script src="../assets/scripts/php.quiz.js" defer></script>
</head>

<body>
  <header id="js-header" class="l-header p-header">
    <div class="p-header__logo"><img src="../assets/img/logo.svg" alt="POSSE"></div>
    <button class="p-header__button" id="js-headerButton"></button>
    <div class="p-header__inner">
      <nav class="p-header__nav">
        <ul class="p-header__nav__list">
        <li class="p-header__nav__item">
            <a href="./admin/login.php" class="p-header__nav__item__link">管理者画面</a>
          </li>
          <li class="p-header__nav__item">
            <a href="../" class="p-header__nav__item__link">POSSEとは</a>
          </li>
          <li class="p-header__nav__item">
            <a href="./" class="p-header__nav__item__link">クイズ</a>
          </li>
        </ul>
      </nav>
      <div class="p-header__official">
        <a href="https://line.me/R/ti/p/@651htnqp?from=page" target="_blank" rel="noopener noreferrer" class="p-header__official__link--line">
          <i class="u-icon__line"></i>
          <span class="">POSSE公式LINEを追加</span>
          <i class="u-icon__link"></i>
        </a>
        <a href="" class="p-header__official__link--website">POSSE 公式サイト<i class="u-icon__link"></i></a>
      </div>
      <ul class="p-header__sns p-sns">
        <li class="p-sns__item">
          <a href="https://twitter.com/posse_program" target="_blank" rel="noopener noreferrer" class="p-sns__item__link"
            aria-label="Twitter">
            <i class="u-icon__twitter"></i>
          </a>
        </li>
        <li class="p-sns__item">
          <a href="https://www.instagram.com/posse_programming/" target="_blank" rel="noopener noreferrer"
            class="p-sns__item__link" aria-label="instagram">
            <i class="u-icon__instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  </header>
  <!-- /.l-header .p-header -->

  <main class="l-main">
    <section class="p-hero p-quiz-hero">
      <div class="l-container">
        <h1 class="p-hero__title">
          <span class="p-hero__title__label">POSSE課題</span>
          <span class="p-hero__title__inline">ITクイズ</span>
        </h1>
      </div>
    </section>
    <!-- /.p-hero .p-quiz-hero -->

    <div class="p-quiz-container l-container" id="js-quizContainer">
      <?php for ($i = 0; $i < count($questions); $i++) { ?>
        <section class="p-quiz-box js-quiz" data-quiz="<?php print_r($questions[$i]["id"]-1); ?>">
          <div class="p-quiz-box__question">
            <h2 class="p-quiz-box__question__title">
              <span class="p-quiz-box__label">Q<?= $i + 1 ?></span>
              <span class="p-quiz-box__question__title__text"><?= $questions[$i]["content"]; ?></span>
            </h2>
            <figure class="p-quiz-box__question__image">
              <img src="../assets/img/quiz/<?php print_r($questions[$i]["image"]); ?>" alt="">
            </figure>
            <div class="p-quiz-box__answer">
              <span class="p-quiz-box__label p-quiz-box__label--accent">A</span>
              <ul class="p-quiz-box__answer__list">
                <?php for ($j = 0; $j < 3; $j++) { ?>
                  <li class="p-quiz-box__answer__item">
                    <button class="p-quiz-box__answer__button js-answer" data-answer="<?php print_r($j)?>">
                      <?php print_r($questions[$i]["choices"][$j]["name"]);?>
                      <i class="u-icon__arrow"></i>
                    </button>
                  </li>
                <?php } ?>
              </ul>
            </div>
            <div class="p-quiz-box__answer__correct js-answerBox">
              <p class="p-quiz-box__answer__correct__title js-answerTitle"></p>
              <p class="p-quiz-box__answer__correct__content">
                <span class="p-quiz-box__answer__correct__content__label">A</span>
                <span class="js-answerText"></span>
              </p>
            </div>
          </div>
        </section>
      <?php }?>
    </div>
    <!-- /.l-container .p-quiz-container -->
  </main>

  <div class="p-line">
    <div class="l-container">
      <div class="p-line__body">
        <div class="p-line__body__inner">
          <h2 class="p-heading -light p-line__title"><i class="u-icon__line"></i>POSSE 公式LINE</h2>
          <div class="p-line__content">
            <p>公式LINEにてご質問を随時受け付けております。<br>詳細やPOSSE最新情報につきましては、公式LINEにてお知らせ致しますので<br>下記ボタンより友達追加をお願いします！</p>
          </div>
          <div class="p-line__footer">
            <a href="https://line.me/R/ti/p/@651htnqp?from=page" target="_blank" rel="noopener noreferrer"
              class="p-line__button">LINE追加<i class="u-icon__link"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /.p-line -->
  <footer class="l-footer p-footer">
    <div class="p-fixedLine">
      <a href="https://line.me/R/ti/p/@651htnqp?from=page" target="_blank" rel="noopener noreferrer"
        class="p-fixedLine__link">
        <i class="u-icon__line"></i>
        <p class="p-fixedLine__link__text"><span class="u-sp-hidden">POSSE</span>公式LINEで<br>最新情報をGET！</p>
        <i class="u-icon__link"></i>
      </a>
    </div>
    <div class="l-footer__inner">
      <div class="p-footer__siteinfo">
        <span class="p-footer__logo">
          <img src="../assets/img/logo.svg" alt="POSSE">
        </span>
        <a href="https://posse-ap.com/" target="_blank" rel="noopener noreferrer"
          class="p-footer__siteinfo__link">POSSE公式サイト</a>
      </div>
      <div class="p-footer__sns">
        <ul class="p-sns__list p-footer__sns__list">
          <li class="p-sns__item">
            <a href="https://twitter.com/posse_program" target="_blank" rel="noopener noreferrer"
              class="p-sns__item__link" aria-label="Twitter">
              <i class="u-icon__twitter"></i>
            </a>
          </li>
          <li class="p-sns__item">
            <a href="https://www.instagram.com/posse_programming/" target="_blank" rel="noopener noreferrer"
              class="p-sns__item__link" aria-label="instagram">
              <i class="u-icon__instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="p-footer__copyright">
      <small lang="en">©︎2022 POSSE</small>
    </div>
  </footer>
  <!-- /.l-footer .p-footer -->
  <?php
      // print_r($questions);
      // echo "<br>";
      // foreach($questions as $question) {
      //   print_r($question);
      //   print_r("<br>");
      // }
      // echo "<br>";
      // print_r($questions[0]["choices"][1]["name"]);
      // // 約５倍
      // print_r($questions[0]["image"]);
      // // img-quiz01.png
    ?>
</body>

</html>