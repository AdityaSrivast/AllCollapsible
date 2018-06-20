$(document).ready(function(){
	$(".collapsible-body").hide();
	$(".collapsible-title").click(function(){
		if($(this).closest('.extensible').length <=0) {
			$(".collapsible-body").not($(this).siblings()).slideUp(300);			
		}
		$(this).siblings(".collapsible-body").slideToggle(300);
	})
	$(".")
});
