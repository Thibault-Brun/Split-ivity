function choixFrais(el){
var id=personnes.liste.getIdByElement(el.parent()[0]);
console.log(id);
$.ajax({
url: "../Split-ivity/fraisParPersonne.html",
type:"POST",

success:function(data){

console.log("reussi");
console.log(data);
$("body").html(data);
$("body").append(activiteDefaut.listPersonne[id].nom);

$("#les_frais").append();


var frais=JSON.stringify(activiteDefaut.listFrais);

var fraisJson=JSON.parse(frais);

console.log(fraisJson);


var template = $("#les_frais").html();
var output = Mustache.render(template, frais);
$("#liste_frais").html(output);

},
error:function(){
console.log("error");
}

});

}