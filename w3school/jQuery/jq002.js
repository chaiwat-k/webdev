// js002_jQuery UI logic

function printLine(line){
	if(line == null) return;
	if(line.length <= 0) return;
	var printDiv = $("#messageDiv");
	if(printDiv == null) return;
	var content = printDiv.html();
	printDiv.html(content + line + "<br />");	
}

function styleUi(){
	// Selects all button elements
	$("button").css('width', '50px');
	$("button").css('height', '50px');	
	
	// Select button elements with "emptyBtn" class
	$("button.emptyBtn").hide(); // 
	var buttonRow = $(".buttonRow");
	buttonRow.css("margin-top","5px");
	buttonRow.css("margin-bottom","5px");
	
	// Select by ids
	var displayDiv = $("#display");
	displayDiv.css("width", "210px");
	displayDiv.css("height", "20px");
	displayDiv.css("border", "2px solid blue");
	displayDiv.css("color", "green");
	displayDiv.css("background-color", "yellow");
	displayDiv.css("text-align", "right");
}

function bindEvents(){
	
	$("#display").dblclick(function(){
		alert("Display was double click!");
	});
	
	$("#display").mouseenter(function(){
		$(this).css("background-color","orange");
	});
	
	$("#display").mouseleave(function(){
		$(this).css("background-color", "yellow");
	});
	
	$("#CBtn").click(function(){
		$("#display").html("0");
	});
	
	$("button.calculatorBtn").click(function(){
		var displayDiv = $("#display");
		var val = $(this).text();
		if(val != 'C' && val != '='){
			displayDiv.html(displayDiv.html() + val);
		}
	});
	
	$("#toggleBtn").click(function(){
		// $("#calculatorDiv").toggle("slow");
		// $("#calculatorDiv").fadeToggle("slow");
		// $("#calculatorDiv").fadeTo("slow", 0.4);
		// $("#calculatorDiv").slideToggle("slow");
		$("#calculatorDiv")
			.animate({left: '250px'},"slow")
			.animate({left: '350px'},"slow")
			.animate({left: '450px'},"slow");
	});
}

$(function(){
	styleUi();
	bindEvents();
});