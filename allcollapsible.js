/*MIT License

Copyright (c) 2018 Aditya Srivastava*/

$(document).ready(function(){
	$(".collapsible-body").hide();
	$(".with-arrow").find(".collapsible-title").prepend("<i class='right-arrow'></i>");
	$(".collapsible-title").click(function(){
		if($(this).closest('.extensible').length == 0) {
			$(".collapsible-body").not($(this).siblings()).slideUp(300);
			$("i.down-arrow").not($(this).children("i.down-arrow")).replaceWith("<i class='right-arrow'></i>");
		}
		$(this).siblings(".collapsible-body").slideToggle(300,function(){
			if ($(this).is(':visible')) {
				$(this).siblings(".collapsible-title").children("i.right-arrow").replaceWith("<i class='down-arrow'></i>");
			}
			else {
				$(this).siblings(".collapsible-title").children("i.down-arrow").replaceWith("<i class='right-arrow'></i>");
			}
		});
	})
});
