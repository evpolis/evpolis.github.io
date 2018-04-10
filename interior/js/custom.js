$(document).ready(function() {
	var menuBtn = $('.top-nav_btn');
	var menu = $('.top-nav_menu');
	// var w = $(window).width();

	menuBtn.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('show');
	});
});