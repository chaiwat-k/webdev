// js019_jsError UI logic
// Depends on jsMainLib.js

function printLine(line){
	printLineOnDiv("printDiv",line);
}

var theBtn, theInputTxt;

function uiInit(){
	theBtn = document.getElementById("numberBtn");
	theInputTxt = document.getElementById("numberInput");
	
	theBtn.onclick = errorFunc2;
}

function errorFunc1(){
	try{
		adddlert("Welcome guest!");
	}catch(err){
		printLine(err.message);
	}
}

function errorFunc2(){
	try{
		var val = parseFloat(theInputTxt.value);
		debugger; // Same effect as setting a breakpoint
		if(val == null) throw "is null";
		if(val == "") throw "is empty";
		if(isNaN(val)) throw "is not a number";
		if(val > 10) throw "is too high";
		if(val < 5) throw "is too low";
		
		printLine("val = " + val);
	}catch(err){
		printLine("ERROR: " + err);
	}finally{
		printLine("Opt ends");
	}
}

function init(){
	uiInit();
	errorFunc1();
}

init();