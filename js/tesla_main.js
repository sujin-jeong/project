var win_h = $(window).height();
var swiperBegin = true;
// 스와이퍼가 시작하는게 true, 스와이퍼가 진행중이면 false

$(function(){

	



	
	setTimeout(function(){
	
		$('.parallax-bg').animate({width:'210%','margin-left':'-865px'},1000,function(){
			
			var swiper = new Swiper('.swiper-container', {
				speed: 600,
				parallax: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				on : {
					
					slideChange : function(){
						$('.reset').removeAttr('style')
						
						if(swiper.activeIndex == 1){
							$('.main_btn2 button:last-child').addClass('display_none')
							$('.title_text1').addClass('opacity-0')
							$('.title_text3').addClass('opacity-0')
							$('.title_text2-1').removeClass('opacity-0')
							if(swiper.previousIndex == 0 && !swiperBegin){
								$('.title_text2-1 .title_text').addClass('right')
								$('.title_text2-1').animate({'margin-left':'470px'})
							}else if(swiper.previousIndex == 2 && !swiperBegin){
								$('.title_text2-1').addClass('display_none')
								$('.title_text2-2').removeClass('display_none')
								$('.title_text2-2').animate({'margin-left':'590px'})
							}
						}
						else if(swiper.activeIndex == 0){
							$('.main_btn2 button:last-child').removeClass('display_none')
							$('.title_text1').removeClass('opacity-0')
							$('.title_text1').animate({'margin-left':'110px'})
							$('.title_text2-1').addClass('opacity-0')
							$('.title_text2-1').removeClass('display_none')
							$('.title_text3').addClass('opacity-0')
							$('.title_text2-2').addClass('display_none')
						}
						else{
							$('.main_btn2 button:last-child').removeClass('display_none')
							$('.title_text3').removeClass('opacity-0')
							$('.title_text3').animate({'margin-right':'110px'})
							$('.title_text2-1').addClass('opacity-0')
							$('.title_text2-1').removeClass('display_none')
							$('.title_text1').addClass('opacity-0')
							$('.title_text2-2').addClass('display_none')
						}
						swiperBegin = false;
					}
				}
			});
			$('.parallax-bg').css('margin-left','0px')
			swiper.slideTo(1,0)
			$('.main1_text').animate({'opacity':'1'},300)
		})
		
	},500)

	$('header a').click(function(){
		$(this).addClass('opacity-50').parent().siblings().find('a').removeClass('opacity-50')
	})
	$('header a').hover(function(){
		$(this).addClass('opacity-50').parent().siblings().find('a').removeClass('opacity-50')
	},function(){
		$(this).removeClass('opacity-50')
	})
	$('.navLeft_tap').click(function(){
		$(this).addClass('active').parent().siblings().find('.navLeft_tap').removeClass('active')
	})
	$('.navLeft_tap').hover(function(){
		$(this).find('.navLeft_label').removeClass('display_none').parents('.navLeft_li').siblings().find('.navLeft_label').addClass('display_none')
	},function(){
		$(this).find('.navLeft_label').addClass('display_none')
	})




	// 스크롤 섹션이동
	$('.section').each(function(index){
		$(this).attr("data-index",win_h * index);
	})
	$('.section').on("mousewheel",function(e){
		var sectionPos = parseInt($(this).attr("data-index"));
		var pos;
		if(e.originalEvent.wheelDelta >= 0){
			$("html,body").stop().animate({scrollTop:sectionPos - win_h});
			pos=getPosNow(sectionPos - win_h);
			if(pos!=-1)
				$('.navLeft_tap').eq(pos).click();
			return false;
		}
		else if(e.originalEvent.wheelDelta < 0){
			$("html,body").stop().animate({scrollTop:sectionPos + win_h});
			//navLeft_tap을 클릭하면 sectionPos + win_h 번째로 넘어감
			pos=getPosNow(sectionPos + win_h);
			if(pos!=-1)
				$('.navLeft_tap').eq(pos).click();
			return false;
		}
	})
	$('.navLeft_tap').each(function(index){
		$(this).attr("data-index",win_h * index);
	})
	$('.navLeft_tap').click(function(){
		var pos = $(this).attr("data-index");
		$("html,body").stop().animate({scrollTop:pos});
	})
	$('.navLeft_tap').eq(0).click();



})

// navLeft 와 section의 data-index를 맞춘 후 pos를 문자열로 가져옴
function getPosNow(sectionPos){
	var pos = -1;
	$('.navLeft_tap').each(function(index){
		if($(this).attr("data-index") == sectionPos){
			pos = index;
		}
	})
	return parseInt(pos);
}


