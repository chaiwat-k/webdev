// js006_jsScope UI logic
// Depends on jsMainLib.js
// Global var

var globalVar = 100e3; // Global variables are deleted when you close the page!

function printLine(line){
	printLineOnDiv("printDiv",line);
}

function f(){
	var localVar = 50;
	printLine("1# globalVar = " + globalVar);
	printLine("1# localVar = " + localVar);
	autoGlobalVar = 100e02; // BAD PRACTICE!!!
	printLine("1# autoGlobalVar = " + autoGlobalVar);
}

function g(){
	printLine("3# autoGlobalVar = " + autoGlobalVar);
}

function init(){

	f();
	// printLine("2# localVar = " + localVar); ==> undefined
	printLine("2# globalVar = " + globalVar);
	printLine("2# autoGlobalVar = " + autoGlobalVar);
	g();
	printLine("In HTML, all global variables will become a window variables.");
	printLine("I can use like window.globalVar = " + window.globalVar);
	printLine("I can use like window.autoGlobalVar = " + window.autoGlobalVar);
}

init();