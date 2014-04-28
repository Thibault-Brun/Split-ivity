function ajoutFrais(){
	var frais = $("input[name=nomFrais].editable").first().val();
	var prix = $("input[name=prixFrais].editable").first().val();
	var qte = $("input[name=quantiteFrais].editable").first().val();
	
	if ( $.trim(frais) !="" && ($.trim(prix) !="" && $.trim(qte) !="")) {		
		
		// UI
		var tabID = activiteDefaut.ajouterFrais(frais, prix, qte);
		$(".tabIDFrais.editable").first().val(tabID);
		
		$(".quantiteFrais.editable")[0].setAttribute('onblur', 'modifQte();'
		$(".nomFrais.editable")[0].setAttribute('onblur', 'modifFrais();');
		$(".prixFrais.editable")[0].setAttribute('onblur', 'modifFrais();');
		
		$(".quantiteFrais.editable").removeClass("editable");
		$(".nomFrais.editable").removeClass("editable");
		$(".prixFrais.editable").removeClass("editable");
		$(".tabIDFrais.editable").removeClass("editable");
		
		$.get("./formulaireFrais.html", function(data){$('#listeFrais').prepend(data);});
		$("input[name=quantiteFrais].editable").first().focus();		
		
		/*nbFrais=nbFrais+1;
		for (var i = 0 ; i < $("input[name=quantiteFrais].editable").first().val()-1 ; i++) {
			frais = new Frais($("input[name=nomFrais].editable").first().val(), $("input[name=prixFrais].editable").first().val(), nbFrais);
			console.log(frais);
		}*/
	}
}

function modifFrais() {
	alert("Test onblur");
}

function modifQte() {

}