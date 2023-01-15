<?php
session_start();
$email = $_POST['email'];
include_once("../dbconnect.php");
// try {
//     $dbh = new PDO($dsn, $username, $password);
// } catch (PDOException $e) {
//     $msg = $e->getMessage();
// }

$loginsql = "SELECT * FROM users WHERE email = :email";
$stmt = $dbh->prepare($loginsql);
$stmt->bindValue(':email', $email);
$stmt->execute();
$member = $stmt->fetchAll();

// 最初に設定したパスワードはハッシュ化シてないので、そのパスワードのチェック
if (isset($_POST['password'], $member['password'])){
    //DBのユーザー情報をセッションに保存
    $_SESSION['id'] = $member['id'];
    $_SESSION['name'] = $member['name'];
    $msg = 'ログインしました。';
    $link = '<a href="http://localhost:8080/admin/index.php">管理者画面へ</a>';
} else {
    $msg = 'メールアドレスもしくはパスワードが間違っています。';
    $link = '<a href="login.php">戻る</a>';
};
// 指定したハッシュがパスワードにマッチしているかチェック
if (isset($_POST['email'],$member[0]['email'])){
    if (password_verify($_POST['password'], $member[0]['password'])){
        //DBのユーザー情報をセッションに保存
        $_SESSION['id'] = $member[0]['id'];
        $_SESSION['name'] = $member[0]['name'];
        // ログインできたときのメッセージ作成
        $msg = 'ログインできました';
        $link ='<a href="http://localhost:8080/admin/index.php">管理者画面へ</a>';
    } else {
        $msg = 'メールアドレスもしくはパスワードが間違っています。';
        $link = '<a href="login.php">ログイン画面に戻る</a>';
    };
} else {
    $name = $_SESSION['name'];
    $msg = 'メールアドレスが間違ってます';
    $link = '<a href="login.php">ログイン画面に戻る</a>';
}

echo $msg;
echo "<br>";
echo  $link;
?>