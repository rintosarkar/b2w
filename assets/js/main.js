$(function(){
	// Cache the window object

	var $window =$(window);
	
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this);
			
		$(window).scroll(function(){
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			var coord= '50%' + yPos + 'px';
			// alert(coord); 
			var s = $bgobj.css({ backgroundPosition: coord });
			
		});
	}); //end window scroll

	// Parallax bacground effect


});