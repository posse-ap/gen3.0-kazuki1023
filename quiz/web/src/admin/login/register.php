<?php
include_once("../dbconnect.php");


try {
  // 新規登録で入力された情報をdbに接続
  $register_sql = 'INSERT INTO users (name, email, password)   VALUES(:name, :email, :password)';
  $register_stmt = $dbh->prepare($register_sql);

  // passwordをハッシュ化
  $password = $_POST['password'];
  $password_hash = password_hash($password,PASSWORD_DEFAULT);

  // 値をセット
  $register_stmt->bindValue(':name', $_POST['name'], PDO::PARAM_STR);
  $register_stmt->bindValue(':email', $_POST['email'],PDO::PARAM_STR);
  $register_stmt->bindValue(':password', $password_hash, PDO::PARAM_STR);
  // SQL実行
  $register_stmt->execute();
} catch (PDOException $e) {
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
  <title>新規登録画面</title>
</head>
<body>
  <main>
  <h1>新規登録完了しました</h1>
  <div>
    <a href="login.php">ログイン画面に戻る</a>
  </div>
  </main>
</body>
</html>