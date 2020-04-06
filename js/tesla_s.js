var swiper;
var interval;
var cnt = 1;
function newsMSecondRolling(height, selector){
  $(selector + ' .lastN').eq(0).animate({'margin-top':height},100,function(){
      $(selector + ' .lastN').eq(0).detach().appendTo(selector + ' .secondT_last')
      .removeAttr('style')
      cnt++;
      if(cnt%10 == 0){
        newsSecondRolling(selector);
      }
      if(cnt <= 26){
        newsMSecondRolling(height,selector);
      }
  })
}
function newsSecondRolling(selector){
  $(selector + ' .firstN').eq(0).animate({'margin-top':'-28px'},300,function(){
      $(selector +  ' .firstN').eq(0).detach().appendTo(selector + ' .secondT_first')
      .removeAttr('style')
    })
}
function initSecond(selector){
  var t = 1;
  for( ;$.trim($(selector + ' .firstN').eq(0).text()) != '0' ;){
    $(selector + ' .firstN').eq(0).detach().appendTo(selector + ' .secondT_first')
    .removeAttr('style')
  }
}
function initMSecond(selector){
  var t = 1;
  for( ;$.trim($(selector + ' .lastN').eq(0).text()) != '0' ;){
    $(selector + ' .lastN').eq(0).detach().appendTo(selector + ' .secondT_last')
      .removeAttr('style')
  }
}
function createSwiper(){
  swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        if(index == 7 || index == 5 || index == 2 || index == 3)
          return '<span class="pagination-bar bg-dark ' + className + '"><sapn class="p-title">' + arr[index] + '</span></span>';
        else
          return '<span class="pagination-bar ' + className + '"><sapn class="p-title">' + arr[index] + '</span></span>';
      }


    },
    on : {
      slideChange : function(){
        
        //main1
        $('.speedometer_active').removeClass('active')
        $('.reset').removeAttr('style')
        $('.main1_top').animate({'margin-top':'-53px','opacity':'1'},1000)
        $('.main1S .speedometer_active').addClass('active')
        $('.main1_sub .second_container').animate({'opacity':'1'},600)
        $('.main1_sub .loadspace_container').animate({'opacity':'1'},1300)
        $('.main1_sub .km_container').animate({'opacity':'1'},1900)
        $('.main1_order').animate({'opacity':'1'},2600)
        var height = '-29px';
        cnt=27;
        initMSecond('.main1');
        initSecond('.main1');
        initMSecond('.main3');
        initSecond('.main3');
        $('header a').hover(function(){
          $(this).addClass('opacity-50').siblings().removeClass('opacity-50')
        })
        $('.mian1_underBtn').click(function(){
          swiper.slideTo(1, 0);
        })
        
        

        setTimeout(function(){
          //white_sideBox
          $('.swiper-slide').eq(swiper.activeIndex).find('.fff_title').animate({'margin-top':'-20px','opacity':'1'},800)
          $('.swiper-slide').eq(swiper.activeIndex).find('.fff_sub').animate({'margin-top':'-40px','opacity':'1'},800)
          $('.swiper-slide').eq(swiper.activeIndex).find('.plusbtn button').animate({'margin-top':'-40px','opacity':'1'},800)
          //main2
          $('.swiper-slide').eq(swiper.activeIndex).find('.annotation .circle').animate({'opacity':'1'},500)
          $('.swiper-slide').eq(swiper.activeIndex).find('.annotation span').animate({'margin-top':'-30px','opacity':'1'},800)
          $('.swiper-slide').eq(swiper.activeIndex).find('.collision .bar').animate({'height':'79%','opacity':'1'},800)
          $('.swiper-slide').eq(swiper.activeIndex).find('.protection .bar').animate({'height':'100%','opacity':'1'},800)
          $('.swiper-slide').eq(swiper.activeIndex).find('.danger .bar').animate({'height':'79%','opacity':'1'},800)
          //3등분 박스
          $('.swiper-slide').eq(swiper.activeIndex).find('.container1').animate({'margin-top':'-20px','opacity':'1'},400)
          $('.swiper-slide').eq(swiper.activeIndex).find('.container2').animate({'margin-top':'-20px','opacity':'1'},700)
          $('.swiper-slide').eq(swiper.activeIndex).find('.container3').animate({'margin-top':'-20px','opacity':'1'},1100)
          //main3
          $('.swiper-slide').eq(swiper.activeIndex).find('.main3T .speedometer_active').addClass('active')
          $('.swiper-slide').eq(swiper.activeIndex).find('.fff_botS').animate({'margin-top':'-50px','opacity':'1'},800)
          //white_botBox
          $('.swiper-slide').eq(swiper.activeIndex).find('.fff_titleB').animate({'margin-top':'-20px','opacity':'1'},800)
          //main8
          $('.swiper-slide').eq(swiper.activeIndex).find('.main8_title').animate({'margin-top':'-20px','opacity':'1'},400)
          $('.swiper-slide').eq(swiper.activeIndex).find('.main8_btnBox').animate({'margin-top':'-20px','opacity':'1'},700)
          $('.swiper-slide').eq(swiper.activeIndex).find('.main8_sub').animate({'margin-top':'-20px','opacity':'1'},700)
          $('.swiper-slide').eq(swiper.activeIndex).find('.main8_extendBtn').animate({'margin-bottom':'20px','opacity':'1'},1100)
          $('.swiper-slide').eq(swiper.activeIndex).find('.main8_extendText').animate({'margin-bottom':'20px','opacity':'1'},1100)
          //3등분 박스_vertical
          $('.swiper-slide').eq(swiper.activeIndex).find('.ver_container1').animate({'margin-top':'-20px','opacity':'1'},400)
          $('.swiper-slide').eq(swiper.activeIndex).find('.ver_container2').animate({'margin-top':'-20px','opacity':'1'},700)
          $('.swiper-slide').eq(swiper.activeIndex).find('.ver_container3').animate({'margin-top':'-20px','opacity':'1'},1100)

        },600)
        
        
        if(swiper.activeIndex == 0){
          $('.logob').addClass('display_none')
          $('.logow').removeClass('display_none')
          $('.header_none').removeClass('display_none')
          cnt=1;
          newsMSecondRolling(height,'.main1')
        }else if(swiper.activeIndex == 2){
          cnt=1;
          newsMSecondRolling(height,'.main3')
          $('.header_none').addClass('display_none')
          $('.logob').removeClass('display_none')
          $('.logow').addClass('display_none')
        }else if(swiper.activeIndex == 7 || swiper.activeIndex == 5){
          $('.header_none').addClass('display_none')
          $('.logob').addClass('display_none')
          $('.logow').removeClass('display_none')
        }
        else{
          $('.logob').removeClass('display_none')
          $('.logow').addClass('display_none')
          $('.header_none').addClass('display_none')
        }
        
      }
    }
    
});
$('.swiper-pagination-bullet').hover(function(){
  $(this).find('.p-title').toggleClass('hover')
})
$('.swiper-pagination-bullet').click(function(){
  $('.p-title').removeClass('weight');
  $(this).find('.p-title').addClass('weight');
  if($(this).hasClass('bg-dark')){
    $('.p-title').addClass('white');  
  }
  else{
    $('.p-title').removeClass('white');  
  }
})
}

//마우스 휠
function mouseWheel(elm){
  $(elm).each(function (index) {
    // 개별적으로 Wheel 이벤트 적용
    $(this).on("mousewheel DOMMouseScroll", function (e) {
      
      //진행중인 이벤트 중지
      e.preventDefault();
      //마우스 휠 방향을 구하는 부분
      var delta = 0;
      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } 
      else if (event.detail)
        delta = -event.detail / 3;
      var moveTop = $(window).scrollTop(); 
      
      //moveTop : 어디로 가야하는지 // 현재 박스의 상단으로 이동
      var elmSelecter = $(elm).eq(index);
      // 마우스휠을 위에서 아래로
      if (delta < 0) {
        //다음요소가 있으면(마지막이 아니면) 다음 컨텐츠의 제일 상단 스크롤 좌표 계산
        //if ($(elmSelecter).next() != undefined) {
        if ($(elm).length != index+1) {
          try{
            moveTop = $(elmSelecter).next().offset().top;
            swiper.slideTo(index+1, 600);
          }catch(e){}
        }
      // 마우스휠을 아래에서 위로
      } else {
        if ($(elmSelecter).prev() != undefined) {
          try{
            moveTop = $(elmSelecter).prev().offset().top;
            swiper.slideTo(index-1, 600);
          }catch(e){}
          //try - catch : 문제가 생겨도 실행하게 함
        }
          
      }
      //
      
      // 화면 이동 0.8초(800)
      // $("html,body").stop().animate({
      //     scrollTop: moveTop + 'px'
      //     //scrollTop을 계산한 px로 넘기기
      // }, {
      //     duration: 400, complete: function () {}
      // });
    });
  });
}


$(function(){
    createSwiper()
    // main1
    $('.main1S .speedometer_active').addClass('active')
    $('.main1_top').animate({'margin-top':'-73px','opacity':'1'},1300)
    $('.main1_sub .second_container').animate({'opacity':'1'},600)
    $('.main1_sub .loadspace_container').animate({'opacity':'1'},1300)
    $('.main1_sub .km_container').animate({'opacity':'1'},1900)
    $('.main1_order').animate({'opacity':'1'},2600)
    var height = '-29px'
    newsMSecondRolling(height,'.main1')
    $('.mian1_underBtn').click(function(){
      swiper.slideTo(1, 0);
    })
    $('header a').hover(function(){
      $(this).addClass('opacity-50').parent().siblings().find('a').removeClass('opacity-50')
    },function(){
      $(this).removeClass('opacity-50')
    })

    //main6
    $('.plusbtn button').hover(function(){
      $(this).toggleClass('bg_black')
      $(this).children('.plus_black').toggleClass('bg_white')
    })



    //main8
    $('.btn8 button').click(function(){
      $(this).addClass('opacity').parent().siblings().find('button').removeClass('opacity')
    })
    $('.main8_performance').click(function(){
      $('.sub_longrange').addClass('display_none')
      $('.sub_performance').removeClass('display_none')
    })
    $('.main8_longrange').click(function(){
      $('.sub_longrange').removeClass('display_none')
      $('.sub_performance').addClass('display_none')
    })
    $('.main8_extendBtn').hover(function(){
      $(this).toggleClass('bg_white')
      $(this).children('.main8_plus').toggleClass('bg_black')
    })
    $('.main8_extendBtn').click(function(){
      $('.swiper-slide').addClass('display_none');
      $(this).parents('.swiper-slide').removeClass('display_none');
      $(this).parents('.swiper-container').addClass('open');
      $(this).parents('body').addClass('open');
      $('.swiper-pagination').addClass('open');
      $('.pagination-bar.swiper-pagination-bullet').addClass('open');
      $('.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet.pagination-bar').not(7).animate({'height':'16px'},100)
      $('.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet.pagination-bar').eq(7).animate({'height':'46px'},100)
      swiper.destroy();
      $('html, body').animate({scrollTop: '800'}, 1000);
      $('.header_none').addClass('display_none')
			$('.main8_bot').removeClass('display_none')
			$('.main8_closeBtn').removeClass('display_none')
     
    })
    $('.main8_closeBtn').click(function(){
      $('.swiper-slide').removeClass('display_none');
      $('.swiper-container').removeClass('open');
      $('body').removeClass('open');
      $('.swiper-pagination').removeClass('open');
      $('.pagination-bar.swiper-pagination-bullet').removeClass('open');
      $('.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet.pagination-bar').animate({'height':'26px'},100)
      createSwiper();
      swiper.slideTo(7, 0);
      $('.p-title').addClass('white');  
			$('.main8_bot').addClass('display_none')
			$('.main8_closeBtn').addClass('display_none')
    })



    var elm = ".swiper-slide";
    mouseWheel(elm);
})





var arr = ['MODEL S','안전','PERFORMANCE','주행 가능 거리','오토파일럿','인테리어','외부','사양','주문하기']





 // $('.firstN').eq(0).animate({'margin-top':'-28px'},1000,function(){
    //   $('.firstN').eq(0).detach().appendTo('.firstN')
    //   .removeAttr('style')
    //   $('.firstN').eq(0).animate({'margin-top':'-28px'},1000,function(){
    //     $('.firstN').eq(0).detach().appendTo('.firstN')
    //     .removeAttr('style')
    //   })
    // })

    //$('.main8_extendBtn').click(function(){
      //   $('.main8_bot').removeClass('display_none')
      //   $('.main8_bot').addClass('block')
      //   $(this).removeClass('display_none').parents('.swiper-slide').siblings().addClass('display_none')
      //   $('.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet.pagination-bar').animate({'height':'16px'},100)
      //   swiper.slideTo(0, 0);
      //   $('.header_none').addClass('display_none')
      // })