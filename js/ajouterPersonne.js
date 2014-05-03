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
			personnes.liste.prepend(data);
			Builder.personneFantome();
			personnes.liste.fantome.nom.focus();
		});

		activiteDefaut.ajouterPersonne(nom);
		
		var nombrePersonne=activiteDefaut.listPersonne.length;
		personnes.bouton.compteur.label.setText(nombrePersonne);
	}
}

function modifierNomPersonne(el){
	activiteDefaut.modifierPersonne(personnes.liste.getIdByElement(el.parentElement), el.value);
}

function supprimerPersonne(id){

activiteDefaut.supprimerPersonne(id);
var nombrePersonne=activiteDefaut.listPersonne.length;
	$("#nombre-personne").html(nombrePersonne);
}