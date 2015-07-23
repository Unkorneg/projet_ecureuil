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

    var peutOnDeroulerLesMenus = true;

    $(".menu-item").mouseenter(function() {

        $this = $(this);
        var nbEnfants = $this.children().children().length;

        if (nbEnfants && peutOnDeroulerLesMenus && !($(".animating").length)) {

            $(this).addClass("animating");

                peutOnDeroulerLesMenus = false;

                var aHeight = $this.children("a").outerHeight(true);
                var futureLongueurBloc = heightSubMenuItem * nbEnfants + aHeight;
                var futureLongueurAutresBlocs = (espaceDispoMenu - futureLongueurBloc)/(nbEnfantsMenu - 1);

                $this.animate({
                    'height' : futureLongueurBloc
                },300);
                $(".menu-item").not($(this)).animate({
                    'height' : futureLongueurAutresBlocs
                },300);
                $this.children().children().animate({
                    'height' : heightSubMenuItem
                },300);
          
        }

    });

    $(".menu-item").mouseleave(function() {

    $this = $(this);
    var nbEnfants = $this.children().children().length;

        if (nbEnfants && $(this).hasClass("animating")) {

            $(".menu-item").animate({
                'height' : heightMenuItem
            },300);
            $this.children().children().animate({
                'height' : 0
            },300);

            $(".animating").removeClass("animating");
            setTimeout(function() {
                peutOnDeroulerLesMenus = true;
            },650);
        }

    });








    //var compteur = 20; //en millisecondes; compteur n'est pas initialement = à 0 au cas où

    /*$(".menu-item").each(function() {

        $this = $(this);

        $this.mouseenter(function() {
            var nbEnfants = $(this).children().children().length;

            if (nbEnfants) {

                if ($("enAnimation").length == 0) {

                $this.addClass("animated"); // l'animation d'ouverture (mouseover seulement)
                $this.addClass("enAnimation"); //c'est en train d'être animé
                var aHeight = $this.children("a").outerHeight(true);
                var futureLongueurBloc = heightSubMenuItem * nbEnfants + aHeight;
                var futureLongueurAutresBlocs = (espaceDispoMenu - futureLongueurBloc)/(nbEnfantsMenu - 1);

                setInterval(function() {
                    compteur = compteur + 20;
                },20)

                $this.animate({
                    'height' : futureLongueurBloc
                },300);
                $(".menu-item").not($(this)).animate({
                    'height' : futureLongueurAutresBlocs
                },300);
                $this.children().children().animate({
                    'height' : heightSubMenuItem
                },300);
                setTimeout(function(){
                    $this.removeClass("animated");
                },300);

                }
                else {

                    setTimeout(function() {

                $this.addClass("animated"); // l'animation d'ouverture (mouseover seulement)
                $this.addClass("enAnimation"); //c'est en train d'être animé
                var aHeight = $this.children("a").outerHeight(true);
                var futureLongueurBloc = heightSubMenuItem * nbEnfants + aHeight;
                var futureLongueurAutresBlocs = (espaceDispoMenu - futureLongueurBloc)/(nbEnfantsMenu - 1);

                setInterval(function() {
                    compteur = compteur + 20;
                },20)

                $this.animate({
                    'height' : futureLongueurBloc
                },300);
                $(".menu-item").not($(this)).animate({
                    'height' : futureLongueurAutresBlocs
                },300);
                $this.children().children().animate({
                    'height' : heightSubMenuItem
                },300);
                setTimeout(function(){
                    $this.removeClass("animated");
                },300);

                    }, 310);

                }

            }

        });

        $this.mouseleave(function() {
            var nbEnfants = $this.children().children().length;

                if (nbEnfants) {

                var espaceDispoMenu = window.innerHeight - $('header').outerHeight(true);
                var margBottom = parseInt($(".menu-item").css("marginBottom"),10);
                var nbEnfantsMenu = $("#menu-principal").children().length;
                espaceDispoMenu = espaceDispoMenu - nbEnfantsMenu*margBottom;
                var heightMenuItem = espaceDispoMenu/nbEnfantsMenu;

                $(".menu-item").animate({
                    'height' : heightMenuItem
                },300);
                $this.children().children().animate({
                    'height' : 0
                },300);
                setTimeout(function() {
                    $this.removeClass("animated"); //c'est pas grave si on le fait même si c'est déjà fait
                    $this.removeClass("enAnimation");
                    compteur = 20;
                }, 300);
            }

        });

});*/


    /*$(".menu-item").mouseenter(function() {
        $(".menu-item").addClass("bloque");
        var nbEnfants = $(this).children().children().length;

        if (nbEnfants) {

            if(!($(this).hasClass("bloque"))) {
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

    });

    $(".menu-item").mouseleave(function() {
        var nbEnfants = $(this).children().children().length;

        if (nbEnfants && !($(this).hasClass("bloque"))) {

            var espaceDispoMenu = window.innerHeight - $('header').outerHeight(true);
            var margBottom = parseInt($(".menu-item").css("marginBottom"),10);
            var nbEnfantsMenu = $("#menu-principal").children().length;
            espaceDispoMenu = espaceDispoMenu - nbEnfantsMenu*margBottom;
            var heightMenuItem = espaceDispoMenu/nbEnfantsMenu;

            setTimeout(function() {
                $(".menu-item").removeClass("bloque");
            }, 300);
            $(".menu-item").animate({
                'height' : heightMenuItem
            },300);
            $(this).children().children().animate({
                'height' : 0
            },300);

        }
    });*/

});
