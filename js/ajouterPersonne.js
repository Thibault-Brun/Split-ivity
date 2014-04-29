function ajoutPersonne(){
	
	var nom = $("input[name=nomPersonne].editable").first().val();
	
	if ( $.trim(nom) != "") {
	 //idADonne=activiteDefaut.listPersonne.length;
		$(".nomPersonne.editable")[0].setAttribute('onfocus','modifierNomPersonne();');	
	//	$(".nomPersonne.editable")[0].setAttribute('id',idADonne);	
		//personnes.liste.add($(".nomPersonne.editable")[0],id)
		// UI
		$(".nomPersonne.editable").removeClass("editable");
		$(".totalPersonne.hidden").removeClass("hidden");
		$(".detailsPersonne.hidden").removeClass("hidden");
		$.get("./formulairePersonnes.html", function(data){$('#listePersonnes').prepend(data);});
		$("input[name=nomPersonne].editable").first().focus();
		
		
	
		$(".hidden").removeClass("hidden");
		
		
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
	activiteDefaut.modifierPersonne(document.activeElement.id,nom);

}

function supprimerPersonne(){


}