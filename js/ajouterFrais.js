function ajoutFrais(){
			
	if ( $.trim($("input[name=nomFrais].editable").first().val())!="" && $.trim($("input[name=prixFrais].editable").first().val())!="" && $.trim($("input[name=qteFrais].editable").first().val())!="") {
			
		formulaire = '<li class="formFrais">'+$(".formFrais").first().html()+'</li>';
		alert(formulaire);
			
		$("#nomFrais.editable").removeClass("editable");
		$("#prixFrais.editable").removeClass("editable");
		$("#qteFrais.editable").removeClass("editable");
		$("#listeFrais").prepend(formulaire);
		
		$("input[name=qteFrais].editable").first().focus();
	}
}


