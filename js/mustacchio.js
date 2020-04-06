$(function(){
    $('.nav_box').click(function(){
        $('.nav_name').removeClass('mint')
        $(this).find('.nav_name').toggleClass('mint')
    })
    $('.ft_icon_box').click(function(){
        $('.ft_icon_box').find('.ft_icon').removeClass('display_none')
        $('.ft_icon_box').find('.ft_icon_click').addClass('display_none')
        $(this).find('.ft_icon').toggleClass('display_none')
        $(this).find('.ft_icon_click').toggleClass('display_none')
    })

})
