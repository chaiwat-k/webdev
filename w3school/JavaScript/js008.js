// js008_jsString UI logic
// Depends on jsMainLib.js

function printLine(line){
	printLineOnDiv("printDiv",line);
}

function init(){
	// String
	
	var str1 = "Steve \"Sting\" Boden.";
	var str2 = 'Halk \'Imortal\' \
	Hogan.'; // With line break
	
	printLine(str1);
	printLine(str2);

	// String methods
	
	var sample1 = 'Hello!!! \'John\'';
	var output = '';
	
	output += ' Length = ' + sample1.length + '<br />';
	output += ' charAt(3) = ' + sample1.charAt(3) + '<br />';
	output += ' charCodeAt(3) = ' + sample1.charCodeAt(3) + '<br />';
	output += ' concat(\' Cena\') = ' + sample1.concat(' Cena') + '<br />';
	output += ' indexOf(\'l\') = ' + sample1.indexOf('l') + '<br />';
	output += ' lastIndexOf(\'l\') = ' + sample1.lastIndexOf('l') + '<br />';
	output += ' sample1.match(\'ll\') = ' + sample1.match('ll') + '<br />';
	output += ' sample1.replace(\'ll\',\'XX\') = ' + sample1.replace('ll','XX') + '<br />';
	output += ' search(\'XX\') = ' + sample1.search('XX') + '<br />';
	
	sample1 = '0123456789$ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	output += sample1 + '<br />';
	
	output += ' slice(3,6) = ' + sample1.slice(3,6) + '<br />';
	output += ' slice(-10,-6) = ' + sample1.slice(-10,-6) + '<br />';
	output += ' slice(3) = ' + sample1.slice(3) + '<br />';
	output += ' slice(-3) = ' + sample1.slice(-3) + '<br />';
	
	output += ' split(\'$\') = ' + sample1.split('$') + '<br />';
	output += ' split(\'\') = ' + sample1.split('') + '<br />'; // Split in characters
	
	output += ' substring(3, 6) = ' + sample1.substring(3, 6) + '<br />';
	output += ' substr(3, 6) = ' + sample1.substr(3, 6) + '<br />';
	
	String.prototype.toCharArray = function(){return this.split('');};
	
	output += ' sample1.toCharArray() = ' + sample1.toCharArray() +'<br />';
	
	printLine(output);	
	
	var sample2 = "    12345e2    ";
	sample2 = sample2.trim();
	printLine(sample2);
}

init();