"use strict";
// 棒グラフの作成
{
  var options = {
    series: [{
      name: 'hour',
      data: [3, 4, 5, 3, 0, 0, 4, 2, 2, 8, 8, 2, 2, 1, 7, 4, 4, 3, 3, 3, 2, 2, 6, 2, 2, 1, 1, 1, 7, 8],
    }
    ],
    chart: {
      type: 'bar',
      height: 420,
      toolbar:{
        show:false
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 5, 
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      axisTicks: {
        show:false //x軸の値区切り.-.
      },
      axisBorder:{
        show:false
      },
    
      labels: {
        formatter: function (value) {
          if (value !== undefined) {
            const categories = value.split(" ")
            const day = categories[0]
            return day % 2 == 1 ? "" : value;
          }
        },
        style: {
          colors:'#6ba0f0'
        },
      },
    },  
  
    grid: {
      yaxis: { 
          lines: {
              show: false
          },
      }, 
    },
  
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "h";
        },
        style: {
          colors: '#6ba0f0',
        }
      },
      type:'category',
      axisTicks: {
        show: false,
        width: 1,
      }
    },

    labels : ['1', '02', '3', '04', '5', '6', '7', '8', '9',   '10', '11', '12', '13', '14', '15', '16', '17', '18',   '19', '20', '21', '22', '23', '24', '25', '26', '27',   '28', '29', '30'],

    fill: {
        colors:["#1174BD"],
        type: 'gradient', 
        gradient: {
        type: 'vertical', //上垂直にグラデーション 
        gradientToColors: ['#3BCFFF'], 
      }
    },

    responsive: [
      {
      breakpoint: 480,
      options: {
          xaxis: {
              labels: {
                  offsetY: -7,
                  style: {
                      fontSize: '7.5px',
                  }
              }
          },
          chart: {
              height: 200,
          }
      },
      }
    ]
  };  

  var chart = new ApexCharts(document.querySelector("#hours_chart"), options);
  chart.render();
}

// 学習言語の円グラフの作成
{
  var options = {
    series: [42, 18, 10, 9, 9, 5, 4, 3],
    colors: [
      "#0544EC", "#0B71BD", "#22BCDE", "#3CCEFE", "#B19EF2", "#6E47EC", "#4B17EE", "#3005C0",
    ],
    legend: {
      show: false,
    },
    chart: {
    type: 'donut',
  },
  responsive: [{
    // breakpoint: 480,
    options: {
      plotOptions: {
        pie: {
          customScale: 0.8,
          donut: {
            size: '30%'
          },
        }
      },
      tooltips: {
        enabled: false
      },
      chart: {
        width: 100
      },
      responsive: false,
    }
  }],

  };

  var characterchart = new ApexCharts(document.getElementById('learning_character_chart'), options);
  characterchart.render();
}

// 学習コンテンツの円グラフの作成
{
  var options = {
    series: [42, 33, 25],
    colors: [
      "#0844EC", "#0F71BD", "#22BCDD"
    ],
    legend: {
      show: false
    },
    chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 100
      },
      responsive: false,
      legend: {
        display: false,
      }
    }
  }]
  };

  var contentchart = new ApexCharts(document.getElementById('learning_content_chart'), options);
  contentchart.render();
}


