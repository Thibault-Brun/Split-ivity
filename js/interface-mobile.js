$( document ).ready(function(){
	Touch.tabSwipe();
	Builder.header();
	Builder.tabs();
	Builder.container();
	container.simple();
});

window.onresize = function(){
	Interface.repaint();
}

splitivityColor = '#D97D02';

Interface = {
	repaint : function(){
		header.coordUp= $(document).height()*-1 + header.splitivity.outerHeight();
		tabs.coordDown = header.splitivity.outerHeight();
		header.css('transform', 'translateY('+header.coordUp+'px)').delay(10);
		tabs.css('transform', 'translateY('+tabs.coordDown+'px)').delay(40);
		setTimeout(function(){
		 	$(window).scrollTop(0);
		 	tabs.down();
		 	container.css('top', tabs.coordDown+tabs.outerHeight()+'px');
		 }, 10);

	},
	renderIconeNbPersonne : function(){
		paper = Raphael(iconeNbPersonnes[0],100, 100);
		iconeNbPersonnes.milieu 	= 	paper.path(RAPHAEL_bonhommes.centre).attr({fill: splitivityColor, stroke: "none"}).scale(3.3,3.3,0,0);
		iconeNbPersonnes.gauche 	= 	paper.path(RAPHAEL_bonhommes.gauche).attr({fill: splitivityColor, stroke: "none"}).scale(3.3,3.3,0,0);
		iconeNbPersonnes.droite 	= 	paper.path(RAPHAEL_bonhommes.droite).attr({fill: splitivityColor, stroke: "none"}).scale(3.3,3.3,0,0);
		iconeNbPersonnes.label 		= 	paper.text(51,55, '2').attr({fill: "#FFF", "font-size" : 20});
	},
	ouvrirListe : function(el){
		tabs.up();
		container.up();
		el.addClass('active');
		el.icone.tourner('90');
		el.liste.slideDown(300);
		el.liste.css('top',el.outerHeight()+10);
		if(el == boutonFrais)
			boutonPersonnes.hide();
		else
			boutonFrais.hide();
	},
	fermerListe : function(el){
		if(el == boutonFrais)
			boutonPersonnes.show();
		else
			boutonFrais.show();
		tabs.down();
		container.down();
		el.removeClass('active');
		el.icone.tourner('0');	
		el.liste.slideUp(300);
	}
};

function affichageClavierTotal(){
	cacherPersonneIcon();
	setTimeout(function(){
	 $(window).scrollTop(0);
	 }, 200);
}

function masquageClavierTotal(){
	$('#total').removeClass("activated");
	calculSimple();
	afficherPersonneIcon();
}
/*
// Définition du picker (roulette de sélection)
function picker(){
		
		// Définition du nombre de sliders
		var nbrSliders = 2;
		
		// Récupération du nombre de personnes actuelles
		var n =  iconeNbPersonnes.label.getText();
		n = ""+n;
		
		// Ajout des zéros devant le chiffre (ex : 0002)
		while(n.length<nbrSliders) n = "0"+n;
		
		// Découpage pour chaque roulette
		var digits = (""+n).split("");
		
		var valeursRoulette = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
		
		for(i=0; i<nbrSliders; i++)
			SpinningWheel.addSlot(valeursRoulette, 'right');
			
		SpinningWheel.setDoneAction(pickerDone);
		SpinningWheel.setCancelAction(pickerCancel);
		
		SpinningWheel.open();
		setTimeout(function(){
			deplacerPersonneIcon();
			setTimeout(function(){
				animation_iconeNbPersonnesBounce();},
			200);}, 
		200);
		
		// Sélection de la valeur actuelle de la roulette
		for(i=nbrSliders-1; i>=0; i--)
			SpinningWheel.scrollToValue(i,digits[i]);
}

function pickerDone(){
		iconePersonneSetText();
		calculSimple();
		replacerPersonneIcon();
}

function pickerCancel(){
	replacerPersonneIcon();
}
*/
function deplacerPersonneIcon(){
	$('#icone-personnes').addClass('activated');
$('#icone-personnes').css('bottom',$( document ).height()-$('#sw-wrapper').offset().top+'px');
}

function replacerPersonneIcon(){
	$('#icone-personnes').removeClass('activated');
$('#icone-personnes').css('bottom','0px');
}

function interface_renderListeButtonIcon(iconContainer){
	var paperContainer = Raphael(iconContainer,25,25);
	return paperContainer.path("M11.166,23.963L22.359,17.5c1.43-0.824,1.43-2.175,0-3L11.166,8.037c-1.429-0.826-2.598-0.15-2.598,1.5v12.926C8.568,24.113,9.737,24.789,11.166,23.963z").attr({fill: "#FFF", stroke: "none"});
}

function interface_iconeNbPersonnesUpdateLabel(){
	var valeurAvant = iconeNbPersonnes.label.getText();
	var results = SpinningWheel.getSelectedValues();
	var nbPersonnes = parseInt(results.values.join(''));
		
	if(nbPersonnes == 0){
		nbPersonnes = 1;
		SpinningWheel.scrollToValue(1,1);
	}
	
	iconeNbPersonnes.label.setText(nbPersonnes);
	calculSimple();
	if(valeurAvant<=nbPersonnes)
		animation_iconeNbPersonnesBounce();
	else
		animation_iconeNbPersonnesShrink();
}

function interface_ouvrirFrais(){
	boutonPersonnes.hide();
	boutonFrais.icone.tourner('90');
	boutonFrais.addClass('active');
	
}

function interface_fermerFrais(){
	boutonPersonnes.show();
	
	boutonFrais.icone.tourner('0');	
	boutonFrais.removeClass('active');
}

function interface_fermerPersonnes(){
	boutonFrais.show();

	boutonPersonnes.icone.tourner('0');	
	boutonPersonnes.removeClass('active');
}