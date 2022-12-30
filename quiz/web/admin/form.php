<?php
if (isset($_POST['date']) && is_array($_POST['date'])) {
  $modal_date = $_POST['date'];
  echo "<pre>";
  var_dump($modal_date);
  echo "</pre>";
};

?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="../style/normalize.css">
  <link rel="stylesheet" href="../style/web.css">
</head>
<body>
  <main>
    <div class="modal">
      <form action="./admin/form.php" method="post" id="form_record">
        <div class="modal_content">
          <button class="modal_close"><span class="batsu"></span></button>
          <div class="modal_detail">
            <div class="modal_detail_left">
              <div class="modal_learning_day">
                <div class="modal_learning_day_detail">
                  <p class="learning_day_title" >学習日</p>
                  <input type="date" name="learning_day_detail" class="learning_day_text">
                  <!-- <button id="learning_day_detail" placeholder="2022年10月23日"> -->
                </div>
              </div>
              <div class="modal_learning_content">
                <p class="learning_content_title">学習コンテンツ （複数選択可）</p>
                <div class="modal_learning_content_detail">
                  <div class="modal_N">
                    <input type="checkbox"  name=""><label for="N_cramSchool" class="N_cramSchool">N予備校</label>
                  </div>
                  <div class="modal_dot">
                    <input type="checkbox"  name=""><label for="dotinstall" class="dotinstall">ドットインストール</label>
                  </div>
                  <div class="modal_Posse">
                    <input type="checkbox"  name=""><label for="posse"class="posse">POSSE課題</label>
                  </div>
                </div>
              </div>
              <div class="modal_learning_language">
                <p class="learning_language_title">学習言語 （複数選択可)</p>
                <div class="learning_language_content">
                  <div class="modal_html">
                    <input type="checkbox"  name=""><label for="html"class="html">HTML</label>
                  </div>
                  <div class="modal_css">
                    <input type="checkbox"  name=""><label for="css"class="css">CSS</label>
                  </div>
                  <div class="modal_js">
                    <input type="checkbox"  name=""><label for="js"class="js">JavaScript</label>
                  </div>
                  <div class="modal_php">
                    <input type="checkbox"  name=""><label for="php"class="php">PHP</label>
                  </div>
                  <div class="modal_laravel">
                    <input type="checkbox" name=""><label for="laravel"class="laravel">Laravel</label>
                  </div>
                  <div class="modal_sql">
                    <input type="checkbox" name=""><label for="sql"class="sql">SQL</label>
                  </div>
                  <div class="modal_shell">
                    <input type="checkbox"  name=""><label for="shell"class="shell">SHELL</label>
                  </div>
                  <div class="modal_others">
                    <input type="checkbox"  name=""><label for="others"class="others">情報システム基礎情報（その他</label>
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
    <div class="finish">
      <div class="finish_content">
        <form action="../webapp.php">
          <button class="finish_close">
            <span class="batsu"></span>
          </button>
          <div class="finish_mark">
            <p class="finish_awesome">AWESOME!</p>
            <ul class="finish_checkbox">
              <li class="finish_checkbox_item"></li>
            </ul>
            <p class="finish_anounce">記録・投稿<br>完了しました</p>
          </div>
        </form>
      </div>
    </div>
    <div class="error">
      <div class="error_content">
        <p class="error_content_error">ERROR</p>
        <i class="gg-danger"></i>
        <p class="error_anounce">一時的にご利用できない状態です。<br>しばらく経ってから<br>再度アクセスしてください</p>
      </div>
    </div>
  </main>
  <script src="../script/form.js"></script>
</body>
</html>