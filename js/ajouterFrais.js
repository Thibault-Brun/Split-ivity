function ajoutFrais(){
	
	var nom = frais.liste.fantome.nom.val();
	var prix = frais.liste.fantome.prix.val();
	var qte = frais.liste.fantome.quantite.val();
	
	if ( $.trim(nom) !="" && ($.trim(prix) !="" && $.trim(qte) !="")) {		
	
		frais.liste.fantome.quantite.attr('onfocus', 'precQteFrais(this);');
		frais.liste.fantome.quantite.attr('onblur', 'modifierFrais(this);');
		frais.liste.fantome.nom.attr('onblur', 'modifierFrais(this);');
		frais.liste.fantome.prix.attr('onblur', 'modifierFrais(this);');
		
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

function modifierFrais(el){
	/*var qte = lastElementQte.value;
	var res = qte - lastQte;
	
	if (qte >= 1 && qte <= 99) {
	
		if (res > 0) {
			var frais = lastElementQte.parentElement.getElementsByTagName("input")[1].value;
			var prix = lastElementQte.parentElement.getElementsByTagName("input")[2].value;
			var tabID = activiteDefaut.ajouterFrais(frais, prix, res);
			
			lastElementQte.parentElement.getElementsByTagName("input")[3].value += ',' +tabID;
		}
		else if(res < 0) {
			var listeID = lastElementQte.parentElement.getElementsByTagName("input")[3].value;
			var reg = new RegExp("[,]+", "g");
			var tabID = listeID.split(reg);
			
			res *= -1;
			var delID = tabID.splice(tabID.length-res, tabID.length);
			lastElementQte.parentElement.getElementsByTagName("input")[3].value = tabID;
			
			for (var i in delID) {
				activiteDefaut.supprimerFrais(activiteDefaut.listFrais[delID[i]]);
			}
			
			console.log(activiteDefaut.listFrais);
		}
	}
	else {
		lastElementQte.value = lastQte;
	}
	//activiteDefaut.modifierPersonne(personnes.liste.getIdByElement(el.parentElement), el.value);*/
}

function supprimerFrais(){
}


/*
function ajoutFrais(){
	var nom = frais.liste.fantome.nom.val();
	var prix = frais.liste.fantome.prix.val();
	var qte = frais.liste.fantome.quantite.val();
	
	if ( $.trim(nom) !="" && ($.trim(prix) !="" && $.trim(qte) !="")) {		
		
		// UI
		var tabID = activiteDefaut.ajouterFrais(nom, prix, qte);
		
		// SUREMENT A ENLEVER :P
		// frais.liste.fantome.quantite.onfocus = prevQte;
		// frais.liste.fantome.nom.onfocus = prevFrais;
		// frais.liste.fantome.prix.onfocus = prevPrix;
		
		frais.liste.fantome.quantite.onblur = modifQte;
		frais.liste.fantome.nom.onblur = modifQte;
		frais.liste.fantome.prix.onblur = modifQte;
		
		frais.liste.fantome.removeClass("fantome");

		frais.liste.ajouter(frais.liste.fantome, tabID);
		
		$.get("./formulaireFrais.html", function(data){
			frais.liste.prepend(data);
			Builder.fraisFantome();

			// A passer à fantome.nom quand la
			// barre de + - sera ajoutée
			frais.liste.fantome.quantite.focus();
		});
				
	}
}

function prevFrais() {
	lastElementFrais = document.activeElement.parentElement;
}

function modifFrais() {
	var listeID = lastElementFrais.getElementsByTagName("input")[3].value;
	
	
}

function prevQte() {
	lastElementQte = document.activeElement;
	lastQte = lastElementQte.value;
}

function modifQte() {
	var qte = lastElementQte.value;
	var res = qte - lastQte;
	
	if (qte >= 1 && qte <= 99) {
	
		if (res > 0) {
			var frais = lastElementQte.parentElement.getElementsByTagName("input")[1].value;
			var prix = lastElementQte.parentElement.getElementsByTagName("input")[2].value;
			var tabID = activiteDefaut.ajouterFrais(frais, prix, res);
			lastElementQte.parentElement.getElementsByTagName("input")[3].value += ',' +tabID;
		}
		else if(res < 0) {
			var listeID = lastElementQte.parentElement.getElementsByTagName("input")[3].value;
			var reg = new RegExp("[,]+", "g");
			var tabID = listeID.split(reg);
			
			res *= -1;
			var delID = tabID.splice(tabID.length-res, tabID.length);
			lastElementQte.parentElement.getElementsByTagName("input")[3].value = tabID;
			
			for (var i in delID) {
				activiteDefaut.supprimerFrais(activiteDefaut.listFrais[delID[i]]);
			}
			
			console.log(activiteDefaut.listFrais);
		}
	}
	else {
		lastElementQte.value = lastQte;
	}
}*/