function animationTextBounce(){
	text.animate({'font-size':30}, 200, "<>", function(){
		text.animate({'font-size':20}, 200, "<>");
		
	});
	iconePersonnes.animate({"transform":"s3.5, 3.5, 1, 2"}, 200, "<>", function(){
		iconePersonnes.animate({"transform":"s3.3, 3.3, 0, 0"}, 200, "<>")
	});
	
	setTimeout(function(){	gugusGauche.animate({"transform":"s3.5, 3.5, 1, 2"}, 200, "<>", function(){
		gugusGauche.animate({"transform":"s3.3, 3.3, 0, 0"}, 200, "<>");
	});
	}, 100);
	
	setTimeout(function(){	gugusDroite.animate({"transform":"s3.5, 3.5, 1, 2"}, 200, "<>", function(){
		gugusDroite.animate({"transform":"s3.3, 3.3, 0, 0"}, 200, "<>");
	});
	}, 150);

}

function animationTextShrink(){
	text.animate({'font-size':10}, 200, "<>", function(){
		text.animate({'font-size':20}, 200, "<>");
	});
	iconePersonnes.animate({"transform":"s3.1, 3.1, -1, -2"}, 200, "<>", function(){
		iconePersonnes.animate({"transform":"s3.3, 3.3, 0, 0"}, 200, "<>")
	});
	
	setTimeout(function(){	gugusGauche.animate({"transform":"s3.1, 3.1, -1, -2"}, 200, "<>", function(){
		gugusGauche.animate({"transform":"s3.3, 3.3, 0, 0"}, 200, "<>");
	});
	}, 100);
	
	setTimeout(function(){	gugusDroite.animate({"transform":"s3.1, 3.1, -1, -2"}, 200, "<>", function(){
		gugusDroite.animate({"transform":"s3.3, 3.3, 0, 0"}, 200, "<>");
	});
	}, 150);

}



animationOut = 'animated fadeOutLeft';
function chargerSimple(){
var animation = 'animated fadeInLeft';
	$('#total').addClass(animation);
	$('#result').hide();
	$('#icone-personnes').hide();
	setTimeout(function(){
	$('#result').show();
	$('#result').addClass(animation)},200);
	setTimeout(function(){
	$('#icone-personnes').show();
	$('#icone-personnes').addClass(animation)},400);
	
	}

function chargerDetails(){
var animation = 'animated fadeInRight';
	$('#bouton-frais').addClass(animation);
	$('#bouton-personnes').hide();
	setTimeout(function(){
	$('#bouton-personnes').show();
	$('#bouton-personnes').addClass(animation)},200);
}

function cacherSimple(){
	$('#simple').children().addClass(animationOut);
	
}

function cacherDetails(){
	$('#details').children().addClass(animationOut);

}

function chargerHeader(){
	animation = 'animated fadeInUp';
	/*$('header').show();
	$('.tabs').hide();
	$('header').addClass(animation);
	setTimeout(function(){
		$('.tabs').show();*/
	$('.tabs').addClass(animation);
	//},200);
}

function deplierListe(liste){
	var animationListe = 'animated fadeInUp';
	liste.slideDown(500);
	//liste.addClass(animationListe);
}

function replierListe(liste){
	//var animationListe = 'animated fadeOutRight';
	liste.slideUp(500);
}


function fermerFrais(){
	replierListe($('#listeFrais'));	
	$('#bouton-frais').removeClass('active');		
	tournerFraisIcon('0');	
	$('.tabs').slideDown(200);
}

function fermerPersonnes(){
	$('#bouton-personnes').removeClass('active');
	tournerPersonneListeIcon('0');	
	$('.tabs').slideDown();
	$('#bouton-frais').slideDown(200);

}

function ouvrirFrais(){
	deplierListe($('#listeFrais'));
	$('#bouton-frais').addClass('active');
	tournerFraisIcon('90');
	$('.tabs').slideUp(200);
}

function ouvrirPersonnes(){
	$('#bouton-personnes').addClass('active');
	tournerPersonneListeIcon('90');
	$('#bouton-frais').slideUp(200);
	$('.tabs').slideUp(200);
}