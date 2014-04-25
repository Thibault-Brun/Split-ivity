// Régénération des éléments Raphael.js après un appel ajax.
// Vérification de la présences des éléments dans le DOM.
$( document ).ajaxComplete(function() {
	if($('#simple').length !=0){
		renderPersonneIcon();
		chargerSimple();
	}
	else{
	if($('#listeFrais').children().length == 0){
		chargerDetails();
		renderFraisIcon();
		
		 $.get("./formulaireFrais.html", function(data){$('#listeFrais').html((data));});
		renderPersonneListeIcon();
		$('#listeFrais').slideUp(0);
		$('#bouton-frais').click(function(){
			if($('#listeFrais').is(":visible")){
				fermerFrais();
			}
			else{
				fermerPersonnes();
				ouvrirFrais();
			}
		});
		
		$('#bouton-personnes').click(function(){
			if($('#bouton-personnes').is(".active")){
				fermerPersonnes();			}
			else{
				fermerFrais();
				ouvrirPersonnes();
			}
<<<<<<< HEAD
		});
		
	
		
		
		
=======
		});		
>>>>>>> 7ec8f1c08468b706509fee79fde0db269a24a51e
		
	}
	}
});

// Définition du comportement des onglets "simple" et "détails"
$( document ).ready(function(){
	chargerHeader();

		$( "#details-button" ).click(function(){
			if(!$('#details-button').hasClass("active")){
			vueSimple = $('#container').html();
			$('.tabs').slideDown();
			$("#details-button").addClass("active");
			$("#simple-button").removeClass("active");
			
			setTimeout(function(){
						$( "#container" ).load("indexDetails.html #details");
			}, 300);
		}
		});
		$( "#simple-button" ).click(function(){
			
			if(!$('#simple-button').hasClass("active")){
			$("#simple-button").addClass("active");
			$("#details-button").removeClass("active");
			$('.tabs').slideDown();
			setTimeout(function(){$
			if(vueSimple!="")
				$('#container').html(vueSimple);
			else
( "#container" ).load("vueSimple.html #simple");}, 400);
			}
		});
});

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

// Définition du picker (roulette de sélection)
function picker(){
		
		// Définition du nombre de sliders
		var nbrSliders = 2;
		
		// Récupération du nombre de personnes actuelles
		var n =  text.attr('text');
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
		setTimeout(function(){deplacerPersonneIcon(); setTimeout(function(){animationTextBounce();},200);}, 200);
		
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

function cacherPersonneIcon(){
	$('#result').hide();
	$('#icone-personnes').hide();
}

function afficherPersonneIcon(){
	$('#result').show();
	$('#icone-personnes').show();
}

function deplacerPersonneIcon(){
	$('#icone-personnes').addClass('activated');
$('#icone-personnes').css('bottom',$( document ).height()-$('#sw-wrapper').offset().top+'px');
}

function replacerPersonneIcon(){
	$('#icone-personnes').removeClass('activated');
$('#icone-personnes').css('bottom','0px');
}

function renderFraisIcon(){
	fraisPaper = Raphael(document.getElementById("icone-frais"),25,25);
	iconeFrais = fraisPaper.path("M11.166,23.963L22.359,17.5c1.43-0.824,1.43-2.175,0-3L11.166,8.037c-1.429-0.826-2.598-0.15-2.598,1.5v12.926C8.568,24.113,9.737,24.789,11.166,23.963z").attr({fill: "#FFF", stroke: "none"});
}

function tournerFraisIcon(r){
	iconeFrais.animate({"transform":"r"+r}, 200, "<>");
}

function renderPersonneListeIcon(){
	listePersonnePaper = Raphael(document.getElementById("icone-personne-liste"),25,25);
	iconePersonneListe = listePersonnePaper.path("M11.166,23.963L22.359,17.5c1.43-0.824,1.43-2.175,0-3L11.166,8.037c-1.429-0.826-2.598-0.15-2.598,1.5v12.926C8.568,24.113,9.737,24.789,11.166,23.963z").attr({fill: "#FFF", stroke: "none"});
}

function tournerPersonneListeIcon(r){
	iconePersonneListe.animate({"transform":"r"+r}, 200, "<>");
}

// Affiche l'icône du nombre de personnes
function renderPersonneIcon(){
	paper = Raphael(document.getElementById('icone-personnes'),100, 100);
	iconePersonnes = paper.path('M21.066,20.667c1.227-0.682,1.068-3.311-0.354-5.874c-0.611-1.104-1.359-1.998-2.109-2.623c-0.875,0.641-1.941,1.031-3.102,1.031c-1.164,0-2.231-0.391-3.104-1.031c-0.75,0.625-1.498,1.519-2.111,2.623c-1.422,2.563-1.578,5.192-0.35,5.874c0.549,0.312,1.127,0.078,1.723-0.496c-0.105,0.582-0.166,1.213-0.166,1.873c0,2.938,1.139,5.312,2.543,5.312c0.846,0,1.265-0.865,1.466-2.188c0.2,1.314,0.62,2.188,1.461,2.188c1.396,0,2.545-2.375,2.545-5.312c0-0.66-0.062-1.291-0.168-1.873C19.939,20.745,20.516,20.983,21.066,20.667zM15.5,12.201c2.361,0,4.277-1.916,4.277-4.279S17.861,3.644,15.5,3.644c-2.363,0-4.28,1.916-4.28,4.279S13.137,12.201,15.5,12.201z').attr({fill: "#D97D02", stroke: "none"}).scale(3.3,3.3,0,0).click(picker);
	gugusGauche = paper.path('M6.906,14.914c1.939,0,3.512-1.573,3.512-3.513c0-1.939-1.573-3.513-3.512-3.513c-1.94,0-3.514,1.573-3.514,3.513C3.392,13.341,4.966,14.914,6.906,14.914zM9.441,21.536c-1.593-0.885-1.739-3.524-0.457-6.354c-0.619,0.346-1.322,0.553-2.078,0.553c-0.956,0-1.832-0.321-2.549-0.846c-0.616,0.513-1.229,1.247-1.733,2.154c-1.167,2.104-1.295,4.262-0.287,4.821c0.451,0.257,0.925,0.064,1.414-0.407c-0.086,0.479-0.136,0.996-0.136,1.538c0,2.412,0.935,4.361,2.088,4.361c0.694,0,1.039-0.71,1.204-1.796c0.165,1.079,0.509,1.796,1.201,1.796c1.146,0,2.089-1.95,2.089-4.361c0-0.432-0.04-0.841-0.097-1.233C9.874,21.721,9.651,21.656,9.441,21.536z').attr({fill: "#D97D02", stroke: "none"}).scale(3.3,3.3,0,0).click(picker);
		 gugusDroite = paper.path('M24.094,14.914c1.938,0,3.512-1.573,3.512-3.513c0-1.939-1.573-3.513-3.512-3.513c-1.94,0-3.513,1.573-3.513,3.513C20.581,13.341,22.153,14.914,24.094,14.914zM28.374,17.043c-0.502-0.907-1.116-1.641-1.732-2.154c-0.718,0.526-1.594,0.846-2.546,0.846c-0.756,0-1.459-0.207-2.076-0.55c0.496,1.093,0.803,2.2,0.861,3.19c0.093,1.516-0.381,2.641-1.329,3.165c-0.204,0.117-0.426,0.183-0.653,0.224c-0.056,0.392-0.095,0.801-0.095,1.231c0,2.412,0.935,4.361,2.088,4.361c0.694,0,1.039-0.71,1.204-1.796c0.163,1.079,0.508,1.796,1.199,1.796c1.146,0,2.09-1.95,2.09-4.361c0-0.542-0.052-1.06-0.139-1.538c0.492,0.472,0.966,0.667,1.418,0.407C29.671,21.305,29.541,19.146,28.374,17.043z').attr({fill: "#D97D02", stroke: "none"}).scale(3.3,3.3,0,0).click(picker);
		  text = paper.text(51,55, '2').attr({fill: "#FFF", "font-size" : 20}).click(picker);

}

function iconePersonneSetText(nbPersonnes){
	var valeurAvant = text.attr('text');
	var results = SpinningWheel.getSelectedValues();
		var nbPersonnes = parseInt(results.values.join(''));
		
		if(nbPersonnes == 0){
			nbPersonnes = 1;
			SpinningWheel.scrollToValue(1,1);
			}
	text.attr({text : nbPersonnes});
	calculSimple();
	if(valeurAvant<=nbPersonnes)
	animationTextBounce();
	else
	animationTextShrink();
}