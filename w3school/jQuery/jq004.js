// jq004_HtmlAdd UI logic javascript
	
function updateLineNumber(){
	var ln  = 1;
	$("#docTbl").find("tr").each(function(){
		$(this).find("td:first").text('#'+ln);
		ln += 1;
	});
	
	$("#docTbl").find("tr:odd").addClass("oddRow");
	$("#docTbl").find("tr:even").addClass("evenRow");
}

function bindEvents(){
	$("#addBtn").click(function(){
		var line = "<tr>\
						<td></td>\
						<td>&nbsp;&nbsp;&nbsp;</td>\
						<td>Contents...</td>\
					</tr>";
		$("#docTbl").append(line);
		updateLineNumber();
	});	
	
	$("#deleteBtn").click(function(){
		$("#docTbl").find("tr:last").remove();
	});
}	

$(function(){
	updateLineNumber();
	bindEvents();
});