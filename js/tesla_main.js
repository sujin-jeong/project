
var win_h = $(window).height();
var swiperBegin = true;
// 스와이퍼가 시작하는게 true, 스와이퍼가 진행중이면 false

$(function(){

	



	
	setTimeout(function(){
	
		$('.parallax-bg').animate({width:'210%','margin-left':'-54.5%'},1000,function(){
			
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
								//중간이 되도록하는 margin-left의 값
								var beforeMarginLeft = $('.title_text2-1').css('margin-left');
								//첫번째 섹션에서 2번째 섹션으로 넘어오는 왔을 때 임의의 지점을 설정(화면 크기에 따라 44%가 오른쪽이 아닐수 있기 때문에 이부분에 대한 보완이 필요 )
								var dis = getStartPos(beforeMarginLeft,200,1)
								$('.title_text2-1').css('margin-left',dis)
								//임의의 지점에서 중간으로 오도록 애니메이션
								$('.title_text2-1').animate({'margin-left':beforeMarginLeft})
							}else if(swiper.previousIndex == 2 && !swiperBegin){
								$('.title_text2-1').addClass('display_none')
								$('.title_text2-2').removeClass('display_none')
								//중간이 되도록하는 margin-left의 값
								var beforeMarginLeft = $('.title_text2-2').css('margin-left');
								//세번째 섹션에서 2번째 섹션으로 넘어오는 왔을 때 임의의 지점을 설정(화면 크기에 따라 30%가 왼쪽이 아닐수 있기 때문에 이부분에 대한 보완이 필요 )
								var dis = getStartPos(beforeMarginLeft,200,-1)
								$('.title_text2-2').css('margin-left',dis)
								//임의의 지점에서 중간으로 오도록 애니메이션
								$('.title_text2-2').animate({'margin-left':beforeMarginLeft})
							}
						}
						else if(swiper.activeIndex == 0){
							$('.main_btn2 button:last-child').removeClass('display_none')
							$('.title_text1').removeClass('opacity-0')
							//중간이 되도록하는 left의 값(포지션이 absolute여서)
							var beforeMarginLeft = $('.title_text1').css('left');
							//2번째 섹션에서 1번째 섹션으로 넘어오는 왔을 때 임의의 지점을 설정(화면 크기에 따라 30%가 왼쪽이 아닐수 있기 때문에 이부분에 대한 보완이 필요 )
							var dis = getStartPos(beforeMarginLeft,200,-1)
							$('.title_text1').css('left',dis)
							//임의의 지점에서 중간으로 오도록 애니메이션
							$('.title_text1').animate({'left':beforeMarginLeft})
							$('.title_text2-1').addClass('opacity-0')
							$('.title_text2-1').removeClass('display_none')
							$('.title_text3').addClass('opacity-0')
							$('.title_text2-2').addClass('display_none')
						}
						else{
							$('.main_btn2 button:last-child').removeClass('display_none')
							$('.title_text3').removeClass('opacity-0')
							//중간이 되도록하는 right의 값(포지션이 absolute여서)
							var beforeMarginLeft = $('.title_text3').css('right');
							//
							var dis = getStartPos(beforeMarginLeft,200,-1)
							$('.title_text3').css('right',dis)
							////임의의 지점에서 중간으로 오도록 애니메이션
							$('.title_text3').animate({'right':beforeMarginLeft})
							$('.title_text2-1').addClass('opacity-0')
							$('.title_text2-1').removeClass('display_none')
							$('.title_text1').addClass('opacity-0')
							$('.title_text2-2').addClass('display_none')
						}
						swiperBegin = false;
					}
				},
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
//왼쪽에서 가운데 또는 오른쪽에서 가운데로 본내야 하는데 
//왼쪽이나 오른쪽 기준을 %로 하면 화면 비율에 따라 원하지 않은 결과가 나올 수 있음
//이를 방지하기 위에서 가운데를 기준(center)으로 원하는 거리px(distant)만큼 떨어진
//위치를 왼쪽이나 오른쪽(direction)을 지정해서 위치를 알려주는 함수
//direction이 1이면 오른쪽 -1이면 왼쪽
function getStartPos(center, distant, direction){
	if(center.indexOf("px")>-1){
		center = center.substr(0,center.length-2);
	}
	var result = parseInt(center);
	if(direction == 1){
		result = result + distant;
	}else if(direction == -1){
		result = result - distant;
	}
	return result + "px";
}
//화면 크기가 변할 경우 가운데 위치를 재조정
$(window).resize(function(){
	var center = window.innerWidth / 2 - 100;
	$('.title_text3').css('right',center+"px")
	$('.title_text1').css('left',center+"px")
	$('.title_text2-1').css('margin-left',center+"px")
	$('.title_text2-2').css('margin-left',center+"px")

	

	$('html').on('mousewheel DOMMouseScroll', function(e) {
		alert('마우스 휠')
	})
	$('html').on('touchmove',function(e){
		alert('마우스 터치');
	})


})
