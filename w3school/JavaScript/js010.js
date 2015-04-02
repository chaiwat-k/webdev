// js010_jsNumber UI logic
// Depends on jsMainLib.js

function printLine(line){
	printLineOnDiv("printDiv",line);
}

function init(){
	
	printLine("Math.random() => " + Math.random());
	printLine("Math.min(0,150,30,20,-8) => " + Math.min(0,150,30,20,-8));
	printLine("Math.max(0,150,30,20,-8) => " + Math.max(0,150,30,20,-8));
	printLine("Math.round(4.7) => " + Math.round(4.7));
	printLine("Math.round(4.4) => " + Math.round(4.4));
	
	printLine("Math.floor(4.7) => " + Math.floor(4.7));
	printLine("Random number btw 0 10: " + Math.floor(Math.random()*11));	
	printLine("Math.ceil(4.4) => " + Math.round(4.4));
	
	// Constants
	printLine("Math.E => " + Math.E); // Euler's number
	printLine("Math.PI => " + Math.PI); // PI
	printLine("Math.SQRT2 => " + Math.SQRT2); // square root of 2
	printLine("Math.SQRT1_2 => " + Math.SQRT1_2); // square root of 1/2
	printLine("Math.LN2 => " + Math.LN2); // ln 2
	printLine("Math.LN10 => " + Math.LN10); // ln 10
	printLine("Math.LOG2E => " + Math.LOG2E);
	printLine("Math.LOG10E => " + Math.LOG10E);
}

init();