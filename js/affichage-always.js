$(document).ready(function(){

	// réglage du margin-top du main
	var mrgntop = $('header').outerHeight(true);

	$('#main').css({
		'margin-top' : mrgntop
	});


	var espaceDispoMenu = window.innerHeight - $('header').outerHeight(true);
	var margBottom = parseInt($(".menu-item").css("marginBottom"),10);
	var nbEnfantsMenu = $("#menu-principal").children().length;
	espaceDispoMenu = espaceDispoMenu - nbEnfantsMenu*margBottom;
	var heightMenuItem = espaceDispoMenu/nbEnfantsMenu;
	$(".menu-item").css({
		'height' : heightMenuItem
	});

    // réglage de l'apparition des petits trucs dans le menu
    var heightSubMenuItem = $(".sub-menu-item").outerHeight(true);
    $(".sub-menu-item").css({
        'height' : 0
    });

    $(".menu-item").hover(
    	function() {

    		var nbEnfants = $(this).children().children().length;

    		if (nbEnfants) {

                $(".menu-item").not($(this)).addClass("bloque");

                if(!$(this).hasClass("bloque")) {
                    var aHeight = $(this).children("a").outerHeight(true);
                    var futureLongueurBloc = heightSubMenuItem * nbEnfants + aHeight;
                    var futureLongueurAutresBlocs = (espaceDispoMenu - futureLongueurBloc)/(nbEnfantsMenu - 1);

                    $(this).animate({
                        'height' : futureLongueurBloc
                    },300);
                    $(".menu-item").not($(this)).animate({
                        'height' : futureLongueurAutresBlocs
                    },300);
                    $(this).children().children().animate({
                        'height' : heightSubMenuItem
                    },300);
                }

            }

        }, function() {

          var nbEnfants = $(this).children().children().length;

          if (nbEnfants && !$(this).hasClass("bloque")) {
                var espaceDispoMenu = window.innerHeight - $('header').outerHeight(true);
                var margBottom = parseInt($(".menu-item").css("marginBottom"),10);
                var nbEnfantsMenu = $("#menu-principal").children().length;
                espaceDispoMenu = espaceDispoMenu - nbEnfantsMenu*margBottom;
                var heightMenuItem = espaceDispoMenu/nbEnfantsMenu;

                $(".menu-item").animate({
                    'height' : heightMenuItem
                },300);
                $(this).children().children().animate({
                    'height' : 0
                },300, function() {
                    $(".menu-item").removeClass("bloque");
                });

            }
        });
});
