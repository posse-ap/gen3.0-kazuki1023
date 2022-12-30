<?php
include_once("../dbconnect.php");
include_once("./admin/index.php");
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Posse-webapp</title>
  <link rel="stylesheet" href="../web/style/normalize.css">
  <link rel="stylesheet" href="../web/style/web.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.js"></script>
  <!-- datalabelsプラグインを呼び出す -->
  <script src="https://unpkg.com/apexcharts/dist/apexcharts.min.js" defer></script>
  <script src="./script/piechart.js" defer></script>
</head>
<body>
  <header class="header">
    <div class="header_logo">
      <img src="../web/img/logo.svg" alt="">
    </div>
    <div class="header_week">
      <li class="header_week_4th">4th week</li>
    </div>
    <div class="header_record">
      <button id="header_record_button">記録・投稿</button>
    </div>
  </header>
  <main class="main">
    <div class="container">
      <div class="hours_container">
        <div class="hours">
          <ul id="today_hours">
            <li class="hours_title" id="today_title" name="today"></li>
            <li class="hours_count"><?php echo $today_sum;?></li>
            <li class="hours_hour">hour</li>
          </ul>
          <ul class="month_hours">
            <li class="hours_title" id="month_title"><?php echo $this_month?>の合計</li>
            <li class="hours_count"><?php echo $month_sum;?></li>
            <li class="hours_hour">hour</li>
          </ul>
          <ul class="total_hours">
            <li class="hours_title">総計</li>
            <li class="hours_count"><?php echo $total_sum;?></li>
            <li class="hours_hour">hour</li>
          </ul>
        </div>
        <div class="canvas_container" id="hours_chart"></div>
      </div>
      <div class="learning">
        <div class="learning_character">
          <p class="learning_title">学習言語</p>
          <div class="character_chart">
            <div id="learning_character_chart"></div>
            <ul class="learning_character_detail">
              <li class="circle circle_js">JavaScript</li>
              <li class="circle circle_css">CSS</li>
              <li class="circle circle_php">PHP</li>
              <li class="circle circle_html">HTML</li>
              <li class="circle circle_laravel">Laravel</li>
              <li class="circle circle_sql">SQL</li>
              <li class="circle circle_shell">Shell</li>
              <li class="circle circle_others">情報システム基礎情報（その他)</li>
            </ul>
          </div>
        </div>
        <div class="learning_content">
          <p class="learning_title">学習コンテンツ</p>
          <div id="learning_content_chart"></div>
          <ul class="learning_content_detail">
            <li class="circle circle_dot">ドットインストール</li>
            <li class="circle circle_N_cramSchool">N予備校</li>
            <li class="circle circle_posse">Posse課題</li>
          </ul>
        </div>
      </div>
    </div>
    <form class="date" action="./webapp.php" method="POST">
      <button class="date_button" type="submit" name="before_month">
        <div class="arrow arrow-left"></div>
      </button>
      <div id="date_detail"><?php echo $this_month;?></div>
      <button class="date_button" type="submit" name="after_month">
        <div class="arrow arrow-right"></div>
      </button>
    </form>
    <div class="footer_record">
      <button id="footer_record_button">記録・投稿</button>
    </div>
    <div class="modal">
      <form action="./admin/form.php" method="post" id="form_record">
        <div class="modal_content">
          <button class="modal_close"><span class="batsu"></span></button>
          <div class="modal_detail">
            <div class="modal_detail_left">
              <div class="modal_learning_day">
                <div class="modal_learning_day_detail">
                  <p class="learning_day_title">学習日</p>
                  <input type="date" name="learning_day_detail" class="learning_day_text">
                  <div class="modal_date">
                    <label for="date_confirm" class="date_check"></label>
                    <input type="checkbox" name ="date[]" id="date_confirm">
                  </div>
                </div>
              </div>
              <div class="modal_learning_content">
                <p class="learning_content_title">学習コンテンツ（複数選択可)</p>
                <div class="modal_learning_content_detail">
                  <div class="modal_N">
                    <label for="N_cramSchool" class="N_cramSchool"></label>
                    <input type="checkbox"  name="date[1][]" id="N_cramSchool" value="N予備校">N予備校
                  </div>
                  <div class="modal_dot">
                    <label for="dotinstall" class="dotinstall"></label>
                    <input type="checkbox" name="date[1][]" id="dotinstall" value="ドットインストール">ドットインストール
                  </div>
                  <div class="modal_Posse">
                    <label for="posse"class="posse"></label>
                    <input type="checkbox"  name="date[1][]" id="posse" value="POSSE課題">POSSE課題
                  </div>
                </div>
              </div>
              <div class="modal_learning_language">
                <p class="learning_language_title">学習言語（複数選択可)</p>
                <div class="learning_language_content">
                  <div class="modal_html">
                    <label for="html"class="html"></label>
                    <input type="checkbox" name="date[2][]" id="html" value="HTML">HTML
                  </div>
                  <div class="modal_css">
                    <label for="css"class="css"></label>
                    <input type="checkbox"  name="date[2][]" id="css" value="CSS">CSS
                  </div>
                  <div class="modal_js">
                    <label for="js"class="js"></label>
                    <input type="checkbox"  name="date[2][]" id="js" value="JavaScript">JavaScript
                  </div>
                  <div class="modal_php">
                    <label for="php"class="php"></label>
                    <input type="checkbox"  name="date[2][]" id="php" value="PHP">PHP
                  </div>
                  <div class="modal_laravel">
                    <label for="laravel"class="laravel"></label>
                    <input type="checkbox" name="date[2][]" id="laravel" value="Laravel">Laravel
                  </div>
                  <div class="modal_sql">
                  <label for="sql"class="sql"></label>
                    <input type="checkbox" name="date[2][]" id="sql" value="SQL">SQL
                  </div>
                  <div class="modal_shell">
                    <label for="shell"class="shell"></label>
                    <input type="checkbox"  name="date[2][]" id="shell" value="SHELL">SHELL
                  </div>
                  <div class="modal_others">
                    <label for="others"class="others"></label>
                    <input type="checkbox"  name="date[2][]" id="others" value="情報システム基礎情報（その他)">情報システム基礎情報（その他)
                  </div>
                </div>
              </div>
            </div>
            <div class="modal_detail_right">
              <div class="modal_learning_time">
                <p class="learning_time_title">学習時間</p>
                <input type="text" name="" class="learning_time_title_detail" placeholder="">
              </div>
              <div class="modal_comment">
                <p class="comment_title">Twitter用コメント</p>
                <textarea name="" id="comment_title_detail" cols="30" rows="10"></textarea>
              </div>
              <div class="modal_twitter">
                <input type="checkbox"  name=""><label for="modal_twitter_button" class="modal_twitter_button" id="twitter_share">Twitterにシャアする</label>
              </div>
            </div>
          </div>
          <button class="modal_record" id="modal_record">記録・投稿</button>
        </div>
      </form>
    </div>
    <div class="calender">
      <div class="calender_content">
        <button id="calender_close"><span class="batsu"></span></button>
        <div class="calender_detail">
          <table>
            <thead>
              <tr>
                <th id="prev">&laquo;</th>
                <th id="title" colspan="3">2022/10</th>
                <th id="next">&raquo;</th>
              </tr>
              <tr>
                <th class="weekday">Sun</th>
                <th class="weekday">Mon</th>
                <th class="weekday">Tue</th>
                <th class="weekday">Wed</th>
                <th class="weekday">Thu</th>
                <th class="weekday">Fri</th>
                <th class="weekday">Sat</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <button class="calender_decide">決定</button>
      </div>
    </div>
    <div class="loading">
      <button class="loading_close"><span class="batsu" ></span></button>
      <div class="loading_content">
        <div class="loader"></div>
      </div>

    </div>
    <!-- <div class="finish">
      <div class="finish_content">
        <button class="finish_close"><span class="batsu"></span></button>
        <div class="finish_mark">
          <p class="finish_awesome">AWESOME!</p>
          <ul class="finish_checkbox">
            <li class="finish_checkbox_item"></li>
          </ul>
          <p class="finish_anounce">記録・投稿<br>完了しました</p>
        </div>
      </div>
    </div>
    <div class="error">
      <div class="error_content">
        <p class="error_content_error">ERROR</p>
        <i class="gg-danger"></i>
        <p class="error_anounce">一時的にご利用できない状態です。<br>しばらく経ってから<br>再度アクセスしてください</p>
      </div>
    </div> -->
  </main>
  <script src="../web/script/web.js"></script>
  <script src="../web/script/form.js"></script>
</body>
</html>