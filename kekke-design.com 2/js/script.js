
//ローディング画面の処理
var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
    start:'manual',//自動再生をせずスタートをマニュアルに
    type: 'scenario-sync',// アニメーションのタイプを設定
    duration: 150,//アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false,//パスが更新された場合に再レンダリングさせない
    animTimingFunction:Vivus.EASE,//動きの加速減速設定
}
);

$(window).on('load',function(){
    $("#splash").delay(4000).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェイドアウト
	$("#splash_logo").delay(4000).fadeOut('slow');//ロゴを1.5秒（1500ms）待機してからフェイドアウト
        stroke.play();//SVGアニメーションの実行
});


// mute on and off
$(function () {
    var video = $("video").get(0);
    $(".music").on("click",function(){
     if(video.muted){
      video.muted = false;
     }else{
      video.muted = true;
     }
 });
});

$(function(){
    $(".play-btn").click(function(){
        $('.play-btn').toggleClass("on");
        if($('.play-btn').hasClass("on")){
         $('.play-btn img').attr('src','images/mute-icon.png');
        }else{
         $('.play-btn img').attr('src','images/play-icon.png');
        }
      return false;
    });
  });


// バーガーボタンクリック時

$(function(){
$(".burger-btn").click(function(){
    $('.bar').toggleClass("active");
    $('.burger-menu').fadeToggle(1000);
  });
});

// バーガーメニュークリック時
$(function(){
  $(".burger-item").click(function(){
      $('.bar').removeClass("active");
      $('.burger-menu').fadeOut(1000);
    });
  });


// 画面がリサイズされた時、バーガーメニューを消す処理
  $(window).resize(function(event){
    var width = $(window).width();
    // 条件を設定する
    if (width >= 768) {
      $('.bar').removeClass("active");
      $('.burger-menu').fadeOut(1000);
    }
  });

// アコーディオンメニューの処理

$(function(){
  // アコーディオンメニューのラベルがクリックされた場合
  $(".ac-menu").on("click", function() {
    // labelクラスの次の要素（detailクラス）の表示・非表示を切り替える
    $(this).next().slideToggle();
    // labelクラスにopenクラスを追加したり削除したりする
  });
});


// worksのモーダルウィンドウ

// ウェブデザイン用

$(function () {
  $('.openModal').click(function(){
    var btnIndex = $(this).index();
      //何番目のモーダルボタンかを取得
    $('.modalArea').eq(btnIndex).fadeIn();
    $('html, body').css('overflow', 'hidden');
  });

  $('.closeModal,.modalBg').click(function(){
    $('.modalArea').fadeOut();
    $('html, body').removeAttr('style');
  });
});




// バナーデザイン用
$(function () {
  $('.openModal2').click(function(){
    var btnIndex = $(this).index();
      //何番目のモーダルボタンかを取得
    $('.modalArea2').eq(btnIndex).fadeIn();
    $('html, body').css('overflow', 'hidden');
  });

  $('.closeModal,.modalBg').click(function(){
    $('.modalArea2').fadeOut();
    $('html, body').removeAttr('style');
  });
});


// ロゴデザイン用
$(function () {
  $('.openModal3').click(function(){
    var btnIndex = $(this).index();
      //何番目のモーダルボタンかを取得
    $('.modalArea3').eq(btnIndex).fadeIn();
    $('html, body').css('overflow', 'hidden');
  });

  $('.closeModal,.modalBg').click(function(){
    $('.modalArea3').fadeOut();
    $('html, body').removeAttr('style');
  });
});

// ボートのアニメーションの挙動

$(document).ready(function(){
  $('.demo_wrap').on('animationend', function () {
      if ($(this).attr('data-order') === 'left') {
          $(this).attr('data-order', 'right');
      } else {
          $(this).attr('data-order', 'left');
      }
  });
});




var scrollAnimationClass = 'sa';
var scrollAnimationShowClass = 'show';
var triggerMarginDefault = 300;
 
var scrollAnimationElm = document.querySelectorAll('.' + scrollAnimationClass);
var scrollAnimationFunc = function() {
  var dataMargin = scrollAnimationClass + '_margin';
  var dataTrigger = scrollAnimationClass + '_trigger';
  var dataDelay = scrollAnimationClass + '_delay';
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = triggerMarginDefault;
    var elm = scrollAnimationElm[i];
    var showPos = 0;
    if(elm.dataset[dataMargin] != null) {
      triggerMargin = parseInt(elm.dataset[dataMargin]);
    }
    if(elm.dataset[dataTrigger]) {
      showPos = document.querySelector(elm.dataset[dataTrigger]).getBoundingClientRect().top + triggerMargin;
    } else {
      showPos = elm.getBoundingClientRect().top + triggerMargin;
    }
    if (window.innerHeight > showPos) {
      var delay = (elm.dataset[dataDelay])? elm.dataset[dataDelay] : 0;
      setTimeout(function(index) {
        scrollAnimationElm[index].classList.add('show');
      }.bind(null, i), delay);
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);

