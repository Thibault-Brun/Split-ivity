var extendClass = function(child, parent) {
    var Surrogate = function() {};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
};

Personne.nextId = 0;
function Personne (arg1) {
    this.nom = arg1;
	this.identifiant = Personne.nextId;
	Personne.nextId += 1;
};


function Frais (arg1, arg2) {
    this.intitule = arg1;
    this.montant = arg2;
    this.identifiant = Frais.nextId;
    Frais.nextId++;
}
Frais.nextId = 0;

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
    this.listConsommation = [];

    this.ajouterFrais = function (frais, prix, qte) {
        var tabRep = [];
        //console.log(this.listFrais[this.listFrais.length].identifiant);
		for (var i = 0; i < qte; i++) {
		    var newFrais = new Frais(frais, prix);
            this.listFrais.push(newFrais);
            this.listConsommation[this.listFrais.length-1]= [newFrais,[]];
            tabRep.push(this.listFrais.length-1);
        };
        return tabRep;
    };

    this.supprimerFrais = function (frais) {
        if (frais instanceof Frais){ var objFrais = frais;} else { var objFrais = this.getFraisById(frais);}
        this.listFrais.splice(this.listFrais.indexOf(objFrais),1);
        var delInd = null;
        $.each(this.listConsommation, function(index, value){ 
            if (value != undefined) {
                if (value[0].identifiant == objFrais.identifiant) {
                    delInd = index;
                }
            };
        });
        this.listConsommation.splice(delInd,1);
    };
    this.getFraisById = function(arg1) {
        var rep = null;
        $.each(this.listFrais, function(index, value){
            if(value.identifiant == arg1){
                rep = value;
            }
        });
        return rep;
    };

    this.ajouterPersonne = function(pers) {
		var p =new Personne(pers);
		this.listPersonne.push(p);
    };
	
	this.modifierPersonne=function(id,newNom){
		$.each(this.listPersonne,function(index, value){
			if(value.identifiant==id)
				value.nom=newNom;
		});
	}
    
    /* A FINIR */
	
    this.supprimerPersonne = function(pers) {
        if (pers instanceof Personne){ objPers = pers;} else { objPers = this.getPersByNom(pers);}
        //console.log(pers);
        //console.log(objPers);
        this.listPersonne.splice(this.listPersonne.indexOf(objPers),1);
        //console.log(this.listPersonne);
        $.each(this.listConsommation, function(index, value){
                $.each(value[1], function(index2, value2){
                    //console.log(value2);
                    if(value2 == objPers.nom){ value[1].splice(index2,1); }
                });
        });
    };
    /* FIN A FINIR */
    this.affecterPersonne = function(pers, frais) {
        if (this.listConsommation[frais] != undefined) {
            this.listConsommation[frais][1] = pers;
        };
    };
    this.getPersByNom = function (pers){
        var rep = null;
        $.each(this.listPersonne, function(index, value){
            if(value.nom == pers){ rep = value; }
        });
        return rep;
    }

    this.calculeMontantGlobal = function() {
        var somme = 0;
        $.each(this.listFrais, function(index, value){
            somme += value.montant;
        });
        return somme;
    };
    this.calculeMontantPersonnes = function() {
        $.each(this.listPersonne, function(index, value){
            console.log("Total pour "+value.nom+" :"+calculeMontantPersonne(value.nom));
        });
    };
    this.calculeMontantPersonne = function(pers) {
        var rep = 0;
        $.each(this.listConsommation, function(index, value){ 
            if (value != undefined) {
                //console.log(value[1]);
                $.each(value[1], function(index2, value2){
                    if (value2 == pers) {
                        if(value[1].length == 1){ rep += value[0].montant; }
                        if(value[1].length > 1){ rep += value[0].montant/value[1].length; }
                    }
                });
            };
        });
        return rep;
    };
    this.getFraisByName = function(arg1) {
        $.each(this.listFrais, function(index, value){
            if (value.intitule == arg1){
                return value;
            }
        });
        return null;
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
//console.log(pack1.getInfo());
//console.log(pack2.getInfo());

var act1 = new Activite('resto1');
var act2 = new ActiviteSimple('resto2',3,15);
var act3 = new ActiviteDetail('resto3');
//act3.listConsommation[0] = "Steak";

act3.ajouterFrais('Steak',12,3);
act3.ajouterFrais('Soda',3,2);
//new Frais('Salade',16,1)

act3.ajouterPersonne('toto');
act3.ajouterPersonne('titi');
act3.ajouterPersonne('tata');
act3.ajouterPersonne('lala');

act3.affecterPersonne(['toto','titi','tata'],0);
act3.affecterPersonne(['lala','tata'],1);
act3.affecterPersonne(['lala'],2);
act3.affecterPersonne(['toto'],3);
act3.affecterPersonne(['titi'],4);

//console.log(act1 instanceof Activite);
//console.log(act2 instanceof ActiviteDetail);
//console.log(act2.calculeSimple());
//console.log(act2.nbPersonne);
console.log(act3.listFrais);
console.log(act3.listPersonne);
console.log(act3.listConsommation);
console.log("calculeMontantGlobal -->"+act3.calculeMontantGlobal());

act3.ajouterPersonne('testSup1');
//act3.ajouterPersonne('voila');

/*console.log("Total pour tata :"+act3.calculeMontantPersonne('tata'));
console.log("Total pour titi :"+act3.calculeMontantPersonne('titi'));
console.log("Total pour toto :"+act3.calculeMontantPersonne('toto'));
console.log("Total pour lala :"+act3.calculeMontantPersonne('lala'));*/

act3.affecterPersonne(['lala','testSup1'],2);
//act3.affecterPersonne(['toto','testSup2'],3);
//console.log(act3.listConsommation);

//console.log(act3.getPersByNom('testSup1'));
//act3.calculeMontantPersonne('toto');


//console.log(act3.getPersByNom('testSup1'));

console.log(act3.listPersonne);
console.log(act3.listConsommation);

act3.supprimerPersonne('testSup1');

console.log(act3.listPersonne);
console.log(act3.listConsommation);



//console.log(act3.getFraisByName('Steak').quantite);
//console.log(act3.listConsommation['tdsq']);

//$(document).ready(function() {
//    //console.log( "ready!" );
//});
