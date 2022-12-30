"use strict"
// 今日の日付を持ってくる(年、月、日)
const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today. getDate();

// 取得した日付を挿入
let today_title = year + "/" + month + "/" + date
const hours_today_title = document.getElementById("today_title");
hours_today_title.insertAdjacentHTML("afterbegin", today_title);
// 取得した日付をname属性に挿入
  // 取得した日付を数値から、文字列に変換
  let character_year = String(year);
  let character_month = String(month);
  let character_date = String(date);
const today_date = character_year + character_month + character_date;
hours_today_title.setAttribute('name', today_date);



// モーダル

// headerの記録ボタンを押すとモーダルが出てくる
const headerRecordButton = document.getElementById('header_record_button');
const modal = document.getElementsByClassName('modal');
headerRecordButton.addEventListener("click", () => {
  modal[0].classList.toggle("modal_active");
});

// console.log(modal);

// footerの記録ボタンを押すとモーダルが出てくる
const footerRecoedButton = document.getElementById('footer_record_button');
footerRecoedButton.addEventListener("click", () => {
  modal[0].classList.toggle("modal_active")
})

// ボタンを押すと、モーダルが閉じる処理
const modalCloseButton = document.getElementsByClassName('modal_close');
// console.log(modalCloseButton)
modalCloseButton[0].addEventListener("click", () => {
  modal[0].classList.remove("modal_active");
})

// 学習日を押すとカレンダーが出てくる
// const learningDayDetail = document.getElementById('learning_day_detail');
// const calender = document.getElementsByClassName("calender");
// learningDayDetail.addEventListener("click", () => {
//   calender[0].classList.toggle("calender_active");
//   modal[0].classList.remove("modal_active");
// })

//ボタンを押すとカレンダーが閉じる
const calenderCloseButton = document.getElementById("calender_close");
calenderCloseButton.addEventListener("click", () => {
  calender[0].classList.remove("calender_active");
  modal[0].classList.toggle("modal_active");
})

// モーダル内のカレンダー押したら、その値をcheckbox内に返す
const inputDate = document.querySelector(`input[type="date"][name="learning_day_detail"]`);
const dateConfirm = document.getElementById('date_confirm');
inputDate.addEventListener('change', () => {
  document.getElementsByClassName('date_check')[0].innerHTML = inputDate.value;
  dateConfirm.setAttribute("value", inputDate.value)

  // date_idの中に入れるデータ
  console.log(inputDate.value.replace(/-/g, ''));
});



// モーダル内の学習コンテンツ,学習言語の項目を押したら青くなる処理
{
  // 日にち確定ボタン
  const dateCheck = document.getElementsByClassName('date_check');
  const modalDate = document.getElementsByClassName('modal_date');
  dateCheck[0].addEventListener("click", () => {
    dateCheck[0].classList.toggle("date_check_active");
    modalDate[0].classList.toggle("modal_date_active");
  })
  // N予備校
  const NcramSchool = document.getElementsByClassName('N_cramSchool');
  const modalN = document.getElementsByClassName('modal_N');
  NcramSchool[0].addEventListener("click", () => {
    NcramSchool[0].classList.toggle("N_cramSchool_active");
    modalN[0].classList.toggle("modal_N_active");
  })

  // ドットインストール
  const dotinstall = document.getElementsByClassName('dotinstall');
  const modalDot = document.getElementsByClassName('modal_dot');
  dotinstall[0].addEventListener("click", () => {
    dotinstall[0].classList.toggle("dotinstall_active");
    modalDot[0].classList.toggle("modal_dot_active");
  })

  // Posse課題
  const Posse = document.getElementsByClassName('posse');
  const modalPosse = document.getElementsByClassName('modal_Posse');
  Posse[0].addEventListener("click", () => {
    Posse[0].classList.toggle("posse_active");
    modalPosse[0].classList.toggle("modal_Posse_active");
  })

  // HTML
  const HTML = document.getElementsByClassName('html');
  const modalHtml = document.getElementsByClassName('modal_html');
  HTML[0].addEventListener("click", () => {
    HTML[0].classList.toggle("html_active");
    modalHtml[0].classList.toggle("modal_html_active");
  })

  // CSS 
  const CSS = document.getElementsByClassName('css');
  const modalcss = document.getElementsByClassName('modal_css');
  CSS[0].addEventListener("click", () => {
    CSS[0].classList.toggle("css_active");
    modalcss[0].classList.toggle("modal_css_active");
})

  // js
  const js = document.getElementsByClassName('js');
  const modalJs = document.getElementsByClassName('modal_js');
  js[0].addEventListener("click", () => {
    js[0].classList.toggle("js_active");
    modalJs[0].classList.toggle("modal_js_active");
  })

  // php
  const php = document.getElementsByClassName('php');
  const modalPhp = document.getElementsByClassName('modal_php');
  php[0].addEventListener("click", () => {
    php[0].classList.toggle("php_active");
    modalPhp[0].classList.toggle("modal_php_active");
  })

  // laravel
  const laravel = document.getElementsByClassName('laravel');
  const modalLaravel = document.getElementsByClassName('modal_laravel');
  laravel[0].addEventListener("click", () => {
    laravel[0].classList.toggle("laravel_active");
    modalLaravel[0].classList.toggle("modal_laravel_active");
  })

  // sql
  const sql = document.getElementsByClassName('sql');
  const modalSql = document.getElementsByClassName('modal_sql');
  sql[0].addEventListener("click", () => {
    sql[0].classList.toggle("sql_active");
    modalSql[0].classList.toggle("modal_sql_active");
  })

  // shell
  const shell = document.getElementsByClassName('shell');
  const modalShell = document.getElementsByClassName('modal_shell');
  shell[0].addEventListener("click", () => {
    shell[0].classList.toggle("shell_active");
    modalShell[0].classList.toggle("modal_shell_active");
  })

  // others
  const others = document.getElementsByClassName('others');
  const modalOthers = document.getElementsByClassName('modal_others');
  others[0].addEventListener("click", () => {
    others[0].classList.toggle("others_active");
    modalOthers[0].classList.toggle("modal_others_active");
  })
}

// モーダル内のtwitterにシェアボタンを押すと青くなる処理 
{
  const twitterButton = document.getElementsByClassName('modal_twitter_button');
  twitterButton[0].addEventListener("click", () => {
    twitterButton[0].classList.toggle("modal_twitter_button_active")
  })
}


// カレンダー
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
    // console.log(dates)

    const chartDate = [];
    chartDate.push({
      date: dates[1].date
    })
    // console.log(chartDate[0].date)

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
      const tbody = document.querySelector('tbody').appendChild(tr);
      // console.log(document.querySelector('tbody'));
      // console.log(tbody);
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
  for(let i = 0; i <= thisMonthDay.length - 1; i ++){
    thisMonthDay[i].addEventListener("click", () => {
      for(let j = 0; j <= thisMonthDay.length - 1; j++) {
          // カレンダー上で押せるのは１日だけにする
            thisMonthDay[j].classList.remove("thisMonth_day_active")
      }
      thisMonthDay[i].classList.toggle("thisMonth_day_active")
      let calenderTitle = document.getElementById('title');
      // console.log(calenderTitle.innerHTML)
      let clickDay = i + 1;

      let selectedDay = `${calenderTitle.innerHTML}/${clickDay}`
      console.log(selectedDay)
      // selectedDayにクリックした年、月、日が入ってる

      // 決定ボタンを押した時の処理
      const calenderDecide = document.getElementsByClassName("calender_decide")
      calenderDecide[0].addEventListener("click", () => {
        learningDayDetail.innerHTML = selectedDay
        calender[0].classList.remove("calender_active");
        modal[0].classList.add("modal_active");
      })
    })
  }
  // これで今月分は押したら青くなるようになった
};







