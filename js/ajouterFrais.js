function ajoutFrais(){
	var frais = $("input[name=nomFrais].editable").first().val();
	var prix = $("input[name=prixFrais].editable").first().val();
	var qte = $("input[name=quantiteFrais].editable").first().val();
	
	if ( $.trim(frais) !="" && ($.trim(prix) !="" && $.trim(qte) !="")) {		
		
		// UI
		var tabID = activiteDefaut.ajouterFrais(frais, prix, qte);
		$(".tabIDFrais.editable").first().val(tabID);
		
		$(".quantiteFrais.editable")[0].setAttribute('onfocus', 'prevQte()');
		$(".quantiteFrais.editable")[0].setAttribute('onblur', 'modifQte();');
		$(".nomFrais.editable")[0].setAttribute('onblur', 'modifFrais();');
		$(".prixFrais.editable")[0].setAttribute('onblur', 'modifFrais();');
		
		$(".quantiteFrais.editable").removeClass("editable");
		$(".nomFrais.editable").removeClass("editable");
		$(".prixFrais.editable").removeClass("editable");
		$(".tabIDFrais.editable").removeClass("editable");
		
		$.get("./formulaireFrais.html", function(data){$('#listeFrais').prepend(data);});
		$("input[name=quantiteFrais].editable").focus();		
	}
}

function modifFrais() {
	
}

function prevQte() {
	lastElementQte = document.activeElement;
	lastQte = lastElementQte.value;
}

function modifQte() {
	var qte = lastElementQte.value;
	var res = qte - lastQte;
	
	if (res > 0) {
		var frais = lastElementQte.parentElement.getElementsByTagName("input")[1].value;
		var prix = lastElementQte.parentElement.getElementsByTagName("input")[2].value;
		var tabID = activiteDefaut.ajouterFrais(frais, prix, res);
		lastElementQte.parentElement.getElementsByTagName("input")[3].value += ',' +tabID;
	}
	else if(res < 0) {
		/*for (var i = 0 ; i > res ; i--) {
			activiteDefaut.
		}*/
	}
	
}