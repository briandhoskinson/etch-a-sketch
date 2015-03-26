var grid_size = 16;
var pixel_size = Math.floor((600 / grid_size));


$(document).ready(function(){
	
	makeGrid();
	
	$('#clear-button').click(function(){
		$('.mote').css("background-color","black");
		grid_size = window.prompt("how many squares?");
		pixel_size = Math.floor((600/grid_size));
		console.log("pixel_size is now " + pixel_size);

		$('#container').detach();
		$('body').prepend("<div id='container'></div>");
		console.log("container has been emptied");
		makeGrid();
		$('.mote').on("mouseover",function(){

			var a = Math.ceil(Math.random() * 255);
			console.log("var a is " + a);
			var b = Math.ceil(Math.random() * 255);
			var c = Math.ceil(Math.random()* 255);
			$(this).css("background-color", "rgb("+ a + "," + b + "," + c + ")");
		});
	});

	$('.mote').on("mouseover",function(){
		$(this).css("color","white");
		$(this).css("background-color","white");
	});
});
	
	

function makeGrid(){


	for(var j = 0; j < grid_size; j++){

		for(var i = 0; i < grid_size; i++){
			/*console.log("this is iteration" + i);*/
			$('#container').append("<div class='mote'></div>");
		};

		$('#container').append("<br>");
	}
	$('.mote').css("width", pixel_size);
	$('.mote').css("height", pixel_size);
};