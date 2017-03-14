var boxRow = 20;
var totalBoxes = boxRow * boxRow;
var boxWidth = 800 / boxRow;
var boxHeight = boxWidth;

var backgroundCol = "red";
var mouseCol = "orange";

$("#bgcolors > .red").addClass("selected");
$("#mousecolors > .orange").addClass("selected");


$(".backgroundSquare").on("click", function(){
	$(".backgroundSquare").removeClass("selected");
	$(this).addClass("selected");
	backgroundCol=$(this).css("background-color");
	$(".square").css("background", backgroundCol);
});

$(".mouseSquare").on("click", function(){
	$(".mouseSquare").removeClass("selected");
	$(this).addClass("selected");
	mouseCol=$(this).css("background-color");
});


for(var i=0;i<totalBoxes;i++) {
	$("#wrapper").append("<div class='square'> </div>");
	$(".square").css("width", boxWidth);
	$(".square").css("height", boxHeight);
	$(".square").on("mouseenter", function() {
		$(this).css("background", mouseCol);
	})
}

$("#resetBtn").on("click", function(){
	$(".square").css("background", backgroundCol);
})

