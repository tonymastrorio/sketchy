var boxRow = prompt("How many pixels per side?");

var totalBoxes = boxRow * boxRow;
var boxWidth = 800 / boxRow;
var boxHeight = boxWidth;

var backgroundCol = "red";
var mouseCol = "orange";

// add selected class on page load
$("#bgcolors > .red").addClass("selected");
$("#mousecolors > .orange").addClass("selected");

//change background color
$(".backgroundSquare").on("click", function(){
	$(".backgroundSquare").removeClass("selected");
	$(this).addClass("selected");
	backgroundCol=$(this).css("background-color");
	$(".square").css("background", backgroundCol);
});

//change mouseover color
$(".mouseSquare").on("click", function(){
	$(".mouseSquare").removeClass("selected");
	$(this).addClass("selected");
	mouseCol=$(this).css("background-color");
});

//load number of squares and colors
for(var i=0;i<totalBoxes;i++) {
	$("#wrapper").append("<div class='square'> </div>");
	$(".square").css("width", boxWidth);
	$(".square").css("height", boxHeight);
	$(".square").on("mouseenter", function() {
		$(this).css("background", mouseCol);
	});
}

//reset to selected background color
$("#resetBtn").on("click", function(){
	$(".square").css("background", backgroundCol);
});

