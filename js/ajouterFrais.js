function ajoutFrais(){
	var frais = $("input[name=nomFrais].editable").first().val();
	var prix = $("input[name=prixFrais].editable").first().val();
	var qte = $("input[name=quantiteFrais].editable").first().val();
	
	if ( $.trim(frais) !="" && ($.trim(prix) !="" && $.trim(qte) !="")) {		
		
		// UI
		$(".nomFrais.editable").removeClass("editable");
		$(".prixFrais.editable").removeClass("editable");
		$(".quantiteFrais.editable").removeClass("editable");
		$.get("./formulaireFrais.html", function(data){$('#listeFrais').prepend(data);});
		$("input[name=quantiteFrais].editable").first().focus();
		
		// Metier
		activiteDefaut.ajouterFrais(frais, prix, qte);
		
		console.log(activiteDefaut);
		console.log(activiteDefaut.listFrais);
		
		/*nbFrais=nbFrais+1;
		for (var i = 0 ; i < $("input[name=quantiteFrais].editable").first().val()-1 ; i++) {
			frais = new Frais($("input[name=nomFrais].editable").first().val(), $("input[name=prixFrais].editable").first().val(), nbFrais);
			console.log(frais);
		}*/
	}
}


