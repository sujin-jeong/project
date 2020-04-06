$(function(){
    $('.menu_sub').click(function(){
        $('.menu_sub_a').removeClass('menu_sub_click')
        $(this).find('.menu_sub_a').toggleClass('menu_sub_click')
    })
  
})
