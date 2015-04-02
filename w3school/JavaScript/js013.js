// js013_jsBoolean UI logic
// Depends on jsMainLib.js

function printLine(line){
	printLineOnDiv("printDiv",line);
}

function init(){

	// Boolean() function
	printLine("Boolean(10 < 9) => " + Boolean(10 < 9));
	
	// Everything that has real value is true
	printLine("Boolean('Happy') => " + Boolean('Happy'));
	printLine("Boolean(10) => " + Boolean(10));
	
	// But...
	printLine("Boolean(0) => " + Boolean(0));
	printLine("Boolean(-0) => " + Boolean(-0));
	printLine("Boolean('') => " + Boolean(''));
	var x;
	printLine("Boolean(x) => " + Boolean(x));
	printLine("Boolean(undefined) => " + Boolean(undefined));
	var y = null;
	printLine("Boolean(y) => " + Boolean(y));
	printLine("Boolean(false) => " + Boolean(false));
	printLine("Boolean(10/'h') => " + Boolean(10/'h'));
	
}

init();