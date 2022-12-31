<?php
// include_once('http://localhost:8080/admin/questions/create.php');
include_once('../dbconnect.php');

try {
  // DB接続
  $dsn = 'mysql:dbname=posse;host=db';
  $user = 'root';
  $password = 'root';
  $dbh = new PDO($dsn, $user, $password);
  $sql = 'SELECT id, content FROM questions';
  // questionテーブルを検索し、結果をquestion変数に代入する処理
  $sql_questions = 'SELECT *  FROM questions';
  $questions = $dbh->query($sql_questions)->fetchAll(PDO::FETCH_ASSOC);
  // choicesテーブルを検索し、結果をchoices変数に代入する処理
  $sql_choices = 'SELECT * FROM choices';
  $choices = $dbh->query($sql_choices)->fetchAll(PDO::FETCH_ASSOC);

  foreach ($choices as $key => $choice) {
    $index = array_search($choice["question_id"], array_column($questions, 'id'));
    $questions[$index]["choices"][] = $choice;
  }
  // db接続確認用
  // print_r($questions);

  // SQL文をセット
  // question用
  $questions_sql = 'INSERT INTO questions (id, content, image, supplement) VALUES(:id, :content, :image, :supplement)';
  $questions_stmt = $dbh->prepare($questions_sql);

  // 値をセット
  $questions_stmt->bindValue(':id', $_POST['problem_number_name'], PDO::PARAM_INT);
  $questions_stmt->bindValue(':content',
  $_POST['problem_content_name'], PDO::PARAM_STR);
  $questions_stmt->bindValue(':image', $_POST['problem_image_name'], PDO::PARAM_STR);
  $questions_stmt->bindValue(':supplement', $_POST['problem_support_name'], PDO::PARAM_STR);

  // SQL実行
  $questions_stmt->execute();

} catch (PDOException $e) {
  // エラー発生
  echo $e->getMessage();

} finally {
  // DB接続を閉じる
  $pdo = null;
}

try {
   // DB接続
  $dsn = 'mysql:dbname=posse;host=db';
  $user = 'root';
  $password = 'root';
  $dbh = new PDO($dsn, $user, $password);
  $sql = 'SELECT id, content FROM questions';
  // questionテーブルを検索し、結果をquestion変数に代入する処理
  $sql_questions = 'SELECT *  FROM questions';
  $questions = $dbh->query($sql_questions)->fetchAll(PDO::FETCH_ASSOC);
  // choicesテーブルを検索し、結果をchoices変数に代入する処理
  $sql_choices = 'SELECT * FROM choices';
  $choices = $dbh->query($sql_choices)->fetchAll(PDO::FETCH_ASSOC);

  foreach ($choices as $key => $choice) {
    $index = array_search($choice["question_id"], array_column($questions, 'id'));
    $questions[$index]["choices"][] = $choice;
  }

// choices用
$choices_sql = 'INSERT INTO choices (question_id, name, valid) VALUES(:question_id, :name, :valid)';
$choices_stmt = $dbh->prepare($choices_sql);

// 左側の値をセット
$choices_stmt->bindValue(':question_id', $_POST['problem_number_name'], PDO::PARAM_INT);
$choices_stmt->bindValue(':name', $_POST['choices_left_name'], PDO::PARAM_STR);
$choices_stmt->bindValue(':valid', 1, PDO::PARAM_INT);
$choices_stmt->execute();
// // 真ん中の値をセット
$choices_stmt->bindValue(':question_id', $_POST['problem_number_name'], PDO::PARAM_INT);
$choices_stmt->bindValue(':name', $_POST['choices_center_name'], PDO::PARAM_STR);
$choices_stmt->bindValue(':valid', 1, PDO::PARAM_INT);
$choices_stmt->execute();
// // 右側の値をセット
$choices_stmt->bindValue(':question_id', $_POST['problem_number_name'], PDO::PARAM_INT);
$choices_stmt->bindValue(':name', $_POST['choices_right_name'], PDO::PARAM_STR);
$choices_stmt->bindValue(':valid', 1, PDO::PARAM_INT);
$choices_stmt->execute();


// SQL実行


}  catch (PDOException $e) {
  // エラー発生
  echo $e->getMessage();

} finally {
  // DB接続を閉じる
  $pdo = null;
}

?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
  if(isset($_POST['problem_number_name'])){
    $problem_number_name = $_POST['problem_number_name'];
    echo $problem_number_name;
  }

  ?>