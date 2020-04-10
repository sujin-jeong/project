$(function(){
    $('.main_prev').click(function(){
        $(this).addClass('swiper_click')
        $(this).find('.fa-angle-left').addClass('white')
        $('.main_next').find('.fa-angle-right').removeClass('white')
        $('.main_next').removeClass('swiper_click')
    })
    $('.main_next').click(function(){
        $(this).addClass('swiper_click')
        $(this).find('.fa-angle-right').addClass('white')
        $('.main_prev').find('.fa-angle-left').removeClass('white')
        $('.main_prev').removeClass('swiper_click')
    })
    $('.bd_t_item').click(function(){
        $(this).addClass('bd_t_item_click').siblings().removeClass('bd_t_item_click')
        $(this).siblings().find('.bd_t_item_t').removeClass('bd_t_item_t_click')
        $(this).find('.bd_t_item_t').addClass('bd_t_item_t_click')
        
        $(this).siblings().find('.bd_t_icon').removeClass('bd_t_icon_click')
        $(this).find('.bd_t_icon').addClass('bd_t_icon_click')
        
        $(this).siblings().find('.bd_t_text1').removeClass('bd_t_text1_click')
        $(this).find('.bd_t_text1').addClass('bd_t_text1_click')
       
        $(this).siblings().find('.bd_t_text2').removeClass('bd_t_text2_click')
        $(this).find('.bd_t_text2').addClass('bd_t_text2_click')
        
        
    })

    // $('.cruise').click(function(){
    //     $('.cruise_icon').toggleClass('display_none')
    //     $('.cruise_icon_click').toggleClass('display_none')
    //     $('.mid_name').toggleClass('mint')

    // })
    // $('.city').click(function(){
    //     $('.city_icon').toggleClass('display_none')
    //     $('.city_icon_click').toggleClass('display_none')
    // })
    // $('.honeymoon').click(function(){
    //     $('.honeymoon_icon').toggleClass('display_none')
    //     $('.honeymoon_icon_click').toggleClass('display_none')
    // })
    // $('.adventure').click(function(){
    //     $('.adventure_icon').toggleClass('display_none')
    //     $('.adventure_icon_click').toggleClass('display_none')
    // })
    // $('.beach').click(function(){
    //     $('.beach_icon').toggleClass('display_none')
    //     $('.beach_icon_click').toggleClass('display_none')
    // })
    // $('.safari').click(function(){
    //     $('.safari_icon').toggleClass('display_none')
    //     $('.safari_icon_click').toggleClass('display_none')
    // })
    $('.icon_name').click(function(){
        $('.icon_name').find('.mid_icon').removeClass('display_none')
        $('.icon_name').find('.mid_icon_click').addClass('display_none')
        $('.mid_name').removeClass('mint')
        $(this).find('.mid_icon').toggleClass('display_none')
        $(this).find('.mid_icon_click').toggleClass('display_none')
        $(this).find('.mid_name').toggleClass('mint')
    })
    $('.nav_item').click(function(){
        $(this).addClass('mint').siblings().removeClass('mint')
    })
    $('.ft_b_menu').click(function(){
      $(this).addClass('mint').siblings().removeClass('mint')
    })
    $('.text3_item').click(function(){
      $(this).addClass('text3_item_click').siblings().removeClass('text3_item_click')
    })
    
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
      });
      var swiper = new Swiper('.swiper-con', {
        slidesPerView: 5,
        spaceBetween: 30,
        freeMode: true,
        breakpoints: {
          900: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1700: {
            slidesPerView: 6,
            spaceBetween: 30,
          },

        }
      });
      
      var swiper = new Swiper('.swiper-containe', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      
      $('[data-toggle="datepicker"]').datepicker()
      
})