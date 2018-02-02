$(function () {

	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	})

	// $(window).scroll(function(){
	// 	var scrollTop = $(this).scrollTop();
	// 	 $('.call').css('top', -(scrollTop)+ 'px');
	// })

});