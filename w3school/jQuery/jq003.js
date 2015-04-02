// jq003_Html UI logic javascript

function adjustStyle(){
	var label = $(".label");
	label.text(label.text() + ": ");
}
function bindEvents(){
	$('#resizeBtn').click(function(){
		var commentInput = $('#commentInput');
		var curSize = commentInput.attr("size");
		var newSize = Number(curSize) + 10;
		$('#commentInput').attr("size", String(newSize));
	});
}
$(function(){
	adjustStyle();	
	bindEvents();
});