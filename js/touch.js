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
  
/*// Android fixer  
function touchHandlerDummy(e) {
	e.preventDefault();
}

function touch_preventTabSwitching(e){
	if(e.gesture.direction == "right")
 	e.gesture.preventDefault();
 	e.stopPropagation();

}

function touch_setListeHandlers(liste){
	console.log("Touch.js : attribution des handlers de liste à "+liste);
		$(liste).hammer()
		
		.on('drag', function(e){
			if(e.gesture.deltaX>40 || e.gesture.deltaX< -40){
				animation_dragListElement(this,e.gesture.deltaX);		}	
		})
		
		.on('dragend', function(e){
			if(e.gesture.deltaX>40 || e.gesture.deltaX< -40){
				if(e.gesture.direction == "right")
					move = 50;
				else if(e.gesture.direction == "left") 
					move = -50;
				
				animation_moveListElementTo(this,move);
			}
			touch_preventTabSwitching(e);
		})
		 .on("tap", function(){
			 animation_moveListElementTo($(this),0);
		 });


}*/