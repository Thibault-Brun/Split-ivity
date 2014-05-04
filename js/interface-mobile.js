$( document ).ready(function(){
	Touch.tabSwipe();
	Builder.header();
	Builder.tabs();
	Builder.container();
	container.simple();
});

Interface = {
	listeFraisPersonnesOpen : false,
	splitivityColor : '#D97D02',
	renderIconeNbPersonne : function(){
		var paper = Raphael(iconeNbPersonnes[0],100, 100);
		iconeNbPersonnes.milieu 	= 	paper.path(RAPHAEL_bonhommes.centre).attr({fill: Interface.splitivityColor, stroke: "none"}).scale(3.3,3.3,0,0);
		iconeNbPersonnes.gauche 	= 	paper.path(RAPHAEL_bonhommes.gauche).attr({fill: Interface.splitivityColor, stroke: "none"}).scale(3.3,3.3,0,0);
		iconeNbPersonnes.droite 	= 	paper.path(RAPHAEL_bonhommes.droite).attr({fill: Interface.splitivityColor, stroke: "none"}).scale(3.3,3.3,0,0);
		iconeNbPersonnes.label 		= 	paper.text(51,55, '2').attr({fill: "#FFF", "font-size" : 20});
	},
	enterPressed : function(e,el){
		if(e.which == 13){
	        $(el).blur();
	    }
	},
	renderFraisPhoto :function(el){
		var paper = Raphael(el,35,35);
		paper.path(RAPHAEL_appareil_photo).attr({fill : "#FFF", stroke : "none"}).click(function(e){
			this.animate({transform:"s1.5,1.5,17,17"},300,'elastic', function(){
				this.animate({transform:"s1,1,17,17"},300,'elastic');
			});
			e.preventDefault();
			e.stopPropagation();
		});
	},
	renderPersonnesCompteur :function(el){
		var paper = Raphael(el,50,50);
		personnes.bouton.compteur.icone = {
			milieu 	: paper.path(RAPHAEL_bonhommes.centre).attr({fill: "#FFF", stroke: "none"}).scale(1.5,1.5,0,0),
			gauche 	: paper.path(RAPHAEL_bonhommes.gauche).attr({fill: "#FFF", stroke: "none"}).scale(1.5,1.5,0,0),
			droite 	: paper.path(RAPHAEL_bonhommes.droite).attr({fill: "#FFF", stroke: "none"}).scale(1.5,1.5,0,0)
		};
		personnes.bouton.compteur.label = paper.text(23,27, '').attr({fill: "#78BD9B", "font-size" : 15});
		personnes.bouton.compteur.label.setText = function(text){
			//var valeurPrec = personnes.bouton.compteur.label.attr('text');
			if(text>9)
				personnes.bouton.compteur.label.attr({"font-size" : 13});
			else
				personnes.bouton.compteur.label.attr({"font-size" : 15});
			personnes.bouton.compteur.label.attr({'text':text});
		}
	},
	renderIconeDetailsPersonne : function(el){
		var paper = Raphael(el,35, 35);
		personnes.liste.fantome.icone = {
		top : paper.path(RAPHAEL_hamburger_button.top).attr({fill: Interface.splitivityColor, stroke: "none"}),
		middle : paper.path(RAPHAEL_hamburger_button.middle).attr({fill: Interface.splitivityColor, stroke: "none"}),
		bottom : paper.path(RAPHAEL_hamburger_button.bottom).attr({fill: Interface.splitivityColor, stroke: "none"}),
		open : false
		};
	},
	openIconeDetailsPersonne : function(icone){
		if(icone.open){
		icone.top.animate({transform:"r0t0,0"},500,'elastic');	
		icone.middle.animate({opacity:"1"},100);
		icone.bottom.animate({transform:"r0t0,0"},500,'elastic');
			icone.open = false;
		}
		else{
		icone.top.animate({transform:"r-45t0,10"},500,'elastic');
		icone.middle.animate({opacity:"0"},100);
		icone.bottom.animate({transform:"r45t0,-9"},500,'elastic');
		icone.open = true;
		}
	},
	ouvrirListe : function(el){
		tabs.up();
		container.up();
		el.bouton.addClass('active');
		el.bouton.icone.tourner('90');
		el.liste.slideDown(300);
		el.liste.css('top',el.bouton.outerHeight()+10);
		if(el == frais){
			Animation.upTo(personnes.bouton, container.offset().top);
			personnes.bouton.hide();
		}
		else{
			frais.bouton.hide();
			Animation.upTo(frais.bouton, container.offset().top);
		}
		
	},
	fermerListe : function(el){
		tabs.down();
		container.down();
		el.bouton.removeClass('active');
		el.bouton.icone.tourner('0');	
		el.liste.slideUp(0);
		if(el == frais){
			personnes.bouton.show();
			Animation.downTo(personnes.bouton, container.offset().top);
			Animation.downTo(frais.bouton, container.offset().top);
		}
		else{
			frais.bouton.show();
			Animation.downTo(frais.bouton, container.offset().top);
			Animation.downTo(personnes.bouton, container.offset().top);
		}
	},
	picker : function(){
		Touch.noTabSwipe();
		Touch.menuOff();
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
			iconeNbPersonnes.up();
			animation_iconeNbPersonnesBounce();},
		200);
		
		// Sélection de la valeur actuelle de la roulette
		for(i=nbrSliders-1; i>=0; i--)
			SpinningWheel.scrollToValue(i,digits[i]);
	},
	ajoutPersonne : function(id){
		
		nom = personnes.liste.fantome.nom.val();

		if ( $.trim(nom) != "") {
			personnes.liste.fantome.nom.attr('onblur', 'modifierNomPersonne(this);');
			personnes.liste.fantome.removeClass('fantome');
			personnes.liste.fantome.total.removeClass("hidden");
			personnes.liste.fantome.details.removeClass("hidden");

			personnes.liste.ajouter(personnes.liste.fantome[0],id);
			personnes.liste.fantome.disabled = true;
			$.get("./formulairePersonnes.html", function(data){
				personnes.liste.prepend(data);
				Builder.personneFantome();
				personnes.liste.fantome.nom.focus();
			});

			activiteDefaut.ajouterPersonne(nom);

			var nombrePersonne=activiteDefaut.listPersonne.length;
			personnes.bouton.compteur.label.setText(nombrePersonne);
		}
	},
	ajoutPersAuFrais : function(id,idPers){
		activiteDefaut.affecterPersonne(idPers, id);
		
		//var totalPersonne = activiteDefaut.calculeMontantPersonne(idPers);
		//$(personnes.liste.getElementById(idPers)).find("div[name='totalPersonne']").html(totalPersonne+"€");
		
		$.each(activiteDefaut.listPersonne, function(key, value){
			var totalPersonne = activiteDefaut.calculeMontantPersonne(value.identifiant);
			$(personnes.liste.getElementById(value.identifiant)).find("div[name='totalPersonne']").html(totalPersonne+"€");
		});
		/*if(activiteDefaut.listConsommation[id][1].length>1){
		console.log("plusierur personnes");
			$("#plusieursPersonnes").addClass("activeLogoPersonnes");
		}*/
	},
	suppPersAuFrais : function(id,idPers){
		activiteDefaut.desaffecterPersonne(idPers, id);
		$.each(activiteDefaut.listPersonne, function(key, value){
			var totalPersonne = activiteDefaut.calculeMontantPersonne(value.identifiant);
			$(personnes.liste.getElementById(value.identifiant)).find("div[name='totalPersonne']").html(totalPersonne+"€");
		});
	}

};
function pickerDone(){
	Touch.tabSwipe();
	Touch.menu();
	iconeNbPersonnes.down();
	iconeNbPersonnes.label.update();
		calculSimple();
}

function pickerCancel(){
	Touch.tabSwipe();
	Touch.menu();
	iconeNbPersonnes.down();
	iconeNbPersonnes.label.update();
}

function interface_renderListeButtonIcon(iconContainer){
	var paperContainer = Raphael(iconContainer,25,25);
	return paperContainer.path("M11.166,23.963L22.359,17.5c1.43-0.824,1.43-2.175,0-3L11.166,8.037c-1.429-0.826-2.598-0.15-2.598,1.5v12.926C8.568,24.113,9.737,24.789,11.166,23.963z").attr({fill: "#FFF", stroke: "none"});
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