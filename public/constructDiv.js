function temp() {
	var thisString = ""
	for (var i=24; i>0; i--){
		thisString += "<div id=\"row-"+i+"\">"
		for (var j=1; j<11; i++) {
			thisString += "<div id=\"row-" + i + "-cell-"+j + "\">&nbsp;</div"
		}
		thisString += "</div>"
	}
	return thisString
}

temp()