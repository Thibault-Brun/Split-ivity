function choixFrais(el){

var id=personnes.liste.getIdByElement(el.parent()[0]);
console.log(id);

$.ajax({
url: "../Split-ivity/fraisParPersonne.html",
type:"GET",

success:function(data){

console.log(data);
$("body").html(data);
$("body").append(activiteDefaut.listPersonne[id].nom);

$("#les_frais").append();


var frais=JSON.stringify(activiteDefaut.listFrais);
var fraisJson=JSON.parse(frais);
console.log(fraisJson);



 $('#liste_frais').html(Mustache.render(data, {lesFrais : fraisJson}));
 /*
var output = Mustache.render(data, frais);
$("#liste_frais").html(output);
*/
},
error:function(){
console.log("error");
}

});

}