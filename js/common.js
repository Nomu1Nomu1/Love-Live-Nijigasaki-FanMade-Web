$(function(){
    'use strict';

    var timer = false;
    var prewidth = $(window).width();
    $(window).resize(function(){
        if (timer !== false){
            clearTimeout(timer);
        }
        timer = setTimeout(function(){
            var nowWidth = $(window).width();
            if(prewidth !== nowWidth){
                location.reload();
            }
            prewidth = nowWidth
        }, 200)
    });
});

$(document).ready(function(){
    'use strict';

    $(window).on('scroll', function(){
        if($(this).scrollTop() > 30) {
            $('body').addClass('fixed');
        } else{
            $('body').removeClass('fixed');
        }
    });

    var headerHight = 150;
    $('a[href^="#"]').click(function(){
		var href= $(this).attr("href");
		var target = $(href === "#" || href === "" ? 'html' : href);
		var position = target.offset().top-headerHight;
		$("html, body").animate({scrollTop:position}, 550, "swing");
	});
})