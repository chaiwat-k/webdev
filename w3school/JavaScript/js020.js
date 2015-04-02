// js020_jsJSON UI logic
// Depends on jsMainLib.js

function printLine(line){
	printLineOnDiv("printDiv",line);
}

function init(){
	
	var org = {
		"employees":[
			{"firstName":"John", "lastName":"Doe"},
			{"firstName":"Anna", "lastName":"Smith"},
			{"firstName":"Peter", "lastName":"Jones"},
		]
	};
	
	printLine("org['employees'].length => " + org['employees'].length);
	for(var i = 0; i < org['employees'].length; i++){
		for(r in org['employees'][i]){
			printLine("i = " + i + ", org['employees']["+i+"]["+r+"] = " + org['employees'][i][r]);
		}
	}
	
	// Converting from text
	var text = '{ "employees" : [' +
	'{ "firstName":"John" , "lastName":"Doe" },' +
	'{ "firstName":"Anna" , "lastName":"Smith" },' +
	'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

	var obj = JSON.parse(text);
	printLine("obj.employees[0].firstName => " + obj.employees[0].firstName);	
	
	
}

init();