$(function(){
	setInterval(function(){
		$('.swiper_slide').first().animate({'margin-left':'-100vw'},1000,function(){
			$(this).detach().appendTo('.swiper_wrap').removeAttr('style')
		})
	},3000)
	
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 5,
		spaceBetween: 30,
		slidesPerGroup: 5,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
				spaceBetween: 10,
				slidesPerGroup: 2,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 10,
				slidesPerGroup: 2,
			},
			840: {
				slidesPerView: 3,
				spaceBetween: 20,
				slidesPerGroup: 3,
			},
			1150: {
				slidesPerView: 4,
				spaceBetween: 30,
				slidesPerGroup: 4,
			},
			1300: {
				slidesPerView: 4,
				spaceBetween: 30,
				slidesPerGroup: 4,
			}
		}
	});
	$('.nav_item').click(function(){
		$(this).addClass('color333').parent().siblings().find('a').removeClass('color333')
	})


	// $('.img-holder').imageScroll({
	// 	container: $('.container_3')

	// });


	$('.botB_infoT').click(function(){
		$('.botB_infoT').removeClass('active');
		$(this).addClass('active')
		$('.botB_infoT').each(function(){
			if($(this).hasClass('active')){
				$(this).next().slideToggle('0.5s')
			}else{
				$(this).next().slideUp('0.5s')
			}
		})
	})
	$('.subPage_item').click(function(){
		$('.subPage_item').find('.subPage_menu').removeClass('subPage_menu_click')
		$(this).find('.subPage_menu').toggleClass('subPage_menu_click')
		$('.intro').removeClass('subPage_menu_click')
	})

	$('.botM_text').focus(function(){
		if($(this).text() == '리뷰를 작성해주세요'){
			$(this).text('');
		}
	})
	$('.botM_text').blur(function(){
		if($(this).text() == ''){
			$(this).text('리뷰를 작성해주세요');
		}
	})

	
	swiper4 = new Swiper('.swiper-container3', {
		slidesPerView: 4,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next1',
			prevEl: '.swiper-button-prev1',
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			
			760: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1600: {
				slidesPerView: 4,
				spaceBetween: 30,
			}
		}
	});


	// 
	$('.select_del').click(function(){
		var selectBox = $(this).parents('.select_ul')
		if(!$('.select_ul').hasClass('display_none')){
			return ;
		}
		else{
			selectBox.addClass('display_none')
		}
		var totalPrice = getTotalPrice();
		$('.total_price').text(comma(totalPrice))
	})

	//select
	$('#select').change(function(){
		var val = $(this).val();
		if(val == ""){
			return;
		}
		val = parseInt(val)-1;
		$('.select_ul').eq(val).removeClass('display_none');
		$(this).val("");
		var totalPrice = getTotalPrice();
		$('.total_price').text(comma(totalPrice))

	})


	//
	
	$(".up").on("click",function(){
		var inp =$(this).parent().find("input").val();
		//input val 저장
		var obj = $(this)
		//.up
		var price = $(this).parent().siblings('.price').find('.price_hidden').val();
		//price_hidden val 저장
		var priceObj = $(this).parent().siblings('.price').find('span');
		setTimeout(function(){
		//inp가 10과 같으면 inp 나타내고, 아니면 inp++
		if (inp == 10)
		{
			inp;
		}
		else{inp ++;}
		obj.parent().find("input").val(inp);
		//.up의 부모에서 input 태그 찾고 val에 inp 저장
		price = price * inp;
		price = comma(price)+"원"
		priceObj.text(price);
		//span 에 price를 text로 나타냄
		var totalPrice = getTotalPrice();
		$('.total_price').text(comma(totalPrice))
		//.total_price에 totalPrice와 comma 나타냄
		},100);
		
		
	});
	$(".down").on("click",function(){
		var inp =$(this).parent().find("input").val();
		var obj = $(this)
		var price = $(this).parent().siblings('.price').find('.price_hidden').val();
		var priceObj = $(this).parent().siblings('.price').find('span');
		setTimeout(function(){
		if (inp == 0)
		{
			inp;
		}
		else if(inp <= 10)
		{
			inp--;
		}
		// $("input").val(inp);
		obj.parent().find("input").val(inp);
		price = price * inp;
		price = comma(price)+"원"
		priceObj.text(price);
		var totalPrice = getTotalPrice();
		$('.total_price').text(comma(totalPrice))
		},100);
	});

		
})
var swiper4;

//가격 콤마 더하기
function comma(num){
	var len, point, str; 
		 
	num = num + ""; 
	point = num.length % 3 ;
	len = num.length; 
 
	str = num.substring(0, point); 
	while (point < len) { 
			if (str != "") str += ","; 
			str += num.substring(point, point + 3); 
			point += 3; 
	} 
	 
	return str;
}
//가격 콤마 빼기
function removeComma(price){
	var array = price.split(',');
	price = array.join('');
	price = parseInt(price);
	return price;
}

//up, down 버튼
function onlyNumber() 
{ 
	var str = 100;
	var Mynum = document.getElementById("inptext").value;
	Mynum =Mynum.replace(/[^0-9]/g,'');
	document.getElementById("inptext").value=Mynum;
	var plus = document.getElementById("inptext").value=Mynum;
	if (plus < str)
	{
		document.getElementById("inptext").value=0;
	}else if (plus > 10)
	{
		document.getElementById("inptext").value=10;
	}
} 

//select 하면 가격 총 금액으로 더하기
function getTotalPrice(){
	var totalPrice = 0;
	$('.select_ul').each(function(){
		if($(this).hasClass('display_none')){
			return ;
		}
		var price = $(this).find('.price span').text();
		price = price.substr(0,price.length-1);
		price = removeComma(price);
		totalPrice += price;
	})
	

	return totalPrice;
}