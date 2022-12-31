<?php
// dbに接続する。
include_once("../dbconnect.php");
?>

<!-- ログイン画面を作成する -->
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ログイン画面</title>
  <link rel="stylesheet" href="../styles/normalize.css">
  <link rel="stylesheet" href="../styles/login.css">
</head>
<body>
  <header></header>
  <main>
    <h2>ログイン画面</h2>
    <div>
      <form action="http://localhost:8080/admin/login_judge.php" method="post" class="login_form" autocomplete="off">
        <div class="login_form_email">
          <label for="login_email" >メールアドレス</label>
          <input type="text" id="login_email" placeholder="メールアドレスを入力してください" name="email" required>
        </div>
        <div class="login_form_password">
          <label for="login_password">パスワード</label>
          <input type="text" id="login_password" placeholder="パスワードを入力してください" name="password" required>
        </div>
        <div class="login_button">
          <button name="login" type="submit">ログインする</button>
        </div>
      </form>
    </div>
    <h2>新規登録</h2>
    <div>
      <form action="http://localhost:8080/admin/register.php" method="post" class="register_form" autocomplete="off">
        <div class="register_form_name">
          <label for="register_name">名前</label>
          <input type="text" id="register_name" placeholder="名前を入力してください" name="name" required>
        </div>
        <div class="register_form_email">
          <label for="register_email" >メールアドレス</label>
          <input type="text" id="register_email" placeholder="メールアドレスを入力してください" name="email" required>
        </div>
        <div class="register_form_password">
          <label for="register_password">パスワード</label>
          <input type="text" id="register_password" placeholder="パスワードを入力してください" name="password" required>
        </div>
        <div class="register_button">
          <button name="register" type="submit">新規登録する</button>
        </div>
      </form>
    </div>
  </main>
</body>
</html>