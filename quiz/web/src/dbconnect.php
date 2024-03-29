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

//////////  webapp ////////////////////
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

// 日付ごとの学習時間を算出して，日付と学習時間の配列を持つ2次元配列を作成する
/////////// 棒グラフ用のデータをテーブルから持ってくる //////////////
class Study {
  public $day;
  public $hours;

  public function get_day() {
      return $this->day;
  }

  public function get_hours() {
      return (int)$this->hours;
  }
}

$date_sql = "SELECT DATE_FORMAT(hours.date, '%Y-%m-%d') day, sum(hours.hours) hours FROM hours group by day having day > '2023-01-00' and day < '2023-01-32' ";
$date = $dbh->query($date_sql)->fetchAll(\PDO::FETCH_CLASS, Study::class);
// echo "<pre>";
// var_dump($date);
// echo "</pre>";
$formatted_study_var_data = array_map(function($study) {
    return [$study->get_day(), $study->get_hours()];
},$date);
$chart_var_data = json_encode($formatted_study_var_data);
// ここに日付と学習時間の配列を持つ2次元配列を作成している.
// echo "<pre>";
// print_r($chart_var_data);
// echo "</pre>";





//////////////// パイグラフ用のデータをテーブルから持ってくる //////////
// 学習コンテンツ用のデータ
class Contents {
  public $content;
  public $hours;

  public function get_content() {
    return $this->content;
}

public function get_hours() {
  return (int)$this->hours;
  }
}

$contents_sql = "SELECT contents.content, sum(hours.hours) hours from hoursContents join contents on hoursContents.contents_id = contents.id join hours on hoursContents.hours_id = hours.id Where hours_id > 11 group by contents.content";

$content_data = $dbh->query($contents_sql)->fetchAll(\PDO::FETCH_CLASS, Contents::class);



$formatted_content_pai_data = array_map(function($study) {
    return [$study->get_content(), $study->get_hours()];
}, $content_data);

$content_pai_data = json_encode($formatted_content_pai_data, JSON_UNESCAPED_UNICODE);



// 学習言語用のデータ

class Languages {
  public $language;
  public $hours;

  public function get_language() {
    return $this -> language;
  }

  public function get_hours() {
    return(int)$this -> hours;
  }
}

$languages_sql = "SELECT sum(hours.hours) hours ,languages.language from hoursLanguages join languages on hoursLanguages.languages_id = languages.id join hours on hoursLanguages.hours_id = hours.id where hours_id > 11 group by languages.language";

$language_data = $dbh->query($languages_sql)->fetchAll(\PDO::FETCH_CLASS, Languages::class);

$formatted_language_pai_data = array_map(function($study) {
  return [$study->get_language(), $study->get_hours()];
}, $language_data);
$language_pai_data = json_encode($formatted_language_pai_data, JSON_UNESCAPED_UNICODE);










