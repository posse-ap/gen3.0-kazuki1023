"use strict"
const headerRecordButton = document.getElementById('header_record_button');
const modal = document.getElementsByClassName('modal');
headerRecordButton.addEventListener("click", () => {
  modal[0].classList.toggle("modal_active");
});

const modalcloseButton = document.getElementsByClassName('modal_close');
modalcloseButton[0].addEventListener("click", () => {
  modal[0].classList.remove("modal_active");
})

