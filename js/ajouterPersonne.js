function ajoutPersonne(){
			
	if ( $.trim($("input[name=nomPersonne].editable").first().val()) !="") {
			
		$(".nomPersonne.editable").removeClass("editable");
		$(".totalPersonne.hidden").removeClass("hidden");
		$(".detailsPersonne.hidden").removeClass("hidden");
		
		$.get("./formulairePersonne.html", function(data){$('#listePersonne').prepend(data);});
		$("input[name=nomPersonne].editable").first().focus();
	}
}


