function ajoutFrais(){
			
	if ($.trim($("#newNomFrais").val()) && $.trim($("#newPrixFrais").val())) {
		
		var newFrais = new Frais($("#newNomFrais").val(), $("#newPrixFrais").val(), 1);
		
		$("#listeFrais").append('<li><div class="nomFrais">'+newFrais.intitule+'</div><div class="qteFrais">'+newFrais.quantite+'</div><div class="prixFrais">'+newFrais.montant+'</div></li>');
		
		$("#newNomFrais").val('');
		$("#newPrixFrais").val('');
	}
}
