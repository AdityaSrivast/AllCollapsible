$(document).ready(function(){
	$(".collapsible-body").hide();
	$(".collapsible-header").click(function(){
		$(".collapsible-body").not($(this).siblings()).slideUp(300);
		$(this).siblings(".collapsible-body").slideToggle(300);
	})
});
// module.exports = () => {

// }