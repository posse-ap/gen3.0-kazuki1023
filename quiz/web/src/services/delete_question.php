<!-- http://localhost:8080/services/delete_question.php -->
<?php
include ('../dbconnect.php');
?>

<?php
if(isset($_GET['id'])) { $delete_id = $_GET['id']; }
echo $delete_id;
// (1) 削除するデータを用意
$id = $delete_id;

// (2) データベースに接続
include ('../dbconnect.php');

// (3) SQL作成
$stmt_questions = $dbh->prepare("DELETE FROM questions WHERE id = :id");
$stmt_choices = $dbh->prepare("DELETE FROM choices WHERE question_id = :id");

// (4) 登録するデータをセット
$stmt_questions->bindParam( ':id', $id, PDO::PARAM_INT);
$stmt_choices->bindParam( ':id', $id, PDO::PARAM_INT);

// (5) SQL実行
$res_questions = $stmt_questions->execute();
$res_choices = $stmt_choices->execute();

?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>削除内容</title>
</head>
<body>
  <div>
    <h2>以下の問題を削除しました</h2>
    <!-- 以下削除内容を書きたい。どの問題を削除したかわかるように、ここに削除した問題のidから、問題ないようをひっぱってきたい。それのやり方がわからない。 -->
    <div>
      <p></p>
    </div>

    <div class="return">
      <button class="return_button">
        <a href="../admin/index.php">問題一覧・削除画面に戻る</a>
      </button>
    </div>

  </div>
</body>
</html>


