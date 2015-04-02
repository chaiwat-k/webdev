// js012_jsArray UI logic
// Depends on jsMainLib.js

function printLine(line){
	printLineOnDiv("printDiv",line);
}

function init(){
	var cars = ["Saab", "Volvo", "BMW"];
	printLine("cars => "+cars);
	
	var mixedArray = ["Toyota", 12, {x:1,y:"James",z:new Date('December 20, 1978')}];
	printLine(mixedArray[0]);
	printLine(mixedArray[1]);
	printLine(mixedArray[2].x);
	printLine(mixedArray[2].y);
	printLine(mixedArray[2].z);
	
	// Properties and methods
	
	printLine(cars.sort());
	printLine("cars => "+cars);
	printLine(cars.length);
	
	// Adding new element
	cars[cars.length] = "Nissan"; // Append
	cars[cars.length-2] = "Subaru"; // Insert
	printLine("cars => "+cars);
	
	// Looping an array
	for(var i = 0; i<cars.length; i++){
		printLine("cars["+i+"] => " + cars[i]);
	}
	
	printLine("isArray(cars) => " + isArray(cars));
	
	// Convert to string
	printLine(cars.valueOf()); // or cars.toString();
	
	var motorCycles = ["Yamaha", "Halay", "Honda"];
	var joinedStr = motorCycles.join("|"); // | is separator
	printLine("joinedStr => " + joinedStr);
	
	// Poping and pushing
	var fruits = ['banana', 'orange', 'apple', 'mango'];
	fruits.pop(); // Removes the last element	
	fruits.push('kiwi'); // Append new element
	printLine("fruits => " + fruits);
	
	fruits.splice(2,0,'lemon','melon'); // add two elements
	fruits.splice(3,2); // remove two elements
	printLine("fruits => " + fruits);
	
	fruits.reverse(); // reverse the array
	
	var persons = [
		{f:"Jonny", l:"Depp"},
		{f:"Nicole", l:"Kidman"},
		{f:"George", l:"Clooney"}
	];
	
	persons.sort(function(a,b){
		if(a.l > b.l) return 1;
		else if(a.l == b.l) return 0;
		else return -1;
	});
	
	for(var i = 0; i<persons.length; i++){
		printLine("persons["+i+"].l => " + persons[i].l);
	}
	
	// Joining arrays
	
	var combineVehicles = cars.concat(motorCycles);
	printLine("combineVehicles => "+combineVehicles);
	
	// Slice out some pieces
	combineVehicles = combineVehicles.slice(1,3);
	printLine("combineVehicles => "+combineVehicles);
	
}

init();