function calculSimple(){
			
			var total = $("#totalInput").val();
			if(total == "" || total==null || total===false) total = 0;
			var nbPersonnes =  iconeNbPersonnes.label.getText();
			
			var resultat = (total/nbPersonnes).toFixed(2);
			var reste = (total-resultat*nbPersonnes).toFixed(2);
			
			if(typeof reste == "string" && reste != 0){
	document.getElementById('result').innerHTML = '<span class="colored">'+(nbPersonnes-1)+" x "+resultat+" €</span><span class='red'> + 1 x "+(parseFloat(reste)+parseFloat(resultat)).toFixed(2)+" €</span>";
			iconeNbPersonnes.droite.attr({fill:'#AF0104'});
			}
			else{
	document.getElementById('result').innerHTML = document.getElementById('result').innerHTML = '<span class="colored">'+nbPersonnes+" x "+resultat+" €</span>";
			iconeNbPersonnes.droite.attr({fill:'#D97D02'});
			}
}
