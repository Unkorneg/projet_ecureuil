$(document).ready(function(){

	// réglage du margin-top du main
	var mrgntop = $('header').outerHeight(true);

	$('#main').css({
		'margin-top' : mrgntop
	});

	var espaceDispoMenu = window.innerHeight - $('header').outerHeight(true);
	var nbEnfantsMenu = $("#menu-principal").children().length;
	var heightMenuItem = espaceDispoMenu/nbEnfantsMenu;
	$(".menu-item").css({
		'height' : heightMenuItem
	});

    // réglage de l'apparition des petits trucs dans le menu
    $(".sub-menu-item").hide();

    $(".menu-item").hover(
    	function() {
    		var nbEnfants = $(this).children().children().length;

    		if (nbEnfants) {
    			var aHeight = $(this).children("a").outerHeight(true);
    			var subHeight = $(this).children().children().outerHeight(true);
    			var futureLongueurBloc = subHeight*nbEnfants + aHeight;
    			var futureLongueurAutresBlocs = (espaceDispoMenu - futureLongueurBloc)/(nbEnfantsMenu - 1);

    			$(this).animate({
    				'height' : futureLongueurBloc
    			},300);
    			$(".menu-item").not($(this)).animate({
    				'height' : futureLongueurAutresBlocs
    			},300);
    			$(this).children().children().css({
    				'height' : subHeight
    			});

    			$(this).children().children().slideDown(500);
    		}

    	}, function() {
    		var nbEnfants = $(this).children().children().length;

    		if (nbEnfants) {
    			$(this).children().children().slideUp(500);

    			var espaceDispoMenu = window.innerHeight - $('header').outerHeight(true);
    			var nbEnfantsMenu = $("#menu-principal").children().length;
    			var heightMenuItem = espaceDispoMenu/nbEnfantsMenu;

    			$(".menu-item").animate({
    				'height' : heightMenuItem
    			}, 300);
    		}
    	});
});
