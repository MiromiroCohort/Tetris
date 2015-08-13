function drawByJquery(shape, row, col, colour) {
	console.log(shape)
	if (shape == 's') {
		$("#row-"+row+"-cell-"+(col+1)).addClass(colour)
		$("#row-"+row+"-cell-"+(col+2)).addClass(colour)
		$("#row-"+(row+1)+"-cell-"+(col)).addClass(colour)
		$("#row-"+(row+1)+"-cell-"+(col+1)).addClass(colour)
	}
}

$("table").on("click", drawByJquery("s", 10, 3, "red"));
