$(document).ready(function() {
	$('#nav').scrollToFixed();
	// $('#aboutus').backstretch("food.jpg");

	$(document).on('click', 'a[href^="#"]', function(e) {
		var id = $(this).attr('href');
		var $id = $(id);
		if ($id.length === 0) {
		    return;
		}
		e.preventDefault();
		var pos = $(id).offset().top;
		$('body, html').animate({scrollTop: pos});
	});

	$( "#tabs" ).tabs({
      collapsible: true
    });

	$(window).stellar({
		hideDistantElements: true,
		verticalScrolling: true,
		scrollProperty: 'position'
	});
})