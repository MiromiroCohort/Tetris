function buildTable() {
	var thisString = ""
	for (var i=1; i<25; i++){
		thisString += "<div class=\"row\" id=\"row-"+i+"\">"
		for (var j=1; j<11; j++) {
			thisString += "<div class=\"cell inactive\" id=\"row-" + i + "-cell-"+j + "\">&nbsp;</div>"
		}
		thisString += "</div>"
	}
	$("#board").append(thisString)
}

buildTable
