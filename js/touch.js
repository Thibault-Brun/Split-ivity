$("body")
  .hammer()
  .on("drag",function(e){
  	e.stopPropagation();
  })
  .on("dragend", function(ev) { 
  if(ev.gesture.deltaX<30 && ev.gesture.deltaX>-30) return;
  if(ev.gesture.direction == "right")
  $( "#simple-button" ).click();
  else
  $( "#details-button" ).click();
  });
  
  $('#details').on('touchmove', function (e) {
        e.preventDefault();
});

$('ul').hammer().on('drag', function (e) {
	console.log(event);
	event.stopPropagation();
});


//suppression a gauche

	$(".frais").on( 'drag', function(e){
			if(!$(this).hasClass('fantome')){
			$(this).css("position", "relative")
					.css( "left", e.gesture.deltaX+"px");
				if(e.gesture.direction == "right")
					e.stopPropagation();
					}
		});
