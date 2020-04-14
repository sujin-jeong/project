
{
	class down{
		constructor(el){
			this.DOM = {};
			this.DOM.intro = document.querySelector(el+' .content--intro');
			this.DOM.shape = this.DOM.intro.querySelector('svg.shape');
			this.DOM.path = this.DOM.shape.querySelector('path');
			this.DOM.enter = document.querySelector(el+' .enter');
			this.DOM.close = document.querySelector(el+' .close');	
			this.DOM.slidenav = document.querySelector('.slidenav');	
			charming(this.DOM.enter);
			this.DOM.enterLetters = Array.from(this.DOM.enter.querySelectorAll('span'));		
			charming(this.DOM.close);
			this.DOM.closeLetters = Array.from(this.DOM.close.querySelectorAll('span'));
			this.DOM.shape.style.transformOrigin = '50% 0%';
			this.initEvents();
		}
		initEvents(){
			imagesLoaded(document.body, {background: true} , () => document.body.classList.remove('loading'));
			this.DOM.enter.addEventListener('click', () =>this.navigate());
			this.DOM.enter.addEventListener('touchenter', () =>this.navigate());
			this.DOM.enter.addEventListener('mouseenter', () =>this.enterHoverInFn());
			this.DOM.enter.addEventListener('mouseleave', () =>this.enterHoverOutFn());
			this.DOM.close.addEventListener('click', () =>this.navigate2());
			//this.DOM.close.addEventListener('click', (e) =>this.navigate2(e));
			// e.preventDefault() 사용할 때
			this.DOM.close.addEventListener('mouseenter', () =>this.closeHoverInFn());
			this.DOM.close.addEventListener('mouseleave', () =>this.closeHoverOutFn());
		};

		//open click
		navigate(){
			if ( this.loaded ) return;
			this.loaded = true;
			anime({
				targets: this.DOM.intro,
				duration: 1100,
				easing: 'easeInOutSine',
				translateY: '-200vh'
			});

			anime({
				targets: this.DOM.shape,
				scaleY: [
					{value:[0.8,1.8],duration: 550,easing: 'easeInQuad'},
					{value:1,duration: 550,easing: 'easeOutQuad'}
				]
			});

			anime({
				targets: this.DOM.path,
				duration: 1100,
				easing: 'easeOutQuad',
				d: this.DOM.path.getAttribute('pathdata:id')
			});
	

			anime({
				targets: this.DOM.slidenav,
				delay: 600,
				
				opacity: [
					{value: 0, duration: 150, easing: 'linear'}
				]
			});
			$('.slidenav').css('display','none')
			$('main').css('overflow', 'visible')
			$('.slideshow').css('overflow', 'visible')
			$('.slide').css('overflow', 'visible')

		
		}

		//open hover
		enterHoverInFn(){
			var enterLetters = this.DOM.enterLetters;
			this.isActive = true;
			this.enterTimeout = setTimeout(function(){
				
				anime.remove(enterLetters);
				anime({
					targets: enterLetters,
					delay: (t,i) => i*15,
					translateY: [
						{value: 10, duration: 150, easing: 'easeInQuad'},
						{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
					],
					opacity: [
						{value: 0, duration: 150, easing: 'linear'},
						{value: 1, duration: 150, easing: 'linear'}
					],
					color: {
						// value: '#ff963b',
						value:'#f1f1f1',
						duration: 1,
						delay: (t,i,l) => i*15+150
					}
				});
			},50);
		}
		enterHoverOutFn(){
			
			clearTimeout(this.enterTimeout);
			console.log(this.isActive)
			if( !this.isActive ) return;
			this.isActive = false;
			var enterLetters = this.DOM.enterLetters;
			anime.remove(enterLetters);
			anime({
				targets: enterLetters,
				delay: (t,i,l) => (l-i-1)*15,
				translateY: [
					{value: 10, duration: 150, easing: 'easeInQuad'},
					{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
				],
				opacity: [
					{value: 0, duration: 150, easing: 'linear'},
					{value: 1, duration: 150, easing: 'linear'}
				],
				color: {
					value: '#000',
					duration: 1,
					delay: (t,i,l) => (l-i-1)*15+150
				}
			});
		}


		//close click
		navigate2(){
			//navigate2(e){e.preventDefault() }: a태그 클릭했을 때 상단으로 가는 걸 막음
			if ( !this.loaded ) return;
			this.loaded = false;
			anime({
				targets: this.DOM.intro,
				duration: 1100,
				easing: 'easeInOutSine',
				translateY: '0vh'
			});
			$('.slidenav').css('display',"flex")
			$('main').css('overflow', 'hidden')
			$('.slideshow').css('overflow', 'hidden')
			$('.slide').css('overflow', 'hidden')
			anime({
				targets: this.DOM.slidenav,
				delay: 600,
				
				opacity: [
					{value: 1, duration: 150, easing: 'linear'}
				]
			});
			
		}

		//close hover
		closeHoverInFn(){
			var closeLetters = this.DOM.closeLetters;
			this.isActive = true;
			this.closeTimeout = setTimeout(function(){
				
				anime.remove(closeLetters);
				anime({
					targets: closeLetters,
					delay: (t,i) => i*15,
					translateY: [
						{value: 10, duration: 150, easing: 'easeInQuad'},
						{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
					],
					opacity: [
						{value: 0, duration: 150, easing: 'linear'},
						{value: 1, duration: 150, easing: 'linear'}
					],
					color: {

						value:'#666',
						duration: 1,
						delay: (t,i,l) => i*15+150
					}
				});
			},50);
		}
		closeHoverOutFn(){
			
			clearTimeout(this.closeTimeout);
			if( !this.isActive ) return;
			this.isActive = false;
			var closeLetters = this.DOM.closeLetters;
			anime.remove(closeLetters);
			anime({
				targets: closeLetters,
				delay: (t,i,l) => (l-i-1)*15,
				translateY: [
					{value: 10, duration: 150, easing: 'easeInQuad'},
					{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
				],
				opacity: [
					{value: 0, duration: 150, easing: 'linear'},
					{value: 1, duration: 150, easing: 'linear'}
				],
				color: {
					value: '#000',
					duration: 1,
					delay: (t,i,l) => (l-i-1)*15+150
				}
			});
		}
	}

	//grid click
	$('.grid_item').click(function(e){
		e.preventDefault();
		$('.img_modal').css('display',"flex")
		//img_modal 클릭했을 때 img 순서 찾아서 src 불러내기
		var imgSrc = $(this).find('img').attr('src');
		$('.img_modal img').attr('src', imgSrc)
		//a태그 막기
		return false;
	})

	//grid img close
	$('.img_close').click(function(){
		$('.img_modal').css('display','none')
	})
	//img_modal 오픈했을 때 스크롤 막기
	$('.img_modal').on('scroll touchmove mousewheel', function(event) {
		event.preventDefault();
		event.stopPropagation();
		return false;
	});
	
	$('.grid_item1').click(function(e){
		e.preventDefault();
		$('.img_modal1').css('display',"block")
		//img_modal 클릭했을 때 img 순서 찾아서 src 불러내기
		var imgSrc = $(this).find('img').attr('src');
		$('.img_modal1 img').attr('src', imgSrc)
		imgModal()
		//a태그 막기
		return false;
	})

	//grid img close
	$('.img_close').click(function(){
		$('.img_modal1').css('display','none')
	})
	//img_modal 오픈했을 때 스크롤 막기
	$('.img_modal1').on('scroll touchmove mousewheel', function(event) {
		event.preventDefault();
		event.stopPropagation();
		return false;
	});

	//slide
	var s1 = new down('.s1');
	var s2 = new down('.s2');
	var s3 = new down('.s3');
	var docWidth = window.innerWidth;
	$('.s2').attr('style','transform: translateX('+docWidth+'px);')
	$('.s3').attr('style','transform: translateX('+docWidth+'px);')
	$('.s2 .fixed2').on('scroll touchmove mousewheel', function(event) {
		drawGrid();
	});
	$('.s1 .fixed1').on('scroll touchmove mousewheel', function(event) {
		drawGrid1();
	});



	$('.content--intro1 .enter').click(function(){
		enterContent1(1100)
	})
	$('.xbtn1 .close').click(function(){
		$('.slides').removeAttr('style');
	})
	//page2 grid event
	$('.content--intro2 .enter').click(function(){
		drawGrid();
		drawGrid1();
		enterContent2(1100)
	})
	$('.xbtn2 .close').click(function(){
		$('.slides').removeAttr('style');
	})

	$('.content--intro3 .enter').click(function(){
		enterContent3(1100)
	})
	$('.xbtn3 .close').click(function(){
		$('.slides').removeAttr('style');
	})

}

function enterContent1(sec){
	if($('.s1.slide--current').length == 0)
		return 0;
	var s2fixed2Height = $('.fixed1 .content_sub').css('height');
	s2fixed2Height = s2fixed2Height.substr(0,s2fixed2Height.length-2);
	s2fixed2Height = parseInt(s2fixed2Height)+35;
	setTimeout(function(){
	$('.slides').css('height', s2fixed2Height+'px');
	$('.slides').css('overflow', 'hidden');
	},sec)
}

function enterContent2(sec){
	if($('.s2.slide--current').length == 0)
		return 0;
	var s2fixed2Height = $('.fixed2 .content_sub').css('height');
	s2fixed2Height = s2fixed2Height.substr(0,s2fixed2Height.length-2);
	s2fixed2Height = parseInt(s2fixed2Height)+35;
	setTimeout(function(){
	$('.slides').css('height', s2fixed2Height+'px');
	$('.slides').css('overflow', 'hidden');
	},sec)
}

function enterContent3(sec){
	if($('.s3.slide--current').length == 0)
		return 0;
	//height 가져옴
	var s2fixed2Height = $('.fixed3 .content_sub').css('height');
	//s2fixed2Height의 px 빼기 위해 length-2
	s2fixed2Height = s2fixed2Height.substr(0,s2fixed2Height.length-2);
	//문자열을 숫자로 변환 후 숫자 플러스
	s2fixed2Height = parseInt(s2fixed2Height)+35;
	setTimeout(function(){
			//height : s2fixed2Height 더하기 px
	$('.slides').css('height', s2fixed2Height+'px');
	$('.slides').css('overflow', 'hidden');
	//$('.content--intro3').css('height', window.innerHeight + 'px')
	},sec)
}
function imgModal(){
	//이미지 높이 가져오기
	var imgH = $('.img_modal1 img').css('height');
	//이미지 높이를 px 제거하여 숫자로
	imgH = parseInt(imgH.substr(0,imgH.length-2))
	//브라우저 높이 가져오기  
	var winH = window.innerHeight;
	var marginH = 0;
	//브라우저 높이가 이미지 높이보다 큰 경우
	if(winH > imgH){
		marginH = (winH - imgH)/2;
	}
	  $('.img_modal1 img').css('margin-top', marginH)
	//이미지 가로 가져오기
	var imgW = $('.img_modal1 img').css('width');
	//이미지 가로를 px 제거하여 숫자로
	imgW = parseInt(imgW.substr(0,imgW.length-2))
	//브라우저 가로 가져오기
	var winW = window.innerWidth;
	var marginW = 0;
	if(winW < imgW){
		$('.img_modal1 img').css('width', winW)
	}else{
		marginW = (winW-imgW)/2
	}
	$('.img_modal1 img').css('margin-left', marginW)
}

$(window).resize(function() { 
	drawGrid();;
	drawGrid1();;
	enterContent1(0)
	enterContent3(0)
	enterContent2(0)
	imgModal()
});