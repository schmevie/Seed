$(document).ready(function() {
	$(window).scroll(function() {
		var fromTop = $(window).scrollTop();
		var screenHeight = $(window).height()*0.85;
		if (fromTop >= screenHeight) {
			$('#navbar').css({'position': 'fixed', 'top' : 0})
			console.log("p1");
		} else if (fromTop < screenHeight) {
			$('#navbar').css({'position': 'absolute', 'top' : ''});
			$('#navbar').css({'bottom' : 0});
			console.log("p2");
		}
	});  
	
});