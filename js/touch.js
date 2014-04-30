Touch = {
	tabSwipe : function(){
		$('body')	.hammer()
					.on("drag", function(e){
						e.gesture.stopPropagation();
						e.gesture.preventDefault();
						e.preventDefault();
						e.stopPropagation();
					})
				  	.on("dragend", function(ev) { 
						if(ev.gesture.direction == "right")
							tabs.simple.click();
						else
							tabs.details.click();
						ev.gesture.stopPropagation();
						ev.gesture.preventDefault();
						ev.preventDefault();
						ev.stopPropagation();
				 	 });
	},
	noTabSwipe : function(){
		$('body')	.hammer()
					.off("drag")
					.off("dragend");
	},
	menu : function(){
		header	.hammer()
				.on("drag", function(ev){
					if(header.currPos+ev.gesture.deltaY<0 && header.currPos+ev.gesture.deltaY> header.coordDown-header.height()){
					header.moveTo(header.currPos+ev.gesture.deltaY);
					header.addClass("ombre");
					}
					ev.gesture.preventDefault();
					ev.stopPropagation();
				})
				.on("dragend", function(ev){
					if(!(ev.gesture.deltaY>-70 && ev.gesture.deltaY<70)){
						if(ev.gesture.direction == "down")
							header.dropTo(0);
						else
							header.rollTo(header.coordDown-header.height());
					}
					else{
						if(ev.gesture.direction == "down")
							header.rollTo(header.coordDown-header.height());
						else
							header.dropTo(0);
					}
					header.removeClass("ombre");
					ev.gesture.preventDefault();
					ev.stopPropagation();
					
				});
	},
	menuOff : function(){
		header	.hammer()
					.off("drag")
					.off("dragend");
	},
	listElement : function(el){
		el 	.hammer()
			.on('hold', function(e){
				alert(el+"\n"+personnes.liste.getIdByElement(el[0]));
				//alert(el+"\n"+frais.liste.getIdByElement(el[0]));
			})
			.on( 'drag', function(e){
				Touch.noTabSwipe();
				if(e.gesture.direction == 'left' || e.gesture.direction == 'right'){
					if(el.is('li')){
						el.animate({transform: 'translateX('+e.gesture.deltaX+'px)'},0);
						if(!el.hasClass('touched'))
						el.addClass('touched');
						e.gesture.preventDefault();
					}
				}
			})
			.on('tap', function(e){
				if(el.moved){
					Animation.slideTo(el, 0);
					el.moved = false;
					e.gesture.stopPropagation();
					e.gesture.preventDefault();
					e.stopPropagation();
					e.preventDefault();
				}
			})
			.on('dragend', function(e){
				el.removeClass('touched');
				if(e.gesture.direction == "right")
					Animation.slideTo(el, 40);
				else if(e.gesture.direction == "left")
					Animation.slideTo(el, -40);
				el.moved = true;
				e.gesture.stopPropagation();
				e.gesture.preventDefault();
				e.preventDefault();
				e.stopPropagation();
				Touch.tabSwipe();
			})
		}
	};