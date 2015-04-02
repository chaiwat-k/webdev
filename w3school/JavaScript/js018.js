// js018_jsRegex UI logic
// Depends on jsMainLib.js

function printLine(line){
	printLineOnDiv("printDiv",line);
}

function init(){

// Syntax /pattern/modifiers; (No need to wrap by single or double quotes)
var patt = /w3schools/i; // w3schools = pattern, i = case insensitive (modifier)

// Using String search() with regex
var str = "Visit W3Schools";
printLine("str.search(/w3schools/i) => " + str.search(/w3schools/i)); // returns 6

// Using String search() with string
printLine("str.search('W3Schools') => " + str.search('W3Schools')); // returns 6

str = "Java xxxxxxx Java xx9xxx script Java";
printLine("str.search(/Java/g) => " + str.search(/Java/g));
printLine("str.search(/[av]/i) => " + str.search(/[av]/i));
printLine("str.search(/[0-9]/i) => " + str.search(/[0-9]/i));	
printLine("str.search(/\\d/i) => " + str.search(/\d/i));
printLine("str.search(/\\s/i) => " + str.search(/\s/i));

// Using test()
patt = /e/;
printLine("patt.test(/e/) => " + patt.test(/e/));
printLine("/e/.test(str) => " + /e/.test(str));

// Using exec()
printLine("/x9/.exec(str) => " + /x9/.exec(str));

}

init();