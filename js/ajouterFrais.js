function ajoutFrais(){
	
	var nom = frais.liste.fantome.nom.val();
	var prix = frais.liste.fantome.prix.val();
	var qte = frais.liste.fantome.quantite.val();
	
	if ( $.trim(nom) !="" && ($.trim(prix) !="" && $.trim(qte) !="")) {		
	
		frais.liste.fantome.quantite.attr('onfocus', 'precQteFrais(this);');
		frais.liste.fantome.quantite.attr('onblur', 'modifierQteFrais(this);');
		frais.liste.fantome.nom.attr('onblur', 'modifierNomFrais(this);');
		frais.liste.fantome.prix.attr('onblur', 'modifierPrixFrais(this);');
		
		frais.liste.fantome.removeClass('fantome');
		
		var tabID = activiteDefaut.ajouterFrais(nom, prix, qte);
		frais.liste.ajouter(frais.liste.fantome[0],tabID);
		$.get("./formulaireFrais.html", function(data){
			$('#listeFrais').prepend(data);
			Builder.fraisFantome();
			frais.liste.fantome.nom.focus();
		});
	}
}

function precQteFrais(el){
	lastQte = el.value;
}

function modifierQteFrais(el){
	var qte = el.value;
	var res = qte - lastQte;
	
	if (qte >= 1 && qte <= 99) {
	
		if (res > 0) {
			var nom = el.parentElement.getElementsByTagName("input")[1].value;
			var prix = el.parentElement.getElementsByTagName("input")[2].value;
			var tabID = activiteDefaut.ajouterFrais(nom, prix, res);
			frais.liste.ajouter(el.parentElement.parentElement,tabID);
		}
		else if(res < 0) {
			var listeID = frais.liste.getAllIdByElement(el.parentElement.parentElement);

			res *= -1;
			var delID = listeID.splice(listeID.length-res, res);
			
			activiteDefaut.supprimerFrais(delID);
			frais.liste.supprimer(el.parentElement.parentElement, res);
			// TODO Supprimer de frais.liste.frais
		}
	}
	else {
		el.value = lastQte;
	}
}


function modifierNomFrais(el){
	var nom = el.parentElement.getElementsByTagName("input")[1].value;
	
	if ($.trim(nom) !="") {
		var listeID = frais.liste.getAllIdByElement(el.parentElement.parentElement);
		activiteDefaut.modifierFraisIntitule(listeID, nom);
	}
}

function modifierPrixFrais(el){
	var prix = el.parentElement.getElementsByTagName("input")[2].value;
	
	if ($.trim(prix) !="") {
		var listeID = frais.liste.getAllIdByElement(el.parentElement.parentElement);
		activiteDefaut.modifierFraisMontant(listeID, prix);
	}
}

function supprimerFrais(el){
	var listeID = frais.liste.getAllIdByElement(el.parentElement);
	activiteDefaut.supprimerFrais(listeID);
	frais.liste.supprimer(el.parentElement, listeID.length);
}