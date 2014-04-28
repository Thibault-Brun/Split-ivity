elasticity = 800;

Animation = {
	drop : 'easeOutBounce',
	roll : 'easeOutElastic',
	dropTo : function(el, value, duree){
		duree = typeof duree !== 'undefined' ? duree : 500;
		el.animate({transform: 'translateY('+value+'px)'},{duration: duree,
		easing: Animation.drop});
	},
	rollTo : function(el, value, duree){
		duree = typeof duree !== 'undefined' ? duree : 500;
		el.animate({transform: 'translateY('+value+'px)'},{duration: duree,
		easing: Animation.roll});
	},
	upTo : function(el, value, duree){
		duree = typeof duree !== 'undefined' ? duree : 500;
		el.animate({'top': +value+'px'},{duration: duree,
		easing: Animation.roll});
	},
	downTo : function(el,value, duree){
		duree = typeof duree !== 'undefined' ? duree : 500;
		el.animate({'top': +value+'px'},{duration: duree,
		easing: Animation.drop});;
	}
}
function animation_iconeNbPersonnesBounce(){
	animation_raphaelTextBounce(iconeNbPersonnes.label);
	animation_raphaelObjectBounce(iconeNbPersonnes.milieu);
	setTimeout(function(){animation_raphaelObjectBounce(iconeNbPersonnes.gauche)},100);
	setTimeout(function(){animation_raphaelObjectBounce(iconeNbPersonnes.droite)},100);
	
}
function animation_iconeNbPersonnesShrink(){
	animation_raphaelTextShrink(iconeNbPersonnes.label);
	animation_raphaelObjectShrink(iconeNbPersonnes.milieu);
	setTimeout(function(){animation_raphaelObjectShrink(iconeNbPersonnes.gauche)},100);
	setTimeout(function(){animation_raphaelObjectShrink(iconeNbPersonnes.droite)},100);
}

function animation_raphaelTextBounce(el){
	el.animate({'font-size':30}, 200, "<>", function(){
		el.animate({'font-size':20}, 200, "<>");
		
	});
}

function animation_raphaelObjectBounce(el){
	el.animate({"transform":"s3.5, 3.5, 1, 2"}, 200, "<>", function(){
		el.animate({"transform":"s3.3, 3.3, 0, 0"}, 200, "<>")
	});
}

function animation_raphaelTextShrink(el){
	el.animate({'font-size':10}, 200, "<>", function(){
		el.animate({'font-size':20}, 200, "<>");
	});
}

function animation_raphaelObjectShrink(el){
	el.animate({"transform":"s3.1, 3.1, -1, -2"}, 200, "<>", function(){
		el.animate({"transform":"s3.3, 3.3, 0, 0"}, 200, "<>")
	});
}

function animation_dragListElement(element, x){
	$(element).css("position", "relative")
			.css( "left", x+"px");
}

function animation_moveListElementTo(element, x){
	console.log("Déplacement de "+element+" à "+x);
	$(element).css("position", "relative")
			.animate({ "left": x+"px"}, {
                    duration: 500,
                    easing: 'easeOutBounce'
             });
}

function ouvrirPersonnes(){
	$('#bouton-personnes').addClass('active');
	tournerPersonneListeIcon('90');
	$('#bouton-frais').slideUp(200);
	animation_hideTabs();
}