function ajoutPersonne(){
	
	var nom = $("input[name=nomPersonne]").first().val();
	
	if ( $.trim(nom) != "") {
	
		personnes.liste.fantome.nom.attr('onblur', 'modifierNomPersonne(this);');
		
		personnes.liste.fantome.removeClass('fantome');
		personnes.liste.fantome.total.removeClass("hidden");
		personnes.liste.fantome.details.removeClass("hidden");

		personnes.liste.ajouter(personnes.liste.fantome[0],Personne.nextId);
		personnes.liste.fantome.disabled = true;
		$.get("./formulairePersonnes.html", function(data){
			$('#listePersonnes').prepend(data);
			Builder.personneFantome();
			personnes.liste.fantome.nom.focus();
		});

		activiteDefaut.ajouterPersonne(nom);
		
	}
}

function modifierNomPersonne(el){
	activiteDefaut.modifierPersonne(personnes.liste.getIdByElement(el.parentElement), el.value);
}

function supprimerPersonne(){
}