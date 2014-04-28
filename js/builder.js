 Builder = {
 	header : function(){
 		header = $('header');
 		header.splitivity = $('#splitivity-titre');
 		header.coordUp = $(document).height()*-1 + header.splitivity.outerHeight();
 		header.currPos = header.coordUp;
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
 	},
 	container : function(){
 		container = $('#container');
 		container.css('top',header.splitivity.outerHeight()+tabs.outerHeight());

 		container.simple = function(){
			container.load("vueSimple.html #simple", function(){
				setTimeout(function(){
				Interface.repaint();
				Builder.iconeNbPersonnes();
			}, 200);
			});
 		};
 		container.details = function(){
			container.load("indexDetails.html #details", function(){
				Builder.boutonFrais();
				Builder.boutonPersonnes();
				
				boutonPersonnes.icone = interface_renderListeButtonIcon(document.getElementById('icone-personne-liste'));
				boutonFrais.icone = interface_renderListeButtonIcon(document.getElementById('icone-frais'));
				
				boutonPersonnes.icone.tourner = boutonFrais.icone.tourner = function(angle){
						this.animate({"transform":"r"+angle}, 200, "<>");
				};
				
				Builder.listeFrais();
				Builder.listePersonnes();
			});
		};
		container.up = function(){
			Animation.upTo(container, header.splitivity.outerHeight());
		};
		container.down = function(){
			Animation.downTo(container,header.splitivity.outerHeight()+tabs.outerHeight());
		}
 	},
 	tabs : function(){
	 	tabs = $('.tabs');
		tabs.simple = $('#simple-button');
		tabs.details = $('#details-button');
		tabs.simple.active = true;
		tabs.details.active = false;
		tabs.coordDown = header.splitivity.outerHeight();
		tabs.down = function(){
			Animation.dropTo(tabs, tabs.coordDown);
		};
		tabs.up = function(){
			Animation.rollTo(tabs, 0);
		};
		tabs.down();
		tabs.simple.click(function(){
			if(!tabs.simple.active){
				tabs.simple.addClass("active");
				tabs.simple.active = true;
				tabs.details.removeClass("active");
				tabs.details.active = false;
				container.simple();
				tabs.down();
			}
		});
		tabs.details.click(function(){
			if(!tabs.details.active){
				tabs.details.addClass("active");
				tabs.details.active = true;
				tabs.simple.removeClass("active");
				tabs.simple.active = false;
				container.details();
				tabs.down();
			}
		});
 	},
 	listeFrais : function(){
 		boutonFrais.liste = $('#listeFrais');
		boutonFrais.liste.active = false;
		$.get("./formulaireFrais.html", function(data){
					boutonFrais.liste.html(data);
		});	
		boutonFrais.liste.height($(document).height()-header.splitivity.outerHeight()-boutonFrais.outerHeight());
		boutonFrais.liste.hide();
 	},
 	listePersonnes : function(){
 		boutonPersonnes.liste = $('#listePersonnes');
		boutonPersonnes.liste.active = false;
		$.get("./formulairePersonnes.html", function(data){
					boutonPersonnes.liste.html(data);
		});	
		boutonPersonnes.liste.height($(document).height()-header.splitivity.outerHeight()-boutonPersonnes.outerHeight());
		boutonPersonnes.liste.hide();
 	},
 	boutonPersonnes : function(){
 		boutonPersonnes = $('#bouton-personnes');
		boutonPersonnes.active = false;
		boutonPersonnes.click(function(){
			if(boutonPersonnes.active){
				Interface.fermerListe(boutonPersonnes);
				boutonPersonnes.active = false;
				boutonPersonnes.liste.active = false;	
			}
			else{
				Interface.ouvrirListe(boutonPersonnes)
				boutonPersonnes.liste.active = true;
				boutonPersonnes.active = true;
			}
		});
 	},
 	boutonFrais : function(){
 		boutonFrais = $('#bouton-frais');
		boutonFrais.active = false;
		boutonFrais.click(function(){
			if(boutonFrais.active){
				Interface.fermerListe(boutonFrais);
				boutonFrais.active = false;
				boutonFrais.liste.active = false;			
			}
			else{
				Interface.ouvrirListe(boutonFrais);
				boutonFrais.liste.active = true;
				boutonFrais.active = true;
			}
		});		
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