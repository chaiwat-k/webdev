// js011_jsNumber UI logic
// Depends on jsMainLib.js

function printLine(line){
	printLineOnDiv("printDiv",line);
}

function init(){
	var d1 = new Date(); // Current date/time
	var d2 = new Date(86400000); // Zero time plus the number
	var d3 = new Date("2014-12-28 11:11:11"); // Invalid
	var d4 = new Date("October 13, 2014 11:13:00"); // Valid
	var d5 = new Date(2015, 1, 17, 18, 34, 03); // From arguments	
	
	printLine("d1 => " + d1);
	printLine("d2 => " + d2);
	printLine("d3 => " + d3);
	printLine("d4 => " + d4);
	printLine("d5 => " + d5);
	
	// Displaying dates
	printLine("d1.toString() => " + d1.toString());
	printLine("d2.toUTCString() => " + d2.toUTCString());
	printLine("d4.toDateString() => " + d4.toDateString());	
	
	// Date methods
	printLine("d1.getDate() => " + d1.getDate()); // Day of month 1-31
	printLine("d1.getDay() => " + d1.getDay()); // Day of week (0-6)
	printLine("d1.getFullYear() => " + d1.getFullYear()); // yyyy
	printLine("d1.getHours() => " + d1.getHours()); // 0-23
	printLine("d1.getMilliseconds() => " + d1.getMilliseconds()); 0-999
	printLine("d1.getMinutes() => " + d1.getMinutes()); // 0-59
	printLine("d1.getMonth() => " + d1.getMonth()); // 0-11
	printLine("d1.getSeconds() => " + d1.getSeconds()); // 0-59
	printLine("d1.getTime() => " + d1.getTime()); // Millisec since Jan 1st, 1970
	
	// There are setter methods...
	
	// Parsing date
	var msec = Date.parse("March 21, 2012"); // Milisec since epoch
	var d6 = new Date(msec);
	printLine("d6.toDateString() => " + d6.toDateString());
	
	// Compare
	printLine("d1 < d2 : " + d1 < d2);
	
}

init();