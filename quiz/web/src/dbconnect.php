<?php
/* ドライバ呼び出しを使用して MySQL データベースに接続する */
$dsn = 'mysql:dbname=posse;host=db';
$user = 'root';
$password = 'root';

$dbh = new PDO($dsn, $user, $password);
// new PDO('hostの名前', 'データーベースのユーザー名'、'データーベースのパスワード'、'使用するデーターベース名')
$sql = 'SELECT id, content FROM questions';
// ↑これはただの文字列、ただ、queryに代入するものをシンプルにするためだけにかいてるもの。

// questionテーブルを検索し、結果をquestion変数に代入する処理
$sql_questions = 'SELECT *  FROM questions';
$questions = $dbh->query($sql_questions)->fetchAll(PDO::FETCH_ASSOC);


// choicesテーブルを検索し、結果をquestion変数に代入する処理
$sql_choices = 'SELECT * FROM choices';
// $sql_choices = 'SELECT id, question_id, name, valid, FROM choices';
// これだとエラー起きる。why???
$choices = $dbh->query($sql_choices)->fetchAll(PDO::FETCH_ASSOC);
// print_r($choices);

// questionsテーブルとchoicesテーブルを結びつける
foreach ($choices as $key => $choice) {
  $index = array_search($choice["question_id"], array_column($questions, 'id'));
  $questions[$index]["choices"][] = $choice;
}

// hoursテーブルを持ってきて配列に挿入
$sql_dateid_hours = 'SELECT date_id FROM hours';
$dateid_hours = $dbh->query($sql_dateid_hours)->fetchAll(PDO::FETCH_ASSOC);


$sql_hour_hours = 'SELECT hours FROM hours';
$hour_hours = $dbh->query($sql_hour_hours)->fetchAll(PDO::FETCH_ASSOC);
// echo "<pre>";
// print_r($hour_hours);
// echo "</pre>";

// contentsテーブルを持ってきて配列に挿入
$sql_contents = 'SELECT * FROM contents';
$contents = $dbh->query($sql_contents)->fetchAll(PDO::FETCH_ASSOC);

// languagesテーブルを持ってきて配列に挿入
$sql_languages = 'SELECT * FROM languages';
$languages = $dbh->query($sql_languages)->fetchAll(PDO::FETCH_ASSOC);




