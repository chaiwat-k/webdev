// jq005 UI logic

function printLine(line){
	if(line == null) return;
	if(line.length <= 0) return;
	var printDiv = $("#messageDiv");
	if(printDiv == null) return;
	var content = printDiv.html();
	printDiv.html(content + line + "<br />");	
}

function styleUIs(){
	
	var dimBoxStyles = {
		"width": "150px",
		"height": "150px",
		"margin": "5px",
		"border": "5px solid blue",
		"padding": "5px",
		"background-color": "orange",
		"position" : "absolute",
		"left": "300px",
		"top": "100px"
	};
	$("#dimBox").css(dimBoxStyles);	
}

$(function(){
	
	styleUIs();
	
	var dimBox = $("#dimBox");
	printLine("dimBox.outerWidth(true) => " + dimBox.outerWidth(true));
	printLine("dimBox.outerWidth() => " + dimBox.outerWidth());
	printLine("dimBox.innerWidth() => " + dimBox.innerWidth());
	printLine("dimBox.width() => " + dimBox.width());
	printLine("dimBox.outerHeight(true) => " + dimBox.outerHeight(true));
	printLine("dimBox.outerHeight() => " + dimBox.outerHeight());
	printLine("dimBox.innerHeight() => " + dimBox.innerHeight());
	printLine("dimBox.height() => " + dimBox.height());
	
});