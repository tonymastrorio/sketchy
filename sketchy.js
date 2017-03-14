var boxRow = 20;
var totalBoxes = boxRow * boxRow;
var boxWidth = 800 / boxRow;
var boxHeight = boxWidth;

for(var i=0;i<totalBoxes;i++) {
	$("#wrapper").append("<div class='square'> </div>");
	$(".square").css("width", boxWidth);
	$(".square").css("height", boxHeight);
	$(".square").on("mouseenter", function() {
		$(this).css("background", "orange");
	})
}

$("#resetBtn").on("click", function(){
	$(".square").css("background", "red");
})