// js022_jsFunction UI logic
// Depends on jsMainLib.js

function printLine(line){
	printLineOnDiv("printDiv",line);
}

// Declare function
function f1(){
	printLine("Called on f1()");
}

// JavaScript don't check type or number of args
function incompleteArgs(x,y){
	if(arguments.length > 2) throw "Too many arguments";
	if(x === undefined) x = 0; // Given a default value
	if(y === undefined) throw "Incomplete arguments"; // Or a more strictly way
}

// Multiple arguments function
function sum(){
	var result = 0;
	for(var i = 0; i < arguments.length; i++){
		if(isNaN(arguments[i])) continue;
		result += arguments[i];
	}
	return result;
}

// Nested function
function addV1(){
	var counter = 0;
	// Nested function
	function plus(){
		counter += 1;
	}
	plus();
	return counter;
}

// Class with private field/method
function Circle(r){
	if(r === undefined) r = 1;
	var radius = r; // private 
	
	this.getRadius = function(){ return radius; }
	this.circumference = function() { return (2 * Math.PI * radius).toFixed(2); }
	this.area = function() { return (Math.PI * radius * radius).toFixed(2); }
	this.shrink = function(n) {
		if(n === undefined) n = 0;
		if(radius - n < 1) throw "Cannot shrink any more";
		radius -= n;
		return this;
	};
	this.grow = function(n) {
		if(n === undefined) n = 0;
		radius += n;
		return this;
	}
	
	/*function gatherInfo(){ //  private function
		return "Circle(" + radius + "): " + this.area();
	}*/
	
	this.info = function(){
		var text = "";
		if(radius === 1) text += " UNIT! ";
		return text += "Circle(" + radius + "): " + this.area();
	}
}

function init(){

	f1();
	// Function expression (delegate)
	var f2 = function(g) { printLine("Called on f2() with param: + " + g); };
	f2('Hi, I\'m new to JavaScript!');

	// Still can reference a declared function
	var x = f1;
	x();

	// Handle incomplete arguments
	try{
		incompleteArgs(7);
	}catch(e){
		printLine("ERROR: " + e);
	}	

	printLine("sum1 => " + sum(1,2,3,4,5));
	printLine("sum2 => " + sum(1,2,'happy',4,5, 6, 7, 8, 9));
	
	// Using the nested function
	addV1();
	addV1();
	printLine("counter= "+addV1()); 
	
	// Using the closure
	var addV2 = (function(){
		var counter = 0;
		return function() {
			return counter += 1;
		};
	})();
	
	addV2();
	addV2();
	printLine("counter= "+addV2());

	// Circle example
	var c1 = new Circle();
	printLine("c1.getRadius() => " + c1.getRadius());
	printLine("c1.circumference() => " + c1.circumference());
	printLine("c1.area() => " + c1.area());
	printLine("c1.grow(2).info() => " + c1.grow(2).info());
	printLine("c1.radius => " + c1.radius); // undefined
	printLine("c1.circumference() => " + c1.circumference());
	printLine("c1.area() => " + c1.area());	
}

init();