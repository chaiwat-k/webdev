// js009_jsNumber UI logic
// Depends on jsMainLib.js

function printLine(line){
	printLineOnDiv("printDiv",line);
}

function multiplyUntilInfinity(myNumber) {
    if(myNumber == null) return;
	if(myNumber == undefined) return;
    var txt = "";
    while (myNumber != Infinity) {
        myNumber = myNumber * myNumber;
        txt = txt + myNumber + "<br>";
    }
    return txt;
}

function init(){

	var x = 34.00; // A number with decimals
	var y = 34; // A number without decimals
	
	var s = 123e5; // 12300000
	var t = 123e-5; //0.00123
	
	// JavaScript Numbers are Always 64-bit Floating Point!
	
	// Precision
	
	// Integers (numbers without a period or exponent notation) are considered accurate up to 15 digits.
	x = 999999999999999; // Will be as is
	y = 9999999999999999; // Will be 10000000000000000
	
	printLine("x = " + x); 
	printLine("y = " + y);
	
	// The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:
	x = 0.2 + 0.1; // Will be 0.30000000000000004
	
	printLine("x = " + x); 
	
	// Hex
	var u = 0xFF; // Will be 255
	printLine("u = " + u);
	
	// Oct
	var v = 077; // Will 63
	printLine("v = " + v);
	
	// Display as Hex, Oct, or Bin
	printLine("u (hex) = " + u.toString(16));
	printLine("v (Oct) = " + v.toString(8));
	printLine("x (bin) = " + x.toString(2));
	
	// Infinity
	printLine(multiplyUntilInfinity(2));
	printLine("2/0 generates Infinity:" + 2/0);
	printLine("-2/0 generates -Infinity:" + 2/0);
	
	// NaN is a reserved word for Not a Number
	printLine("16/'apple' : " + 16/'apple');
	printLine("isNaN(16/'apple') : " + isNaN(16/'apple'));
	// However, the following works
	printLine("100/'10' : " + 100/'10');
	printLine("z = 5 + NaN : " + (5 + NaN)); // Will be NaN
	
	// Number properties and methods
	printLine("Number.MAX_VALUE : " + Number.MAX_VALUE);
	printLine("Number.MIN_VALUE : " + Number.MIN_VALUE);
	printLine("Number.NEGATIVE_INFINITY : " + Number.NEGATIVE_INFINITY);
	printLine("Number.POSITIVE_INFINITY : " + Number.POSITIVE_INFINITY);
	
	// Parsing
	
	printLine("Number(true) = " + Number(true)); // returns 1
	printLine("Number(false) = " + Number(false)); // returns 0
	printLine("Number(new Date()) = " + Number(new Date())); // returns a number
	printLine("Number('10') = " + Number('10')); // returns 10
	printLine("Number('10 20') = " + Number('10 20')); // returns NaN
	
	printLine("parseInt('10') = " + parseInt('10')); // returns 10
	printLine("parseInt('10.33') = " + parseInt('10.33')); // returns 10
	printLine("parseInt('10 20 30') = " + parseInt('10 20 30')); // returns 10
	printLine("parseInt('10 years') = " + parseInt('10 years')); // returns 10
	printLine("parseInt('years 10') = " + parseInt('years 10')); // returns NaN
	
	printLine("parseFloat('10') = " + parseFloat('10')); // returns 10
	printLine("parseFloat('10.33') = " + parseFloat('10.33')); // returns 10
	printLine("parseFloat('10 20 30') = " + parseFloat('10 20 30')); // returns 10
	printLine("parseFloat('10 years') = " + parseFloat('10 years')); // returns 10
	printLine("parseFloat('years 10') = " + parseFloat('years 10')); // returns NaN
	
	printLine("(123).valueOf() => " + (123).valueOf());
	printLine("(123).toString() => " + (123).toString());
	
	printLine("(9.656).toExponential(2) => " + (9.656).toExponential(2));
	printLine("(9.656).toExponential(4) => " + (9.656).toExponential(4));
	printLine("(9.656).toExponential(6) => " + (9.656).toExponential(6));
		
	printLine("(9.656).toFixed(0) => " + (9.656).toFixed(0)); // Round up
	printLine("(9.656).toFixed(2) => " + (9.656).toFixed(2));
	printLine("(9.656).toFixed(4) => " + (9.656).toFixed(4));
	printLine("(9.656).toFixed(6) => " + (9.656).toFixed(6));	

	printLine("(9.656).toPrecision() => " +  (9.656).toPrecision()); 
	printLine("(9.656).toPrecision(2) => " + (9.656).toPrecision(2));
	printLine("(9.656).toPrecision(4) => " + (9.656).toPrecision(4));
	printLine("(9.656).toPrecision(6) => " + (9.656).toPrecision(6));	
}

init();