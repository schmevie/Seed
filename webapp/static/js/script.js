	function hy(){
		console.log('hi'+$( "#se").val());
		//console.log($( "#amount").html().spit("$"))
		$( "#amount").html('5$');
	}

$(document).ready(function() {

	
	$("#farmers").hide();

	var xTriggered = 0;
	$( "#searchbar" ).keypress(function( event ) {
	  if ( event.which == 13 ) {
	     event.preventDefault();
	  }
	  //$("#farmers").html($( "#searchbar" ).val());
	  // $( "#searchbar" )
	  console.log($( "#miau").val())
	  xTriggered++;
	  if($( "#miau").val()=='tomato')
	  	$("#farmers").show();
	});

	$(window).scroll(function() {
		var fromTop = $(window).scrollTop();
		var screenHeight = $(window).height()*0.80;
		if (fromTop >= screenHeight) {
			$('#navbar').css({'position': 'fixed', 'top' : 0})
			console.log("p1");
		} else if (fromTop < screenHeight) {
			$('#navbar').css({'position': 'absolute', 'top' : ''});
			$('#navbar').css({'bottom' : 0});
			console.log("p2");
		}
	});  
	$(window).resize(function() {
		var screenWidth = $(window).width();
		var iconWidth = screenWidth * 0.08;
		var iconHeight = $(window).height() * 0.72;
		$('#button1img').css('width', iconWidth, 'height', iconHeight);
		$('#button2img').css('width', iconWidth, 'height', iconHeight);
		
	});  
	
	$("a").click(function(){
		if(this.hash){
			var hash = this.hash.substr(1);
			var $toElement = $("a[name=" + hash+"]");
			var toPosition = $toElement.position().top;
			$("body,html").animate({
				scrollTop : toPosition
			},1000,"linear");
			return false;
		}
	});

});