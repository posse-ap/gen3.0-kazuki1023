<!DOCTYPE html>
<!-- _φ(･_･ 実装メモ
データベースのquestions項目を検索
foreachを使って検索したデータをループ処理
idカラム、contentカラムの値を出力 -->

<!-- 問題一覧・削除画面 -->
<?php
include_once('../dbconnect.php');
// include_once ('../services/delate_question.php');
// print_r($questions);
?>


<?php echo "<br>" ?>


<?php
$questions_title = ["問題番号","問題文","問題の画像", "補足"];
$questions_span = ["problem_number", "problem_content", "problem_image", "problem_support"];
$questions_name = ["problem_number_name", "problem_content_name", "problem_image_name", "problem_support_name"];
$choices_title = ["左側の選択肢", "真ん中の選択肢", "右側のの選択肢",];
$choices_span = ["choice_left", "choice_center", "choice_right"];
$choices_name = ["choices_number_name", "choices_content_name", "choices_image_name", "choices_support_name"];

?>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>問題一覧・削除画面</title>
  <link rel="stylesheet" href="../styles/normalize.css">
  <link rel="stylesheet" href="../styles/style.css">
</head>

<body>
  <header>
    <div>
      <button class="logout"><a href="http://localhost:8080/admin/logout.php">ログアウト</a></button>
    </div>
  </header>
  <main>
    <section class="problem_list">
      <h2 class="problem_list_title">問題一覧</h2>
      <?php { ?>
        <div class="problem_list_content">
          <?php foreach ($questions as $question) {
            echo '<div class="problem_list_detail ';
            echo $question["id"] . ' ">';
            print_r("問題" . $question["id"] . ":" . $question["content"]);
            echo '<div class="problem_list_detail_answer ';
            echo $question["id"] . ' ">';
            echo "<br>";
            echo "選択肢";
            echo "<br>";
            for ($j = 0; $j < count($question["choices"]); $j++) {
              print_r($j + 1 . ":");
              print_r($question["choices"][$j]["name"]);
              echo "<br>";
            };
            echo "<br>";
            echo '</div>';
            echo '<div class="problem_button">';
            echo '<button class="problem_list_delete_button"><a href="http://localhost:8080/services/delete_question.php?id=';
            echo $question["id"];
            echo '">問題削除</a></button>';
            echo '<button class="problem_list_update_button"><a href="http://localhost:8080/admin/questions/create.php?id=';
            echo $question["id"];
            echo '">問題更新</a></button>';
            echo '</div>';
            echo "<br>";
            echo "</div>";
          } ?>
        </div>
      <?php } ?>
    </section>
  </main>
</body>

</html>