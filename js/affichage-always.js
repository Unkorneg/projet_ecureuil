$(document).ready(function(){

	// réglage du margin-top du main

	var mrgntop = $('header').outerHeight(true);

    $('#main').css({
        'margin-top' : mrgntop
    });

    // réglage de l'apparition des petits trucs dans le menu
    $(".menu-item").addEventListener("mouseover", mouseOverMenuItem);
	$(".menu-item").addEventListener("mouseout", mouseOutMenuItem);

	function mouseOverMenuItem() {
	    $(".menu-item").style.color = "red";
	}

	function mouseOutMenuItem() {
    	$(".menu-item").style.color = "black";
	}


});