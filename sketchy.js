var boxRow = 10;

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
	reset();
});

//fires any time there is a change in the input field
$("#okBtn").on("click", function(){
	reset();
});


//reset grid to chosen bg, mouse color and number of pixels
function reset() {
	$("#wrapper").empty();
	var boxRow = $("#numPixels").val();
	if(boxRow>25) {
		boxRow=25;
		$("#numPixels").val("25");
	} else if (boxRow<1) {
		boxRow=1;
		$("#numPixels").val("1");
	}
	var totalBoxes = boxRow * boxRow;
	var boxWidth = 800 / boxRow;
	var boxHeight = boxWidth;
	for(var i=0;i<totalBoxes;i++) {
	$("#wrapper").append("<div class='square'> </div>");
	$(".square").css("background", backgroundCol);
	$(".square").css("width", boxWidth);
	$(".square").css("height", boxHeight);
	$(".square").on("mouseenter", function() {
		$(this).css("background", mouseCol);
	});
}
}