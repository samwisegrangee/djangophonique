$(document).ready(function(){
    setInterval(function(){
        
        var scrollTop   = $(window).scrollTop(),
            aboutOffset  = $('#about').offset().top;
            
		// Sticky Nav Bar
		if(scrollTop > (aboutOffset)){
			$("nav").addClass("nav-scrolled");
		} else {
			$("nav").removeClass("nav-scrolled")
		}

	}, 100);
	
	//Smooth scrolling between ""#anchor" links.
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();
  
		var target = this.hash;
		var $target = $(target);
  
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
});