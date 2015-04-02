// UI logic for js005_jsObject.html
// Dependent on jsMainLib.js

function printLine(line){
	printLineOnDiv("printDiv",line);
}

function init(){
	
	var person = { 
		firstName: 'John',
		lastName: 'Doe',
		dateOfBirth: new Date(1978, 12, 28),
		age: function() { return dateDiff(new Date(),this.dateOfBirth).years;},
		toString: function(){ return ' F= ' + this.firstName +
			',L= ' + this.lastName +
			',A= ' + this.age();		
		},
		fullName: function(){ return this.fistName + ' ' 
		+ this.lastName;}
	};	
	
	// Accessing property #1
	printLine("person.dateOfBirth = " + person.dateOfBirth);
	// Accessing property #2
	printLine("person.firstName = " + person.firstName);	
	// Accessing method
	printLine("Person : " + person.toString());
}

init();