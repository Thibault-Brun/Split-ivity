/*function choixFrais(el){

var id=personnes.liste.getIdByElement(el.parent()[0]);
console.log(id);

$.ajax({
url: "fraisParPersonne.html",
type:"GET",

success:function(data){

console.log(data);
$("body").html(data);
$("body").append(activiteDefaut.listPersonne[id].nom);


var frais=JSON.stringify(activiteDefaut.listFrais);
var fraisJson=JSON.parse(frais);
console.log(fraisJson);

$('#liste_frais').html(Mustache.render(data, {lesFrais : fraisJson}));
 
},
error:function(){
console.log("error");
}

});

}*/

function ajoutPersAuFrais(id,idPers){
activiteDefaut.affecterPersonne(activiteDefaut.listPersonne[idPers], id);
}

function suppPersAuFrais(id,idPers){
activiteDefaut.desaffecterPersonne(activiteDefaut.listPersonne[idPers], id);
}

