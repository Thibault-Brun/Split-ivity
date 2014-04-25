function ajoutFrais(){
			
	if ( $.trim($("input[name=nomFrais].editable").first().val()) !="" && ($.trim($("input[name=prixFrais].editable").first().val())!="" && $.trim($("input[name=quantiteFrais].editable").first().val())!="")) {
			
		$(".nomFrais.editable").removeClass("editable");
		$(".prixFrais.editable").removeClass("editable");
		$(".quantiteFrais.editable").removeClass("editable");
		
		
		$.get("./formulaireFrais.html", function(data){$('#listeFrais').prepend(data);});
		
		$("input[name=quantiteFrais].editable").first().focus();
	}
}


