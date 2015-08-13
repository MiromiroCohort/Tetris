function temp() {
	var thisString = ""
	for (var i=24; i>0; i--){
		thisString += "<div class=\"row\" id=\"row-"+i+"\">"
		for (var j=1; j<11; j++) {
			thisString += "<div class=\"cell\" id=\"row-" + i + "-cell-"+j + "\">&nbsp;</div>"
		}
		thisString += "</div>"
	}
	console.log(thisString)
}

temp()
