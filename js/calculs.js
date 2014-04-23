function calculSimple(nbPersonnes, total){
			
			var total = document.getElementById("total").value;
			if(total == "") total = 0;
			var nbPersonnes =  text.attr('text');
			
			var resultat = (total/nbPersonnes).toFixed(2);
			var reste = (total-resultat*nbPersonnes).toFixed(2);
			
			if(typeof reste == "string" && reste != 0){
	document.getElementById('result').innerHTML = '<span class="colored">'+(nbPersonnes-1)+" x "+resultat+" € + 1 x "+(parseFloat(reste)+parseFloat(resultat)).toFixed(2)+" €</span>";
			}
			else{
	document.getElementById('result').innerHTML = document.getElementById('result').innerHTML = '<span class="colored">'+nbPersonnes+" x "+resultat+" €</span>";

			}
}
