 Builder = {
 	header : function(){
 		header = $('header');
 		header.splitivity = $('#splitivity-titre');
 		header.coordDown = header.splitivity.outerHeight();
 		header.currPos = header.coorDown;
 		Touch.menu();
 		header.dropTo = function(pos){
 			header.currPos = pos;
 			Animation.dropTo(header, pos);
 		};
 		header.rollTo = function(pos){
 			header.currPos = pos;
 			Animation.rollTo(header, pos);
 		};
 		header.moveTo = function(pos){
 			Animation.dropTo(header, pos, 0);
 		};
 		header.dropTo(header.coordDown-header.height());
 	},
 	container : function(){
 		container = $('#container');
 		container.coordDown = header.coordDown + tabs.outerHeight();
 		container.simple = function(){
			container.load("vueSimple.html #simple", function(){
				setTimeout(function(){
				Builder.iconeNbPersonnes();
			}, 200);
			});
 		};
 		container.details = function(){
			container.load("indexDetails.html #details", function(){
				frais = {};
				personnes = {}
				Builder.boutonFrais();
				Builder.boutonPersonnes();
				
				personnes.bouton.icone = interface_renderListeButtonIcon(document.getElementById('icone-personne-liste'));
				frais.bouton.icone = interface_renderListeButtonIcon(document.getElementById('icone-frais'));
				
				personnes.bouton.icone.tourner = frais.bouton.icone.tourner = function(angle){
						this.animate({"transform":"r"+angle}, 200, "<>");
				};
				
				Builder.listeFrais();
				Builder.listePersonnes();
			});
		};
		container.up = function(){
			Animation.upTo(container, header.coordDown);
		};
		container.down = function(){
			Animation.downTo(container,container.coordDown);
		};

		container.down();
 	},
 	tabs : function(){
	 	tabs = $('.tabs');
		tabs.simple = $('#simple-button');
		tabs.details = $('#details-button');
		tabs.simple.active = true;
		tabs.details.active = false;
		tabs.coordDown = header.coordDown;
		tabs.down = function(){
			Animation.dropTo(tabs, tabs.coordDown);
		};
		tabs.up = function(){
			Animation.rollTo(tabs, 0);
		};
		tabs.down();
		tabs.simple.click(function(){
			if(!tabs.simple.active){
				tabs.details.animate({'width':'35%'},500, 'easeOutElastic', function(){
					tabs.simple.addClass('active');
				});
				tabs.simple.animate({'width':'65%'}, 500,'easeOutElastic', function(){
					tabs.details.removeClass('active');
				});
				tabs.simple.active = true;
				tabs.details.active = false;
				container.simple();
				tabs.down();
				container.down();
			}
		});
		tabs.details.click(function(){
			if(!tabs.details.active){
				tabs.simple.animate({'width':'35%'}, 500,'easeOutElastic', function(){
					tabs.simple.removeClass('active');
				});
				tabs.details.animate({'width':'65%'}, 500,'easeOutElastic', function(){
					tabs.details.addClass('active');
				});
				tabs.details.active = true;
				tabs.simple.active = false;
				container.details();
				tabs.down();
				container.down();
			}
		});
 	},
 	listeFrais : function(){
 		frais.liste = $('#listeFrais');
		frais.liste.active = false;
		$.get("./formulaireFrais.html", function(data){
					frais.liste.html(data);
		});	
		frais.liste.height($(document).height()-header.splitivity.outerHeight()-frais.bouton.outerHeight());
		frais.liste.frais = {};
		frais.liste.ajouter = function(el, id){
			Touch.listElement(el);
			frais.liste.frais.push({el : id});
		};
		frais.liste.getIdByElement = function(el){
			return frais.liste.frais.find(el);
		}
		frais.liste.hide();
 	},
 	listePersonnes : function(){
 		personnes.liste = $('#listePersonnes');
		personnes.liste.active = false;

		$.get("./formulairePersonnes.html", function(data){
					personnes.liste.html(data);
					Builder.personneFantome();
		});	
		personnes.liste.personnes = new Array();
		personnes.liste.ajouter = function(el, id){
		
		console.log(el);
			Touch.listElement(el);
			//personnes.liste.personnes.push({el : id});
			personnes.liste.personnes.push({"li":el, "id":id});
		};
		personnes.liste.getIdByElement = function(el){
		
		for(var val in personnes.liste.personnes){
			if( personnes.liste.personnes[val].li[0]==el)
				return personnes.liste.personnes[val].id;
		}
			//return personnes.liste.personnes.find(el);
			//var res = personnes.liste.find(el);
			//return res;
		}
		personnes.liste.height($(document).height()-header.splitivity.outerHeight()-personnes.bouton.outerHeight());
		personnes.liste.hide();
 	},
 	boutonPersonnes : function(){
 		personnes.bouton = $('#bouton-personnes');
		personnes.bouton.active = false;
		personnes.bouton.click(function(){
			if(personnes.bouton.active){
				Interface.fermerListe(personnes);
				personnes.bouton.active = false;
			}
			else{
				Interface.ouvrirListe(personnes)
				personnes.bouton.active = true;
			}
		});
 	},
 	boutonFrais : function(){
 		frais.bouton = $('#bouton-frais');
		frais.bouton.active = false;
		frais.bouton.click(function(){
			if(frais.bouton.active){
				Interface.fermerListe(frais);
				frais.bouton.active = false;		
			}
			else{
				Interface.ouvrirListe(frais);
				frais.bouton.active = true;
			}
		});		
 	},
 	personneFantome : function(){
 		personnes.liste.fantome = $('.personne.fantome');
 		personnes.liste.fantome.nom = $('.personne.fantome > input');
 		personnes.liste.fantome.nom.onkeypress = function(e) {
		    var event = e || window.event;
		    var charCode = event.which || event.keyCode;

		    if ( charCode == '13' ) {
		      ajouterPersonne();
		    }
		}
 		personnes.liste.fantome.total = $(".totalPersonne.hidden");
		personnes.liste.fantome.details = $(".detailsPersonne.hidden");
 	},
 	iconeNbPersonnes : function(){
 		iconeNbPersonnes = $('#icone-personnes');
		Interface.renderIconeNbPersonne();
		iconeNbPersonnes.label.getText = function(){
			return iconeNbPersonnes.label.attr('text');
		}
		iconeNbPersonnes.label.setText = function(text){
			iconeNbPersonnes.label.attr({'text':text});
		}
		iconeNbPersonnes.click(function(){
			// TODO
		});
 	}
 };	