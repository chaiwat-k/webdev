// js017_jsConversion UI logic
// Depends on jsMainLib.js

function printLine(line){
	printLineOnDiv("printDiv",line);
}

function init(){
	
	// typeof operator	
	printLine("typeof 'John' => " + typeof 'John');
	printLine("typeof 3.14 => " + typeof 3.14);
	printLine("typeof NaN => " + typeof NaN);
	printLine("typeof false => " + typeof false);
	printLine("typeof [1,2,3] => " + typeof [1,2,3]);
	printLine("typeof {name:'John', age:34} => " + typeof {name:'John', age:34});
	printLine("typeof new Date() => " + typeof new Date());
	printLine("typeof function(){} => " + typeof function(){});
	printLine("typeof x => " + typeof x); // x is not declared
	printLine("typeof null => " + typeof null);
	
	// The constructor property
	printLine("'John'.constructor => " + 'John'.constructor);
	printLine("(3.14).constructor => " + (3.14).constructor);
	printLine("false.constructor => " + false.constructor);
	printLine("[1,2,3].constructor => " + [1,2,3].constructor);
	printLine("{name:'John', age:34}.constructor => " + {name:'John',age:34}.constructor);
	printLine("new Date().constructor => " + new Date().constructor);
	printLine("function(){}.constructor => " + function(){}.constructor);
	
	// Number => String
	
	printLine("String(123) => " + String(123));	
	printLine("String(100+23) => " + String(100+23));
	
	printLine("(123).toString() => " + (123).toString());
	printLine("(100+23).toString() => " + (100+23).toString());
	printLine("(123).toString(2) => " + (123).toString(2)); // Binary
	printLine("(123).toString(8) => " + (123).toString(8)); // Oct
	printLine("(123).toString(16) => " + (123).toString(16)); // Hex
	
	printLine("(9.656).toExponential() => " + (9.656).toExponential());
	printLine("(9.656).toExponential(0) => " + (9.656).toExponential(0));
	printLine("(9.656).toExponential(2) => " + (9.656).toExponential(2));
	
	printLine("(9.656).toFixed() => " + (9.656).toFixed());
	printLine("(9.656).toFixed(0) => " + (9.656).toFixed(0));
	printLine("(9.656).toFixed(2) => " + (9.656).toFixed(2));	
	
	printLine("(9.656).toPrecision() => " + (9.656).toPrecision());	
	printLine("(9.656).toPrecision(2) => " + (9.656).toPrecision(2));	
	
	// Boolean => String
	printLine("String(true) => " + String(true));
	printLine("false.toString() => " + false.toString());
	
	// Date to String
	printLine("String(Date()) => " + String(Date()));
	printLine("Date().toString() => " + Date().toString());
	// Require date instance
	printLine("new Date().toUTCString() => " + new Date().toUTCString());
	printLine("new Date().toDateString() => " + new Date().toDateString());
	
	// String to Numbers
	printLine("Number('3.14') => " + Number('3.14'));
	printLine("Number(null) => " + Number(null));
	printLine("Number(' ') => " + Number(' '));
	printLine("Number('') => " + Number(''));
	printLine("Number('99 88') => " + Number('99 88'));
	
	printLine("parseFloat('3.14') => " + parseFloat('3.14'));
	printLine("parseFloat(null) => " + parseFloat(null));
	printLine("parseFloat(' ') => " + parseFloat(' '));
	printLine("parseFloat('') => " + parseFloat(''));
	printLine("parseInt('3.14') => " + parseInt('3.14'));
	
	// String to Date
	printLine("new Date('January 29, 1986 12:30:24') => " + new Date('January 29, 1986 12:30:24').toString());
}

init();