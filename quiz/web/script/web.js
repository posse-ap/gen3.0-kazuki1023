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


// カレンダーのjs

{
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();


  // 先月
  const getCalenderHead= () => {
    const dates = [];
    const d = new Date(year, month, 0).getDate();
    const n = new Date(year, month, 1).getDay();

    for(let i = 0; i < n; i++){
      dates.unshift({
        date: d - i,
        isToday: false,
        isDisabled: true,
      })
    }
    return dates;
  }
  // 今月
  const getCalenderBody= () => {
    const dates = [];
    const lastDate = new Date(year, month + 1, 0).getDate();

    for(let i = 1; i <= lastDate; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: false,
      });
    };
    if(year === today.getFullYear() && month === today.getMonth()) {
      dates[today.getDate() - 1].isToday = true;
    }
  
    return dates;
  };
  // 来月
  const getCalenderTail = () => {
    const dates = [];
    const lastDay = new Date(year, month + 1, 0).getDay();
    for(let i = 1; i < 7 - lastDay; i++){
      dates.push({
        date: i,
        isToday: false,
        isDisabled: true,
      });
    };
    return dates;
  };
  const createCalender = () => {
    const tbody = document.querySelector('tbody');
    while(tbody.firstChild) {
      tbody.removeChild(tbody.firstChild)
    }

    // これでタイトルの年月を習得
    const title = `${year}/${String(month + 1).padStart(2, '0')}`;
    document.getElementById('title').textContent = title;

    // 先月、今月、来月の情報を取得
    const dates = [
      ...getCalenderHead(),
      ...getCalenderBody(),
      ...getCalenderTail(),
    ];

    const weeks = [];
    // weeksには先月、今月、来月の日にちが入っている
    const weekCount = dates.length / 7;
    // weekcount 6

    for(let i = 0; i < weekCount; i++){
      weeks.push(dates.splice(0, 7));
      
    }
    weeks.forEach(week => {
      const tr = document.createElement('tr');
      week.forEach(date => {
        const td = document.createElement('td');
        td.textContent = date.date;
        if(date.isToday) {
          td.classList.add('today');
        }
        if(date.isDisabled) {
          td.classList.add('disabled');
        }
        else {
          td.classList.add('thisMonth_day')
        }
        tr.appendChild(td);
      });
      document.querySelector('tbody').appendChild(tr)
    })
  } 
  createCalender()


  document.getElementById('prev').addEventListener("click", () => {
    month--;
    if (month < 0) {
      year--;
      month = 11;
    }
    createCalender()
  })
  document.getElementById('next').addEventListener("click", () => {
    month++;
    if (month > 11) {
      year++;
      month = 0;
    }
    createCalender()
  })
  

  // 今月の日付を押したら青くなる処理
  const thisMonthDay = document.getElementsByClassName('thisMonth_day')
  console.log(thisMonthDay[0])
  thisMonthDay[0].addEventListener("click", () => {
    thisMonthDay[0].classList.toggle("thisMonth_day_active")
  })
};
