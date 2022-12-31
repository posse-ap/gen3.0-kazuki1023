"use strict";


// 記録投稿ボタン押されてからはformが送られるようにする
const form_record = document.getElementById("form_record");
const modal = document.getElementsByClassName('modal');
const modalRecord = document.getElementsByClassName("modal_record");
// modalRecord[0].addEventListener("click", () => {
//   console.log("そうしんしたよ")
// })

// 

// 記録ボタンを押すとローディング画面に行く
{
  const modalRecord = document.getElementsByClassName("modal_record")
  const loading = document.getElementsByClassName('loading');
  let timerid
  const finish = document.getElementsByClassName("finish")

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
  }