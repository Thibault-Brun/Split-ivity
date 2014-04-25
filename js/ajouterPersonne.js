function ajoutPersonne(){
	
	var nom = $("input[name=nomPersonne].editable").first().val();
	
	if ( $.trim(nom) != "") {
	
		// UI
		$(".nomPersonne.editable").removeClass("editable");
		$(".totalPersonne.hidden").removeClass("hidden");
		$(".detailsPersonne.hidden").removeClass("hidden");
		$.get("./formulairePersonne.html", function(data){$('#listePersonne').prepend(data);});
		$("input[name=nomPersonne].editable").first().focus();
		
		// Metier
		activiteDefaut.ajouterPersonne(nom);
		/*activiteDefaut.affecterPersonne(['guigui'],1);
		console.log(activiteDefaut.listPersonne);
		console.log(activiteDefaut.calculeMontantPersonne('guigui'));
		console.log(activiteDefaut);*/
	}
}

