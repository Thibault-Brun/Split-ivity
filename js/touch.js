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
					if(header.currPos+ev.gesture.deltaY<0 && header.currPos+ev.gesture.deltaY> -1*$(document).height()+header.splitivity.outerHeight()){
					header.moveTo(header.currPos+ev.gesture.deltaY);
					header.addClass("ombre");
					}
				})
				.on("dragend", function(ev){
					if(!(ev.gesture.deltaY>-60 && ev.gesture.deltaY<60)){
						if(ev.gesture.direction == "down")
							header.dropTo(0);
						else
							header.rollTo(header.coordUp);
					}
					else{
						if(ev.gesture.direction == "down")
							header.rollTo(header.coordUp);
						else
							header.dropTo(0);
					}
					header.removeClass("ombre");
					ev.gesture.preventDefault();
					
				});
	}
}
	$(".frais").on( 'drag', function(e){
			if(!$(this).hasClass('fantome')){
			$(this).css("position", "relative")
					.css( "left", e.gesture.deltaX+"px");
				if(e.gesture.direction == "right")
					e.stopPropagation();
					}
		});
