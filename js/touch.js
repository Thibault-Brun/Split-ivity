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

$('ul').on('touchmove', function (e) {
	console.log(event);
	event.stopPropagation();
});