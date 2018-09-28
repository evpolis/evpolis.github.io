$(document).ready(function() {

	$('a[href^="#"]').on("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
	scrollTop: $(anchor.attr('href')).offset().top
	}, 777);
	e.preventDefault();
	return false;
	});

 /*******************************************************/

	$("#phone").mask("+7 999 99-99-999");

 /*******************************************************/

 	$("#form-questions").validate({
 		rules:{
 			name:{
 				required: true,
 			},
 			phone:{
 				required: true,
 			},
 			checkbox:{
 				required: true,
 			},
 			email:{
 				email: true,
 			},
 		},

 		messages:{
 			name:{
 				required: "Это поле обязательно для заполнения",
 			},
 			phone:{
 				required: "Это поле обязательно для заполнения",
 			},
 			checkbox:{
 				required: "Это поле обязательно для заполнения",
 			},
 			email:{
 				email: "Введите корректный e-mail",
 			},
 		}
 	});


});