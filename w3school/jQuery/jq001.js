// js025_jQuery UI logic

function printLine(line){
	if(line == null) return;
	if(line.length <= 0) return;
	var printDiv = $("#printDiv");
	if(printDiv == null) return;
	var content = printDiv.html();
	printDiv.html(content + line + "<br />");	
}

$(function(){
	printLine("Hi!");
	printLine("Hi!");
	printLine("Hi!");
});