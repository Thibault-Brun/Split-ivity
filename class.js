var extendClass = function(child, parent) {
    var Surrogate = function() {};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
};

function Personne (arg1) {
    this.nom = arg1;
};

function Frais (arg1, arg2, arg3) {
    this.intitule = arg1;
    this.montant = arg2;
    this.quantite = arg3;
}

// classe Packages
function PackageDefault (arg1) {
    this.listActivite =[];
    this.nom = arg1;
};
PackageDefault.prototype.getInfo = function() {
        return this.nom;
};

function PackageSpecifique (arg1) {
	PackageDefault.call(this, arg1);
    this.listPersonne =[];
    this.totalPackage = 0;
};
// fin classe Packages

//classe Activites
function Activite (arg1){
	this.nom = arg1;
	this.DateCreation = new Date();
	this.montantGlobal = 0;
}
Activite.prototype.getDate = function() {
    return this.DateCreation;
};

function ActiviteSimple (arg1, arg2, arg3) {
	Activite.call(this, arg1);
    this.nbPersonne = arg2;
    this.montantGlobal = arg3;
    this.calculeSimple = function() {
        return this.montantGlobal/this.nbPersonne;
    };
};
function ActiviteDetail (arg1) {
    Activite.call(this, arg1);
    this.listPersonne = [];
    this.listFrais = [];
    this.listConsommation = new Array();
    this.ajouterFrais = function (frais1, prix, qte) {
        this.listFrais.push([frais1, prix, qte]);
    };
    this.ajouterPersonne = function(pers1) {
        this.listPersonne.push(pers1);
        this.listConsommation[pers1] = null;
    };
    this.affecterPersonne = function(pers2, frais2) {
        this.listConsommation[frais2] = pers2;
    };
    this.stringPersonne = function() {
        return this.listPersonne.join();
    };
};



extendClass(PackageSpecifique, PackageDefault);
extendClass(ActiviteSimple, Activite);
extendClass(ActiviteDetail, Activite);

var pack1 = new PackageDefault("defaut");
var pack2 = new PackageSpecifique("toto");
console.log(pack1.getInfo());
console.log(pack2.getInfo());

var act1 = new Activite('resto1');
var act2 = new ActiviteSimple('resto2',3,15);
var act3 = new ActiviteDetail('resto3');
//act3.listConsommation[0] = "Steak";

act3.ajouterFrais('steak',12,1);

act3.affecterPersonne(['toto','titi','tata'],'Steak');

act3.ajouterPersonne('caca');
act3.ajouterPersonne('pipi');



console.log(act1.DateCreation);
console.log(act2.DateCreation);
console.log(act2.calculeSimple());
console.log(act2.nbPersonne);
console.log(act3.listFrais);
console.log(act3.listPersonne);
console.log(act3.listConsommation);

$(document).ready(function() {
    //console.log( "ready!" );
});