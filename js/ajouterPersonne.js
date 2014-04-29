function ajoutPersonne(){
	
	var nom = $("input[name=nomPersonne].editable").first().val();
	
	if ( $.trim(nom) != "") {
	var id=activiteDefaut.listPersonne.length;
		personnes.liste.fantome.nom.onfocus = modifierNomPersonne;	
		
		// UI
		personnes.liste.fantome.nom.removeClass("editable");
		personnes.liste.fantome.removeClass('fantome');
		personnes.liste.fantome.total.removeClass("hidden");
		personnes.liste.fantome.details.removeClass("hidden");

		personnes.liste.ajouter(personnes.liste.fantome,id);
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

function modifierNomPersonne(){
	var nom = document.activeElement.value;
	
	activiteDefaut.modifierPersonne($(this),nom);
	console.log(nom);
	
}

function supprimerPersonne(){


}