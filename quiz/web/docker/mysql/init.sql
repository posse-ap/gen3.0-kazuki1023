DROP DATABASE IF EXISTS posse;
CREATE DATABASE posse;
use posse;

-- quiestionsテーブルの作成
DROP TABLE IF EXISTS questions;
CREATE TABLE questions (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'ID',
  content VARCHAR(255) COLLATE utf8mb3_general_ci NOT NULL COMMENT '問題文',
  image VARCHAR(255) COLLATE utf8mb3_general_ci NOT NULL COMMENT '問題画像',
  supplement VARCHAR(255) COLLATE utf8mb3_general_ci NOT NULL COMMENT '引用'
);

-- answersテーブルの作成
DROP TABLE IF EXISTS choices;
CREATE TABLE choices (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'ID',
  question_id INT NOT NULL COMMENT '問題特定番号',
  name VARCHAR(255) COLLATE utf8mb3_general_ci NOT NULL COMMENT '選択肢',
  valid TINYINT NOT NULL COMMENT '正誤判定'
);
-- usersテーブルの作成
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'ID',
  name VARCHAR(255) COLLATE utf8mb3_general_ci NOT NULL COMMENT '名前',
  email VARCHAR(255) COLLATE utf8mb3_general_ci NOT NULL COMMENT 'メールアドレス',
  password VARCHAR(255) COLLATE utf8mb3_general_ci NOT NULL NOT NULL COMMENT 'パスワード'
);
-- hoursテーブルの作成
DROP TABLE IF EXISTS hours;
CREATE TABLE hours (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'ID',
  date DATETIME COMMENT '学習日',
  date_id INT COMMENT '学習日のid',
  hours INT COMMENT '学習時間'
);
-- contentsテーブルの作成
DROP TABLE IF EXISTS contents;
CREATE TABLE contents (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'ID',
  content VARCHAR(255) COMMENT '学習コンテンツ'
);
-- langugesテーブルの作成
DROP TABLE IF EXISTS languages;
CREATE TABLE languages (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'ID',
  language VARCHAR(255) COMMENT '学習言語'
);

DROP TABLE IF EXISTS hoursContents;
CREATE TABLE hoursContents (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'ID',
  hours_id INT,
  contents_id INT
);
DROP TABLE IF EXISTS hoursLanguages;
CREATE TABLE hoursLanguages (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'ID',
  hours_id INT,
  languages_id INT
);


INSERT INTO `hours` VALUES
(1, '2022-12-20', 20221220, 3),
(2, '2022-12-21', 20221221, 4),
(3, '2022-12-22', 20221222, 6),
(4, '2022-12-26', 20221226, 7),
(5, '2022-12-27', 20221227, 4),
(6, '2022-12-28', 20221228, 2),
(7, '2022-12-29', 20221229, 8),
(8, '2022-12-27', 20221227, 3),
(9, '2022-12-27', 20221227, 2),
(10, '2022-12-30', 20221230, 10),
(11, '2022-12-31', 20221231, 7),
(12, '2022-01-01', 20220101, 4),
(13, '2022-01-02', 20220102, 9),
(14, '2022-11-10', 20221110, 4),
(15, '2022-11-23', 20221123, 5),
(16, '2022-12-31', 20221231, 8);

INSERT INTO `contents` VALUES
(1, "N予備校"),
(2, "ドットインストール"),
(3, "POSSE課題");

INSERT INTO `languages` VALUES
(1, "HTML"),
(2, "CSS"),
(3, "JavaScript"),
(4, "PHP"),
(5, "Laravel"),
(6, "SQL"),
(7, "SHELL"),
(8, "情報システム基礎情報（その他)");

INSERT INTO `hoursContents` VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 2, 2),
(5, 2, 3),
(6, 3, 1),
(7, 3, 2),
(8, 3, 3),
(9, 4, 1),
(10, 4, 2),
(11, 4, 3),
(12, 5, 1),
(13, 5, 2),
(14, 5, 3),
(15, 6, 1),
(16, 6, 2),
(17, 6, 3),
(18, 7, 1),
(19, 7, 2),
(20, 7, 3),
(21, 8, 1),
(22, 8, 2),
(23, 8, 3),
(24, 9, 1),
(25, 9, 2),
(26, 9, 3),
(27, 10, 1),
(28, 10, 2),
(29, 10, 3),
(30, 11, 1),
(31, 11, 2),
(32, 11, 3),
(33, 12, 1),
(34, 12, 2),
(35, 12, 3);

INSERT INTO `hoursLanguages` VALUES
(1, 7, 1),
(2, 7, 2),
(3, 7, 3),
(4, 7, 4),
(5, 7, 5),
(6, 7, 6),
(7, 7, 7),
(8, 7, 8),
(9, 10, 1),
(10, 10, 2),
(11, 10, 3),
(12, 10, 4),
(13, 10, 5),
(14, 10, 6),
(15, 10, 7),
(16, 10, 8),
(17, 11, 1),
(18, 11, 2),
(19, 11, 3),
(20, 11, 4),
(21, 11, 5),
(22, 11, 6),
(23, 11, 7),
(24, 11, 8),
(25, 12, 1),
(26, 12, 2),
(27, 12, 3),
(28, 12, 4),
(29, 12, 5),
(30, 12, 6),
(31, 12, 7),
(32, 12, 8),
(33, 13, 1),
(34, 13, 2),
(35, 13, 3),
(36, 13, 4),
(37, 13, 5),
(38, 13, 6),
(39, 13, 7),
(40, 13, 8);








