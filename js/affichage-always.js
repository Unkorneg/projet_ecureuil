$(document).ready(function(){

	// réglage du margin-top du main

	var mrgntop = $('header').outerHeight(true);

	$('#main').css({
		'margin-top' : mrgntop
	});

    // réglage de l'apparition des petits trucs dans le menu
    $(".sub-menu-item").hide();
    $(".menu-item").hover(
    	function() {
    		$(this).children().children().slideDown(500);
    	}, function() {
    		$(this).children().children().slideUp(500);
    	});

});

