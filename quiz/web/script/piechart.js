"use strict";

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

  var chart = new ApexCharts(document.getElementById('learning_character_chart'), options);
  chart.render();
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

  var chart = new ApexCharts(document.getElementById('learning_content_chart'), options);
  chart.render();
}


