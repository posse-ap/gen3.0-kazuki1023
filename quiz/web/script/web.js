"use strict"

// モーダル

// headerの記録ボタンを押すとモーダルが出てくる
const headerRecordButton = document.getElementById('header_record_button');
const modal = document.getElementsByClassName('modal');
headerRecordButton.addEventListener("click", () => {
  modal[0].classList.toggle("modal_active");
});

console.log(modal);

// footerの記録ボタンを押すとモーダルが出てくる
const footerRecoedButton = document.getElementById('footer_record_button');
footerRecoedButton.addEventListener("click", () => {
  modal[0].classList.toggle("modal_active")
})

// ボタンを押すと、モーダルが閉じる処理
const modalCloseButton = document.getElementsByClassName('modal_close');
console.log(modalCloseButton)
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

// モーダル内の学習コンテンツ,学習言語の項目を押したら青くなる処理
{
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
      console.log(document.querySelector('tbody'));
      console.log(tbody);
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

// 記録ボタンを押すとローディング画面に行く
{
const modalRecord = document.getElementsByClassName("modal_record")
const loading = document.getElementsByClassName('loading');
let timerid
const finish = document.getElementsByClassName("finish")
modalRecord[0].addEventListener("click", () => {

  loading[0].classList.add("loading_active");
  modal[0].classList.remove("modal_active");
  // https://www.javadrive.jp/javascript/webpage/index4.html#section1
  // ここから、記録ボタンを押してから3秒後に記録完了のモーダルが出てくるようにする
  timerid = window.setTimeout(function(){
    // textareaに書かれた内容をtwitterに反映する
    let twitterShare = document.getElementById('twitter_share');
    if(twitterShare.classList.contains('modal_twitter_button_active') === true) {
      const textarea = document.getElementById("comment_title_detail").value
      window.open(`https://twitter.com/intent/tweet?text=${textarea}`)
    };
    loading[0].classList.remove("loading_active");
    finish[0].classList.add("finish_active");
}, 3000);
  // 記録完了ボタンのばつ印を押すとモーダルが閉じるようにする.
  // 閉じるボタン
  const finishClose = document.getElementsByClassName("finish_close");
  finishClose[0].addEventListener("click", () => {
    finish[0].classList.remove("finish_active")
       // ローディング中の3秒の間にばつ印が押されると、記録完了のモーダルが出てこないようにする
  window.clearTimeout(timerid);
  console.log('キャンセルされました')
  })
})


}


// 棒グラフの作成
{
  const ctx = document.getElementById("hours_chart").getContext('2d');
  const houtsChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels:  ["", "2", "", "4", "", "6", "", "8", "", "10", "", "12", "","14", "", "16", "","18", "","20", "", "22", "", "24", "","26", "", "28", "", "30"],
    datasets: [
        {
          label: "学習時間",
          data: [3,4,5,3,0,0,4,2,2,8,8,2,2,1,7,4,4,3,3,3,2,2,6,2,2,1,1,1,7,8],
          borderColor: "linear-gradient(blue, rgb(75, 129, 210))",
          backgroundColor: "blue",
          borderWidth: 2,
        }
    ],
  }, 
  options: {
    responsive: false,
    legend: {
        display: false
    },
    maintainAspectRatio: false,
    tooltips: {
      enabled: false
    },
    scales: {                          // 軸設定
        xAxes: [                           // Ｘ軸設定
            {
                scaleLabel: {                 // 軸ラベル
                    display: false,                // 表示設定
                    labelString: '横軸ラベル',    // ラベル
                    fontColor: "white",             // 文字の色
                    fontSize: 16                  // フォントサイズ
                },
                gridLines: {                   // 補助線
                  display: false,
                  color: "rgba(255, 0, 0, 0.2)", // 補助線の色
                },
                ticks: {                      // 目盛り
                    fontColor: "rgb(75, 129, 210)",             // 目盛りの色
                    fontSize: 14                  // フォントサイズ
                }
            }
        ],
        yAxes: [                           // Ｙ軸設定
            {
                scaleLabel: {                  // 軸ラベル
                    display: false,                 // 表示の有無
                    labelString: '縦軸ラベル',     // ラベル
                    fontFamily: "sans-serif",
                    fontColor: "blue",             // 文字の色
                    fontFamily: "sans-serif",
                    fontSize: 16                   // フォントサイズ
                },
                gridLines: {                   // 補助線
                    display: true,
                    color: "white", // 補助線の色
                    zeroLineColor: "white"         // y=0（Ｘ軸の色）
                },
                ticks: {                       // 目盛り
                    min: 0,                        // 最小値
                    max: 8,                       // 最大値
                    stepSize: 2,                   // 軸間隔
                    fontColor: "blue",             // 目盛りの色
                    fontSize: 10,                   // フォントサイズ
                    callback: function(value, index, values){
                      return  value +  'h'
                    },                               // y軸に"h"つけた
                }
            }
        ]
    }
  }
})
}

// 学習言語の円グラフの作成
// {
//   const ctx = document.getElementById("learning_character_chart").getContext('2d');
//   let characterChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//       labels: ["42%", "18%", "10%", "", "", "", "", ""],
//       datasets: [{
//         data: [
//           30, 20, 10, 5, 5, 20, 20, 10
//         ],
//         backgroundColor: ["#0445EB", "#347EC2", "#20BDDD", "#3DCDFE", "#B29EF3", "#6D46EC", "	#4A17EF", "	#3205C0"],
//       }]
//     },
//     options: {
//       responsive: false,
//       legend: {
//         display: false,
//       }
//     }
//   });
//   characterChart.canvas.parentNode.style.height = '500px';
// }



