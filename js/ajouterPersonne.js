function ajoutPersonne(){
			
	if ($.trim($("#newNomPersonne").val())) {
		
		var newPersonne = new Personne($("#newNomPersonne").val());
		
		$("#listePersonne").append('<li><div class="nomPersonne">'+newPersonne.nom+'</div></li>');
		
		$("#newNomPersonne").val('');
	}
}
