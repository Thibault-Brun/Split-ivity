Touch = {
	tabSwipe : function(){
		$('body')	.hammer()
					.on("drag", function(ev){
				  			ev.gesture.preventDefault();
				  	})
				  	.on("dragend", function(ev) { 
						ev.gesture.preventDefault();
						if(ev.gesture.deltaX<40 && ev.gesture.deltaX>-40) return;
						if(ev.gesture.direction == "right")
							tabs.simple.click();
						else
							tabs.details.click();
				 	 });
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
					if(!(ev.gesture.deltaY>-60 && ev.gesture.deltaY<60)){
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
	listElement : function(el){
		el 	.hammer()
			.on( 'drag', function(e){
			if(el.is('li')){
				el.animate({transform: 'translateX('+e.gesture.deltaX+'px)'},0);
				if(!el.hasClass('touched'))
				el.addClass('touched');
				}
			})
			.on('dragend', function(e){
				el.removeClass('touched');
				Animation.slideTo(el, 0);
				e.gesture.preventDefault();
				e.stopPropagation();
			});
	}
}
