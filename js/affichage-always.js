$(document).ready(function(){

	// réglage du margin-top du main

	var mrgntop = $('header').outerHeight(true);

    $('#main').css({
        'margin-top' : mrgntop
    });

    // réglage de l'apparition des petits trucs dans le menu
    /*document.getElementById("demo").addEventListener("mouseover", mouseOver);
	document.getElementById("demo").addEventListener("mouseout", mouseOut);

	function mouseOver() {
	    document.getElementById("demo").style.color = "red";
	}

	function mouseOut() {
    	document.getElementById("demo").style.color = "black";
	}*/


});