// UI Logic for js004_jsSyntax.html

function addNumbers(a,b){ 
	return a+b; 
}
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
function init(){
	
	// JS statements
	var x = 1;
	var y = 2;
	var z = x + y;
	
	console.log("z = " + z);
	
	var s1 = "John Doe", s2 = 'Jane Doe';
	
	console.log("s1 = " + s1 + ", s2 = " + s2);
	
	var anUndefinedVal;
	
	console.log("anUndefinedVal = " + anUndefinedVal);
	
	// Re-declare variable
	var car = "Volvo";
	var car;
	console.log("car = " + car);
	var car = "Benz";
	console.log("car = " + car);
	
	// Data types
	var length = 16; // Number
	var lastName = "Johnson"; // String
	var cars = ["Volvo","Benz","Saab","BMW"]; // Array
	var x = { firstName: "Denis", lastName: "Richards", age:32 }; // Object
	
	console.log("typeof length = " + typeof length);
	console.log("typeof lastName = 'string' : " + typeof lastName);
	console.log("typeof cars = 'object' : " + typeof cars);
	console.log("typeof x = 'object' : " + typeof x);
	console.log("typeof anUndefinedVal : " + typeof anUndefinedVal);
	
	// JavaScript has dynamic type
	var y = 1;
	y = "James";
	y = [1, 2, 3];
	
	console.log("y.length = " + y.length);
	
	// Strings
	var w = 'Volvo X60'; // String with single quotes
	w = "Volvo E80"; // String with double quotes
	w = "It's alright."; // Single quote inside double quotes
	w = "He is called 'Johny'."; // Single quotes inside double quotes
	w = 'He is called "Johny".'; // Double quotes inside single quotes
	
	console.log("w = " + w);
	
	// Numbers
	var n1 = 34.00; // With decimal
	n1 = 38; // Without decimal
	var n2 = 1234e5; //123400000
	n2 = 1234e-5; //0.01234
	
	console.log("n2 = " + n2);
	
	// Boolean
	var b1 = true;
	b1 = !b1;
	
	console.log("b1 = " + b1);
	
	// Function
	console.log("5+5 = " + addNumbers(5,5));
	console.log("toCelsius : " + toCelsius); // Access function without () return function definition
}

init();