
function lireDonnee(nomFic){

$.ajax({
	url: "./ressources/dictionnaires/dico_prenoms.json",
	type: "GET",
	dataType: "json",
	success: function(data) {
	alert(data);
              console.log(data); },
	error: function() {
              alert('La requête n\'a pas abouti'); }
    }); 
}

