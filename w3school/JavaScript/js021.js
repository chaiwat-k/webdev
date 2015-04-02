// js021_jsObject UI logic
// Depends on jsMainLib.js

function printLine(line){
	printLineOnDiv("printDiv",line);
}

// Student class
function Student(id, name, dob, grade){

	// fields
	this.id = id;
	this.name = name;
	this.dateOfBirth = dob;
	this.grade = 1;
	if(grade >= 1 && grade <= 12) this.grade = grade;
	
	// methods
	this.info = function(){
		return this.name + "(" + this.id + ")" + " grade " + this.grade +
		(this.grade === 12 ? " GRADUATED!" : "");
	};
	
	this.upgrade = function(g){
		if(this.grade + g > 12) throw "Unable to upgrade";
		this.grade += g;
		return this;
	};
	
	this.downgrade = function(g){
		if(this.grade - g < 1) throw "Unable to downgrade";
		this.grade -= g;
		return this;
	};
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

	// Creating object type (class)	
	var s1 = new Student('001', 'John Doe', new Date(1988, 12, 28), 8);
	printLine("s1.info => " + s1.info());
	printLine("s1.upgrade(2).info() => " + s1.upgrade(2).info());
	printLine("s1.downgrade(4).info() => " + s1.downgrade(4).info());
	
	var s2 = new Student('002', 'Frank Freak', new Date(1999, 10, 30), 5);
	printLine("s2.info => " + s2.info());
	printLine("s2.dateOfBirth.toDateString() => " + s2.dateOfBirth.toDateString());
	
	// Js object are mutable
	var refOfS2 = s2;
	refOfS2.downgrade(3);
	printLine("s2.info => " + s2.info());
	
	// Extending instantly
	s2.graduate = function(){this.grade = 12;};
	s2.graduate();
	printLine("s2.info => " + s2.info());
	
	try{
		s1.graduate(); // undefined
		printLine("s1.info => " + s1.info());
	}catch(e){
		printLine("ERROR: "+e);
	}
	
	// Extend by class (adding new property/method to the prototype
	Student.prototype.fullInfo = function(){
		return this.info() + " DOB: " + this.dateOfBirth.toDateString();
	};
	
	// Now we can use fullInfo() in both instances
	printLine("s1.fullInfo() => " + s1.fullInfo());
	printLine("s2.fullInfo() => " + s2.fullInfo());
}

init();