function ajoutPersonne(){
	
	var nom = $("input[name=nomPersonne].editable").first().val();
	
	if ( $.trim(nom) != "") {
	idPersonne=activiteDefaut.listPersonne.length;
	//personnes.liste.fantome.nom.blur('modifierNomPersonne();');
	personnes.liste.fantome.nom.attr('onfocus', 'prevNomPersonne();');
	personnes.liste.fantome.nom.attr('onblur', 'modifierNomPersonne();');
		// personnes.liste.fantome.nom.onblur = modifierNomPersonne;	
		
		//recupere l id de l elem et de l objet
	
		// UI
		personnes.liste.fantome.nom.removeClass("editable");
		personnes.liste.fantome.removeClass('fantome');
		personnes.liste.fantome.total.removeClass("hidden");
		personnes.liste.fantome.details.removeClass("hidden");

		personnes.liste.ajouter(personnes.liste.fantome,idPersonne);
		$.get("./formulairePersonnes.html", function(data){$
			personnes.liste.prepend(data);
			Builder.personneFantome();
			personnes.liste.fantome.nom.focus();
		});
		// Metier
		activiteDefaut.ajouterPersonne(nom);
		
		/*activiteDefaut.affecterPersonne(['guigui'],1);
		console.log(activiteDefaut.listPersonne);
		console.log(activiteDefaut.calculeMontantPersonne('guigui'));
		console.log(activiteDefaut);*/
	}
}
function prevNomPersonne(){
lastElementName=document.activeElement;
}

function modifierNomPersonne(){
	activiteDefaut.modifierPersonne(personnes.liste.getIdByElement(lastElementName.parentElement), lastElementName.value);
}

function supprimerPersonne(){


}