// jq006 UI logic

function printLine(line){
	if(line == null) return;
	if(line.length <= 0) return;
	var printDiv = $("#messageDiv");
	if(printDiv == null) return;
	var content = printDiv.html();
	printDiv.html(content + line + "<br />");	
}

$(function(){

	printLine("$('#jsCodeBlock').parent() => " + 
		$('#jsCodeBlock').parent().attr('id'));
});