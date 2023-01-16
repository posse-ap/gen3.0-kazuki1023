<?php
session_start();
$_SESSION = array();//セッションの中身をすべて削除
session_destroy();//セッションを破壊
?>

<p>ログアウトしました</p>
<a href="http://localhost:8080/admin/login.php">ログインへ</a>