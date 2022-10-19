"use strict"
// 記録ボタンを押すとモーダルが出てくる
const headerRecordButton = document.getElementById('header_record_button');
const modal = document.getElementsByClassName('modal');
headerRecordButton.addEventListener("click", () => {
  modal[0].classList.toggle("modal_active");
});

// ボタンを押すと、モーダルが閉じる処理
const modalCloseButton = document.getElementsByClassName('modal_close');
modalCloseButton[0].addEventListener("click", () => {
  modal[0].classList.remove("modal_active");
})

// 学習日を押すとカレンダーが出てくる
const learningDayDetail = document.getElementById('learning_day_detail');
const calender = document.getElementsByClassName("calender");
learningDayDetail.addEventListener("click", () => {
  calender[0].classList.toggle("calender_active");
  modal[0].classList.remove("modal_active");
})

//ボタンを押すとカレンダーが閉じる
const calenderCloseButton = document.getElementById("calender_close");
calenderCloseButton.addEventListener("click", () => {
  calender[0].classList.remove("calender_active");
  modal[0].classList.toggle("modal_active");
})