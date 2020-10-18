
$(function () {

  // ========
  // メニュー
  // ========
  $('.js-menu-outer-ul li').hover(function () {
    
    $('.js-menu:not(:animated)', this).slideDown();

  }, function () {
    $('.js-menu', this).slideUp();
  });



  // ========
  // スライダー
  // ========

  // // 現在表示されているスライドの番号
  var currentPicNum = 1;
  var $slider = $('.js-slider');
  var sliderTotalPic = $('.js-slider-pic').length;
  
  // li１枚１枚の横幅
  var slideWidth = $('.js-slider-pic').outerWidth();
  // 写真の横幅の合計＝トータルの枚数＊１枚の横幅 *2
  var sliderTotalLength = sliderTotalPic * slideWidth * 2;
  // スライドするときの速さ0.5秒
  var DURATION = 500;
  // スライドが切り替わるタイミング
  var AUTO = 10000;


  $slider.attr('style', 'width:' + sliderTotalLength + 'px');

  setInterval(function () {

    if(currentPicNum == sliderTotalPic){
      
      $slider.animate({
        left: '+=' + slideWidth * (sliderTotalPic -1) + 'px'
      }, 0);

      currentPicNum = 1;

    }else{
      
      $slider.animate({

        left: '-=' + slideWidth + 'px'

      }, DURATION);

      currentPicNum++;
      
    }
    
  }, AUTO);

});