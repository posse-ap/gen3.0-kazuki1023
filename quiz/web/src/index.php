<?php
// db接続
// http://localhost:8080/web/admin/index.php
// 上記にアクセスするときはコメントアウト解除
// include_once("../../dbconnect.php");
?>

<!-- contentテーブルで同じdate_idを持つものを同じ配列の中に入れる. -->
<!-- https://wepicks.net/phpref-array/#3 -->

<!-- print_r($content["date_id"]);で取り出したものを配列に代入.
同様にprint_r($content["content"]);も配列に代入。２つの配列をarray_combine。最後にarray_merge_reclusiveでで同じkey(date_id)を持つものを統合する-->
<?php
// echo "<pre>";
// print_r($contents);
// echo"</pre>";
// echo "<pre>";
// print_r($hours);
// echo"</pre>";
$contents_date_array = array();
$contents_content_array = array();
foreach ($contents as $key =>$content) {
  // $contents_date_array[] = $content["date_id"];
  // $contents_content_array[] = $content["content"];
  unset($content["id"], $content["date"]);
  // echo "<pre>";
  // print_r($content);
  // echo "</pre>";
}
// echo "<pre>";
// print_r($contents_date_array);
// echo"</pre>";
// echo "<pre>";
// print_r($contents_content_array);
// echo"</pre>";
// echo "<pre>";
// print_r(array_combine($contents_date_array, $contents_content_array));
// echo"</pre>";
// print_r(array_merge_recursive($contents_date_array, $contents_content_array));
?>

<!-- hoursテーブルとcontentテーブルを結びつける -->
<?php
// foreach ($contents as $key => $content) {
//   $index = array_search($content["date_id"], array_column($hours, 'date_id'));
//   $hours[$key]["contents"][] = $content;
// }
// echo "<pre>";
// print_r($hours);
// echo"</pre>";
?>
<!-- hoursテーブルを日、月、合計ごとのテーブルにまとめる -->
<?php
// まず今日のデータを検索し、今日の勉強時間を出す
$objDateTime = new DateTime();
$today = $objDateTime->format('Y'.'m'.'d');
$sql_today = 'SELECT * FROM hours WHERE date_id = :today';
$today_stmt = $dbh->prepare($sql_today);
$today_stmt->bindValue(':today', $today);
$today_stmt->execute();
$result_todays = $today_stmt->fetchAll();
$today_sum = 0;
foreach($result_todays as $key => $result_today) {
  $today_sum += $result_today["hours"];
}
// 不要な配列の値を削除
unset($result_today[0], $result_today[1], $result_today[2], $result_today[3]);
// $result_todayに今日の学習時間の合計を代入
$result_today["day_sum"] = $today_sum;
// echo "<pre>";
// print_r($result_today);
// echo "</pre>";


// 今月のデータを検索し、今月の勉強時間を出す
$this_month = $objDateTime->format('Y/m');
$this_month_first = $objDateTime->format('Y'.'m'.'00');
$sql_this_month = 'SELECT * FROM hours WHERE date_id BETWEEN :this_month_first AND :today';
$month_stmt = $dbh->prepare($sql_this_month);
$month_stmt->bindValue(':this_month_first',$this_month_first);
$month_stmt->bindValue(':today',$today);
$month_stmt->execute();
$result_monthes = $month_stmt->fetchAll();
$month_sum = 0;
foreach($result_monthes as $result_month) {
  $month_sum += $result_month["hours"];
}
unset($result_month[0],$result_month[1],$result_month[2],$result_month[3]);
$result_month["month_sum"] = $month_sum;


// echo "<pre>";
// print_r($result_month);
// // print_r(array_values($result_month));
// echo "</pre>";
// これまでの勉強時間を算出する
$sql_total_month = 'SELECT * FROM hours WHERE date_id <= :today';
$total_stmt = $dbh->prepare($sql_total_month);
$total_stmt->bindValue(':today', $today);
$total_stmt->execute();
$result_totals = $total_stmt->fetchAll();
$total_sum = 0;
// echo "<pre>";
// print_r($result_totals);
// echo "</pre>";
foreach($result_totals as $result_total) {
  $total_sum += $result_total["hours"];
};

// $result_todayとcontentをむすびつける
// var_export(array_column($contents, 'content', 'date_id'));
// foreach($content as $key => $content) {

// }
?>