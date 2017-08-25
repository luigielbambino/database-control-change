$(document).foundation();

$( document ).ready(function() {
    $(".top-button-menu").on('click', function(){
    	hideMenu();
	});

	function hideMenu(){
		if($(".position-left").hasClass("push-menu")){
			$(".position-left").removeClass("push-menu");
			$(".off-canvas-content").removeClass("push-content");
		} else {
			$(".position-left").addClass("push-menu");
			$(".off-canvas-content").addClass("push-content");
		}
	}
	
});